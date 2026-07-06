def create_people_table(conn):

    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS people(
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            name VARCHAR(100) NOT NULL,
            phone VARCHAR(20),
            reminder_date DATE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

            FOREIGN KEY(user_id)
            REFERENCES users(id)
            ON DELETE CASCADE
        )
    """)

    conn.commit()
    cursor.close()
