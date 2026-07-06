from flask import Blueprint
from flask import jsonify

from config.database import get_connection

report_bp = Blueprint(
    "report",
    __name__
)


@report_bp.route(
    "/report/<int:person_id>",
    methods=["GET"]
)
def report(person_id):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT
            amount,
            type,
            note,
            created_at
        FROM transactions
        WHERE person_id = %s
        """,
        (person_id,)
    )

    rows = cursor.fetchall()

    conn.close()

    result = []

    for row in rows:
        result.append({
            "amount": row[0],
            "type": row[1],
            "note": row[2],
            "created_at": row[3]
        })

    return jsonify(result)
