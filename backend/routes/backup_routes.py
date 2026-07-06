from flask import Blueprint
from flask import jsonify

from utils.backup import (
    create_backup
)

from utils.restore import (
    restore_backup
)

backup_bp = Blueprint(
    "backup",
    __name__
)


@backup_bp.route(
    "/backup"
)
def backup_database():

    path = create_backup()

    return jsonify({
        "success": True,
        "backup": path
    })


@backup_bp.route(
    "/restore"
)
def restore_database():

    path = restore_backup()

    return jsonify({
        "success": True,
        "restored": path
    })
