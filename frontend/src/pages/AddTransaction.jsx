import { useState } from "react";

function AddTransaction({ personId }) {
    const [amount, setAmount] = useState("");
    const [note, setNote] = useState("");
    const [type, setType] = useState("BORROW");

    const saveTransaction = async () => {
        if (!amount) {
            alert("Amount Required");
            return;
        }

        try {
            const response = await fetch(
                "http://127.0.0.1:5000/transactions",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        person_id: personId,
                        amount,
                        note,
                        type,
                    }),
                }
            );

            const data = await response.json();
            alert(data.message);

            setAmount("");
            setNote("");
            setType("BORROW");
        } catch (error) {
            console.error(error);
            alert("Server Error");
        }
    };

    return (
        <div>
            <h2>Add Borrow Entry</h2>

            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <br />

            <input
                type="text"
                placeholder="Reason"
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
            <br />

            <select
                value={type}
                onChange={(e) => setType(e.target.value)}
            >
                <option value="BORROW">Borrow</option>
                <option value="PAID">Paid</option>
            </select>

            <br />

            <button onClick={saveTransaction}>
                Save
            </button>
        </div>
    );
}

export default AddTransaction;
