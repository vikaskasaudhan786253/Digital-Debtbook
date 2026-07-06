import shutil

def create_backup():
    source = (
        "database/debtbook.db"
    )
    destination = (
        "backups/debtbook_backup.db"
    )
    shutil.copy2(
        source,
        destination
    )
    return destination
