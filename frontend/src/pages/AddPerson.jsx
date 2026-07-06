import { useState } from "react";

function AddPerson() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [reminderDate, setReminderDate] = useState("");

    const savePerson = async () => {
        if (!name) {
            alert("Name Required");
            return;
        }

        if (!phone) {
            alert("Phone Required");
            return;
        }

        try {
            const response = await fetch(
                "http://127.0.0.1:5000/people",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        user_id: 1,
                        name,
                        phone,
                        reminder_date: reminderDate,
                    }),
                }
            );

            const data = await response.json();
            alert(data.message);

            setName("");
            setPhone("");
            setReminderDate("");
        } catch (error) {
            console.error(error);
            alert("Server Error");
        }
    };

    return (
        <div>
            <h2>Add Person</h2>

            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />

            <input
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <br />

            <input
                type="date"
                value={reminderDate}
                onChange={(e) => setReminderDate(e.target.value)}
            />
            <br />

            <button onClick={savePerson}>
                Save Person
            </button>
        </div>
    );
}

export default AddPerson;
