import jwt
import datetime
import secrets

SECRET_KEY = "8f2e91c7d5ab4e6f9a1b3c8d7e2f5a6b4c9d1e8f7a2b3c5d"
def generate_token(user_id):
    payload = {
        "user_id": user_id,
        "exp":
        datetime.datetime.utcnow()
        +
        datetime.timedelta(days=1)

    }

    token = jwt.encode(
        payload,
        SECRET_KEY,
        algorithm="HS256"
    )
    return token
