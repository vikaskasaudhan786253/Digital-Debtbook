import { useState, useEffect } from "react";
import {
    X,
    IndianRupee,
    FileText,
    CalendarDays
} from "lucide-react";

export default function EditTransactionModal({
    open,
    onClose,
    transaction,
    people,
    fetchTransactions
}) {

    const [type, setType] = useState("");

    const [personId, setPersonId] = useState("");

    const [amount, setAmount] = useState("");

    const [note, setNote] = useState("");

    const [date, setDate] = useState("");

    useEffect(() => {

        if (transaction) {

            setType(transaction.transaction_type);

            setPersonId(transaction.person_id);

            setAmount(transaction.amount);

            setNote(transaction.note || "");

            setDate(transaction.transaction_date);

        }

    }, [transaction]);

    if (!open || !transaction) return null;

    const handleUpdate = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(
    `https://digital-debtbook.onrender.com/transactions/${transaction.id}`,
    {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            person_id: personId,
            transaction_type: type,
            amount,
            note,
            transaction_date: date,
        }),
    }
);

if (!response.ok) {
    const text = await response.text();
    console.log(text);
    throw new Error("Request failed");
}

const data = await response.json();
            if (data.success) {

                fetchTransactions();

                onClose();

            } else {

                alert(data.message);

            }

        } catch (err) {

            console.error(err);

        }

    };

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

            <div className="w-full max-w-xl rounded-3xl bg-white p-8">

                <div className="mb-7 flex items-center justify-between">

                    <h2 className="text-3xl font-bold">

                        Edit Transaction

                    </h2>

                    <button onClick={onClose}>

                        <X/>

                    </button>

                </div>

                {/* Transaction Type */}

                <div className="mb-6 grid grid-cols-4 gap-3">

                    {["Given","Borrowed","Received","Paid"].map(item=>(

                        <button

                            key={item}

                            onClick={()=>setType(item)}

                            type="button"

                            className={`

                                rounded-full

                                py-3

                                font-semibold

                                ${

                                    type===item

                                    ? "bg-blue-600 text-white"

                                    : "bg-slate-100"

                                }

                            `}

                        >

                            {item}

                        </button>

                    ))}

                </div>

                <form
                    onSubmit={handleUpdate}
                    className="space-y-5"
                >

                    <select

                        value={personId}

                        onChange={(e)=>setPersonId(e.target.value)}

                        className="w-full rounded-xl border p-4"

                    >

                        {people?.map(person=>(

                            <option

                                key={person.id}

                                value={person.id}

                            >

                                {person.name}

                            </option>

                        ))}

                    </select>

                    <div className="relative">

                        <IndianRupee
                            className="absolute left-4 top-4"
                        />

                        <input

                            value={amount}

                            onChange={(e)=>setAmount(e.target.value)}

                            className="w-full rounded-xl border py-4 pl-10"

                        />

                    </div>

                    <div className="relative">

                        <FileText
                            className="absolute left-4 top-4"
                        />

                        <input

                            value={note}

                            onChange={(e)=>setNote(e.target.value)}

                            className="w-full rounded-xl border py-4 pl-10"

                        />

                    </div>

                    <div className="relative">

                        <CalendarDays
                            className="absolute left-4 top-4"
                        />
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full rounded-2xl border border-slate-200 py-4 pl-11 pr-4 outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 rounded-xl border py-3"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 rounded-xl bg-blue-600 py-3 text-white"
                        >
                           Update Transaction
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
