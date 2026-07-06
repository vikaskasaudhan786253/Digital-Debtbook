from flask import Blueprint
from flask import jsonify

health_bp = Blueprint(
    "health",__name__
)

@health_bp.route("/health")
def health():

    return jsonify({
        "status":"success",
        "message":"Debtbook API Running"
    })



