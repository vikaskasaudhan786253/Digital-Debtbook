from config.database import get_connection

conn = get_connection()

cursor = conn.cursor()

cursor.execute(
"""
CREATE TABLE IF NOT EXISTS users(

id SERIAL PRIMARY KEY,

name VARCHAR(100),

email VARCHAR(100)
UNIQUE,

password TEXT

)
"""
)

conn.commit()

conn.close()
