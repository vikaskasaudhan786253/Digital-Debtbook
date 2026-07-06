from flask import Blueprint, request, jsonify
from config.database import get_connection

transaction_bp = Blueprint(
    "transaction",
    __name__
)


@transaction_bp.route("/transactions", methods=["POST"])
def add_transaction():

    data = request.get_json()

    user_id = data["user_id"]
    person_id = data["person_id"]

    transaction_type = data["transaction_type"]

    amount = float(data["amount"])

    note = data.get("note")

    transaction_date = data["transaction_date"]

    conn = get_connection()
    cursor = conn.cursor()

    try:

        # ----------------------------
        # Save Transaction
        # ----------------------------

        cursor.execute(
            """
            INSERT INTO transactions
            (
                user_id,
                person_id,
                transaction_type,
                amount,
                note,
                transaction_date
            )
            VALUES(%s,%s,%s,%s,%s,%s)
            RETURNING id
            """,
            (
                user_id,
                person_id,
                transaction_type,
                amount,
                note,
                transaction_date
            )
        )

        transaction_id = cursor.fetchone()[0]

        # ----------------------------
        # Update Balance
        # ----------------------------

        if transaction_type == "Given":

            cursor.execute(
                """
                UPDATE people
                SET balance = balance + %s
                WHERE id=%s
                """,
                (
                    amount,
                    person_id
                )
            )

        elif transaction_type == "Received":

            cursor.execute(
                """
                UPDATE people
                SET balance = balance - %s
                WHERE id=%s
                """,
                (
                    amount,
                    person_id
                )
            )

        elif transaction_type == "Borrowed":

            cursor.execute(
                """
                UPDATE people
                SET balance = balance - %s
                WHERE id=%s
                """,
                (
                    amount,
                    person_id
                )
            )

        elif transaction_type == "Paid":

            cursor.execute(
                """
                UPDATE people
                SET balance = balance + %s
                WHERE id=%s
                """,
                (
                    amount,
                    person_id
                )
            )

        conn.commit()

        return jsonify(
            {
                "success": True,
                "message": "Transaction Added Successfully",
                "transaction_id": transaction_id
            }
        )

    except Exception as e:

        conn.rollback()

        return jsonify(
            {
                "success": False,
                "message": str(e)
            }
        ), 500

    finally:

        cursor.close()
        conn.close()



@transaction_bp.route("/transactions", methods=["GET"])
def get_transactions():

    user_id = request.args.get("user_id")

    conn = get_connection()
    cursor = conn.cursor()

    try:

        cursor.execute(
            """
            SELECT
                t.id,
                p.name,
                t.transaction_type,
                t.amount,
                t.note,
                t.transaction_date
            FROM transactions t
            JOIN people p
                ON t.person_id = p.id
            WHERE t.user_id=%s
            ORDER BY t.transaction_date DESC
            """,
            (user_id,)
        )

        rows = cursor.fetchall()

        result = []

        for row in rows:

            result.append({

                "id": row[0],
                "person_name": row[1],
                "transaction_type": row[2],
                "amount": float(row[3]),
                "note": row[4],
                "transaction_date": row[5]

            })

        return jsonify(result)

    except Exception as e:

        return jsonify({
            "success": False,
            "message": str(e)
        }),500

    finally:

        cursor.close()
        conn.close()



@transaction_bp.route("/transactions/<int:id>", methods=["DELETE"])
def delete_transaction(id):

    conn = get_connection()
    cursor = conn.cursor()

    try:

        # Get transaction details
        cursor.execute(
            """
            SELECT
                person_id,
                transaction_type,
                amount
            FROM transactions
            WHERE id=%s
            """,
            (id,)
        )

        transaction = cursor.fetchone()

        if transaction is None:

            return jsonify({
                "success": False,
                "message": "Transaction Not Found"
            }),404

        person_id = transaction[0]
        transaction_type = transaction[1]
        amount = float(transaction[2])

        # Reverse balance
        if transaction_type == "Given":

            cursor.execute(
                """
                UPDATE people
                SET balance = balance - %s
                WHERE id=%s
                """,
                (
                    amount,
                    person_id
                )
            )

        elif transaction_type == "Borrowed":

            cursor.execute(
                """
                UPDATE people
                SET balance = balance + %s
                WHERE id=%s
                """,
                (
                    amount,
                    person_id
                )
            )

        elif transaction_type == "Received":

            cursor.execute(
                """
                UPDATE people
                SET balance = balance + %s
                WHERE id=%s
                """,
                (
                    amount,
                    person_id
                )
            )

        elif transaction_type == "Paid":

            cursor.execute(
                """
                UPDATE people
                SET balance = balance - %s
                WHERE id=%s
                """,
                (
                    amount,
                    person_id
                )
            )

        # Delete transaction
        cursor.execute(
            """
            DELETE FROM transactions
            WHERE id=%s
            """,
            (id,)
        )

        conn.commit()

        return jsonify({
            "success": True,
            "message": "Transaction Deleted Successfully"
        })

    except Exception as e:

        conn.rollback()

        return jsonify({
            "success": False,
            "message": str(e)
        }),500

    finally:

        cursor.close()
        conn.close()



@transaction_bp.route("/transactions/<int:id>", methods=["PUT"])
def update_transaction(id):

    data = request.get_json()

    person_id = data["person_id"]
    transaction_type = data["transaction_type"]
    amount = float(data["amount"])
    note = data.get("note")
    transaction_date = data["transaction_date"]

    conn = get_connection()
    cursor = conn.cursor()

    try:

        # ----------------------------
        # Get old transaction
        # ----------------------------

        cursor.execute(
            """
            SELECT person_id, transaction_type, amount
            FROM transactions
            WHERE id=%s
            """,
            (id,)
        )

        old = cursor.fetchone()

        if old is None:
            return jsonify({
                "success": False,
                "message": "Transaction not found"
            }), 404

        old_person = old[0]
        old_type = old[1]
        old_amount = float(old[2])

        # ----------------------------
        # Reverse old balance
        # ----------------------------

        if old_type == "Given":
            cursor.execute(
                "UPDATE people SET balance = balance - %s WHERE id=%s",
                (old_amount, old_person)
            )

        elif old_type == "Borrowed":
            cursor.execute(
                "UPDATE people SET balance = balance + %s WHERE id=%s",
                (old_amount, old_person)
            )

        elif old_type == "Received":
            cursor.execute(
                "UPDATE people SET balance = balance + %s WHERE id=%s",
                (old_amount, old_person)
            )

        elif old_type == "Paid":
            cursor.execute(
                "UPDATE people SET balance = balance - %s WHERE id=%s",
                (old_amount, old_person)
            )

        # ----------------------------
        # Update transaction
        # ----------------------------

        cursor.execute(
            """
            UPDATE transactions
            SET
                person_id=%s,
                transaction_type=%s,
                amount=%s,
                note=%s,
                transaction_date=%s
            WHERE id=%s
            """,
            (
                person_id,
                transaction_type,
                amount,
                note,
                transaction_date,
                id
            )
        )

        # ----------------------------
        # Apply new balance
        # ----------------------------

        if transaction_type == "Given":
            cursor.execute(
                "UPDATE people SET balance = balance + %s WHERE id=%s",
                (amount, person_id)
            )

        elif transaction_type == "Borrowed":
            cursor.execute(
                "UPDATE people SET balance = balance - %s WHERE id=%s",
                (amount, person_id)
            )

        elif transaction_type == "Received":
            cursor.execute(
                "UPDATE people SET balance = balance - %s WHERE id=%s",
                (amount, person_id)
            )

        elif transaction_type == "Paid":
            cursor.execute(
                "UPDATE people SET balance = balance + %s WHERE id=%s",
                (amount, person_id)
            )

        conn.commit()

        return jsonify({
            "success": True,
            "message": "Transaction updated successfully"
        })

    except Exception as e:

        conn.rollback()

        return jsonify({
            "success": False,
            "message": str(e)
        }), 500

    finally:

        cursor.close()
        conn.close()



@transaction_bp.route("/people/<int:person_id>/transactions", methods=["GET"])
def get_person_transactions(person_id):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            id,
            person_id,
            transaction_type,
            amount,
            note,
            transaction_date,
            created_at
        FROM transactions
        WHERE person_id=%s
        ORDER BY transaction_date DESC
    """, (person_id,))

    rows = cursor.fetchall()

    cursor.close()
    conn.close()

    transactions = []

    for row in rows:
        transactions.append({
            "id": row[0],
            "person_id": row[1],
            "transaction_type": row[2],
            "amount": float(row[3]),
            "note": row[4],
            "transaction_date": row[5],
            "created_at": row[6]
        })

    return jsonify({
        "success": True,
        "transactions": transactions
    })
