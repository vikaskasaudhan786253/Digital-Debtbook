import shutil

def restore_backup():
    source = (
        "backups/debtbook_backup.db"
    )
    destination = (
        "database/debtbook.db"
    )
    shutil.copy2(
        source,
        destination
    )
    return destination
