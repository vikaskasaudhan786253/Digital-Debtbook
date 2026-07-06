def create_transaction_table(conn):
    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS transactions (

            id SERIAL PRIMARY KEY,

            user_id INTEGER NOT NULL,

            person_id INTEGER NOT NULL,

            transaction_type VARCHAR(20) NOT NULL,

            amount DECIMAL(10,2) NOT NULL,

            note TEXT,

            transaction_date DATE NOT NULL,

            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

            FOREIGN KEY (user_id)
                REFERENCES users(id)
                ON DELETE CASCADE,

            FOREIGN KEY (person_id)
                REFERENCES people(id)
                ON DELETE CASCADE
        );
    """)

    conn.commit()
    cursor.close()
