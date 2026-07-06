from flask import Blueprint, request, jsonify
from config.database import get_connection

people_bp = Blueprint(
    "people",
    __name__
)


# ==========================
# Add Person
# ==========================

@people_bp.route("/people", methods=["POST"])
def add_person():

    data = request.get_json()
    print(data)

    user_id = data["user_id"]
    name = data["name"]
    phone = data.get("phone")
    email = data.get("email")
    reminder_date = data.get("reminder_date")

    conn = get_connection()
    cursor = conn.cursor()

    try:

        cursor.execute(
            """
            INSERT INTO people
            (
                user_id,
                name,
                phone,
                email,
                reminder_date
            )
            VALUES
            (%s,%s,%s,%s,%s)
            RETURNING id
            """,
            (
                user_id,
                name,
                phone,
                email,
                reminder_date
            )
        )

        person_id = cursor.fetchone()[0]

        conn.commit()

        return jsonify({
            "success": True,
            "message": "Person Added Successfully",
            "person_id": person_id
        }), 201

    except Exception as e:

        conn.rollback()

        return jsonify({
            "success": False,
            "message": str(e)
        }), 500

    finally:
        cursor.close()
        conn.close()


# ==========================
# Get All People
# ==========================

@people_bp.route("/people", methods=["GET"])
def get_people():

    user_id = request.args.get("user_id")

    conn = get_connection()
    cursor = conn.cursor()

    try:

        cursor.execute("""
SELECT
    p.id,
    p.name,
    p.phone,
    p.email,
    p.reminder_date,

    COALESCE(
        SUM(
            CASE

                WHEN t.transaction_type IN ('Given','Paid')
                    THEN t.amount

                WHEN t.transaction_type IN ('Borrowed','Received')
                    THEN -t.amount

                ELSE 0

            END
        ),
        0
    ) AS balance

FROM people p

LEFT JOIN transactions t
ON p.id = t.person_id

WHERE p.user_id = %s

GROUP BY
    p.id,
    p.name,
    p.phone,
    p.email,
    p.reminder_date

ORDER BY p.created_at DESC
""", (user_id,))

        rows = cursor.fetchall()

        people = []

        for row in rows:

            people.append({

                "id": row[0],
                "name": row[1],
                "phone": row[2],
                "email": row[3],
                "reminder_date": row[4],
                "balance": row[5]

            })

        return jsonify(people), 200

    except Exception as e:

        return jsonify({
            "success": False,
            "message": str(e)
        }), 500

    finally:

        cursor.close()
        conn.close()


@people_bp.route("/people/<int:id>", methods=["PUT"])
def update_person(id):

    data = request.get_json()

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        UPDATE people
        SET
            name=%s,
            phone=%s,
            email=%s
        WHERE id=%s
        """,
        (
            data["name"],
            data["phone"],
            data["email"],
            id
        )
    )

    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({
        "success": True,
        "message": "Person Updated Successfully"
    })


@people_bp.route("/people/<int:id>", methods=["DELETE"])
def delete_person(id):

    conn = get_connection()
    cursor = conn.cursor()

    try:

        cursor.execute(
            """
            DELETE FROM people
            WHERE id=%s
            """,
            (id,)
        )

        conn.commit()

        return jsonify({
            "success":True,
            "message":"Person Deleted"
        })

    except Exception as e:

        conn.rollback()

        return jsonify({
            "success":False,
            "message":str(e)
        }),500

    finally:

        cursor.close()
        conn.close()


@people_bp.route("/people/<int:person_id>", methods=["GET"])
def get_person(person_id):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            id,
            user_id,
            name,
            phone,
            email,
            balance,
            created_at
        FROM people
        WHERE id = %s
    """, (person_id,))

    person = cursor.fetchone()

    print("PERSON = ",person)

    cursor.close()
    conn.close()

    if not person:
        return jsonify({
            "success": False,
            "message": "Person not found"
        }), 404

    return jsonify({
        "success": True,
        "person": {
            "id": person[0],
            "user_id": person[1],
            "name": person[2],
            "phone": person[3],
            "email":person[4],
            "balance":person[5],
            "created_at": person[6]
        }
    })
