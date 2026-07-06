from flask import Blueprint
from flask import jsonify

user_bp = Blueprint(
    "user",
    __name__
)
@user_bp.route(
    "/profile"
)
def profile():
    return jsonify({
        "name":"Rahul",
        "message":
        "Profile Loaded"
    })
