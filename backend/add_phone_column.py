from config.database import get_connection

conn = get_connection()

cursor = conn.cursor()

cursor.execute("""
ALTER TABLE users
ADD COLUMN IF NOT EXISTS phone VARCHAR(15)
""")

conn.commit()

cursor.close()

conn.close()

print("Done")
