from functools import wraps
from flask import request
from flask import jsonify

def token_required(func):

    @wraps(func)
    def wrapper(*args, **kwargs):
        token = request.headers.get(
            "Authorization"
        )
        if not token:
            return jsonify({
                "message":
                "Token Missing"
            }),401
        return func(
            *args,
            **kwargs
        )
    return wrapper
