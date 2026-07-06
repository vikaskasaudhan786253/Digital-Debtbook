import { useState } from "react";
import {
    X,
    FileText,
    IndianRupee,
    CalendarDays
} from "lucide-react";

export default function NewTransactionModal({
    open,
    onClose,
    people = [],
    fetchTransactions
}) {

    const [type, setType] = useState("Given");

    const [personId, setPersonId] = useState("");

    const [amount, setAmount] = useState("");

    const [note, setNote] = useState("");

    const [date, setDate] = useState("");

    if (!open) return null;

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            const response = await fetch(
                "https://digital-debtbook.onrender.com/transactions",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        user_id: 1,
                        person_id: personId,
                        transaction_type: type,
                        amount: Number(amount),
                        note,
                        transaction_date: date
                    }),
                }
            );

            const data = await response.json();

            if (data.success) {

                alert("Transaction Added");

                setPersonId("");
                setAmount("");
                setNote("");
                setDate("");

                await fetchTransactions();;

                onClose();

            } else {

                alert(data.message);

            }

        } catch (err) {

            console.error(err);

            alert("Server Error");

        }

    };

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 ">

            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

                {/* Header */}

                <div className="mb-8 flex items-center justify-between">

                    <h2 className="text-3xl font-bold text-slate-900">
                        New Transaction
                    </h2>

                    <button onClick={onClose}>
                        <X className="text-slate-400 hover:text-slate-700"/>
                    </button>

                </div>

                {/* Transaction Type */}

                <div className="mb-7 grid grid-cols-4 gap-3">

                    {["Given","Borrowed","Received","Paid"].map(item => (

                        <button
                            key={item}
                            type="button"
                            onClick={() => setType(item)}
                            className={`
                                rounded-full
                                py-3
                                font-semibold
                                transition
                                ${
                                    type===item
                                    ? "bg-blue-600 text-white"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }
                            `}
                        >
                            {item}
                        </button>

                    ))}

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >

                    {/* Person */}

                    <div>

                        <label className="mb-2 block font-semibold text-slate-700">
                            Person
                        </label>

                        <select
    value={personId}
    onChange={(e) => setPersonId(e.target.value)}
    className="w-full rounded-xl border p-3"
    required
>

    <option value="">
        Select a person
    </option>

    {people.map((person) => (

        <option
            key={person.id}
            value={person.id}
        >
            {person.name}
        </option>

    ))}

</select>

                    </div>

                    {/* Amount */}

                    <div>

                        <label className="mb-2 block font-semibold text-slate-700">
                            Amount (₹)
                        </label>

                        <div className="relative">

                            <IndianRupee
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <input
                                type="number"
                                value={amount}
                                onChange={(e)=>setAmount(e.target.value)}
                                placeholder="5000"
                                className="w-full rounded-2xl border border-slate-200 py-4 pl-11 pr-4 outline-none focus:border-blue-500"
                                required
                            />

                        </div>

                    </div>

                    {/* Note */}

                    <div>

                        <label className="mb-2 block font-semibold text-slate-700">
                            Note
                        </label>

                        <div className="relative">

                            <FileText
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <input
                                type="text"
                                value={note}
                                onChange={(e)=>setNote(e.target.value)}
                                placeholder="What is this for?"
                                className="w-full rounded-2xl border border-slate-200 py-4 pl-11 pr-4 outline-none focus:border-blue-500"
                            />

                        </div>

                    </div>

                    {/* Date */}

                    <div>

                        <label className="mb-2 block font-semibold text-slate-700">
                            Date
                        </label>

                        <div className="relative">

                            <CalendarDays
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full rounded-2xl border border-slate-200 py-4 pl-11 pr-4 outline-none focus:border-blue-500"
                                required
                            />

                        </div>

                    </div>

                    {/* Footer */}

                    <div className="flex gap-4 pt-3">

                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 rounded-2xl border border-slate-300 py-4 font-semibold hover:bg-slate-100"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="flex-1 rounded-2xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700"
                        >
                            Add Transaction
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}
