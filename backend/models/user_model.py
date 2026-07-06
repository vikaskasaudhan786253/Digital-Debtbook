def create_user_table(conn):

    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users(

            id SERIAL PRIMARY KEY,

            name TEXT NOT NULL,

            email TEXT UNIQUE NOT NULL,

            phone VARCHAR(15) UNIQUE NOT NULL,

            password TEXT NOT NULL,

            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

        )
    """)

    conn.commit()
    cursor.close()
