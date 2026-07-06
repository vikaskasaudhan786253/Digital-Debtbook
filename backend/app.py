from dotenv import load_dotenv
import os

from flask import Flask
from flask_cors import CORS

from config.database import get_connection

from models.user_model import create_user_table
from models.people_model import create_people_table
from models.transaction_model import create_transaction_table

from routes.health_routes import health_bp
from routes.auth_routes import auth_bp
from routes.user_routes import user_bp
from routes.people_routes import people_bp
from routes.transaction_routes import transaction_bp
from routes.dashboard_routes import dashboard_bp
from routes.report_routes import report_bp
from routes.backup_routes import backup_bp
from routes.search_routes import search_bp


# Load environment variables
load_dotenv()

# Create tables
conn = get_connection()

create_user_table(conn)
create_people_table(conn)
create_transaction_table(conn)

conn.close()


# Flask App
app = Flask(__name__)

from flask_cors import CORS

CORS(
    app,
    resources={r"/*": {"origins": "http://localhost:5173"}},
    supports_credentials=True,
    methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization"]
)


@app.route("/")
def home():
    return {
        "status": "success",
        "message": "DebtBook API Running"
    }


# Register Blueprints
app.register_blueprint(health_bp)
app.register_blueprint(auth_bp)
app.register_blueprint(user_bp)
app.register_blueprint(people_bp)
app.register_blueprint(transaction_bp)
app.register_blueprint(dashboard_bp)
app.register_blueprint(report_bp)
app.register_blueprint(backup_bp)
app.register_blueprint(search_bp)


# Debug
DATABASE_URL = os.getenv("DATABASE_URL")
print(DATABASE_URL)


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug = True
    )
