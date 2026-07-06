import { useState } from "react";

function AddTransactionModal({

    isOpen,

    onClose

}) {

    const [person, setPerson] = useState("");

    const [amount, setAmount] = useState("");

    const [type, setType] = useState("Given");

    const [note, setNote] = useState("");

    const [date, setDate] = useState("");

    if (!isOpen) return null;

    const handleSubmit = async () => {

        try {

            const response = await fetch(

                "http://127.0.0.1:5000/add-transaction",

                {

                    method: "POST",

                    headers: {

                        "Content-Type": "application/json"

                    },

                    body: JSON.stringify({

                        person,

                        amount,

                        type,

                        note,

                        date

                    })

                }

            );

            const data = await response.json();

            alert(data.message);

            if (data.success) {

                setPerson("");

                setAmount("");

                setType("Given");

                setNote("");

                setDate("");

                onClose();

            }

        }

        catch {

            alert("Server Error");

        }

    };

    return (

        <div className="
        fixed
        inset-0
        bg-black/50
        flex
        items-center
        justify-center
        z-50
        ">

            <div className="
            bg-white
            rounded-3xl
            w-[520px]
            p-8
            shadow-2xl
            ">

                {/* Header */}

                <div className="
                flex
                justify-between
                items-center
                mb-8
                ">

                    <h2 className="
                    text-3xl
                    font-bold
                    ">

                        Add Transaction

                    </h2>

                    <button

                        onClick={onClose}

                        className="
                        text-3xl
                        text-slate-400
                        hover:text-red-500
                        "

                    >

                        ×

                    </button>

                </div>

                {/* Person */}

                <div className="mb-5">

                    <label className="font-semibold">

                        Person

                    </label>

                    <input

                        value={person}

                        onChange={(e)=>

                            setPerson(e.target.value)

                        }

                        placeholder="Enter person's name"

                        className="
                        w-full
                        border
                        rounded-xl
                        mt-2
                        p-4
                        "

                    />

                </div>

                {/* Amount */}

                <div className="mb-5">

                    <label className="font-semibold">

                        Amount

                    </label>

                    <input

                        type="number"

                        value={amount}

                        onChange={(e)=>

                            setAmount(e.target.value)

                        }

                        placeholder="Enter amount"

                        className="
                        w-full
                        border
                        rounded-xl
                        mt-2
                        p-4
                        "

                    />

                </div>

                {/* Type */}

                <div className="mb-5">

                    <label className="font-semibold">

                        Transaction Type

                    </label>

                    <select

                        value={type}

                        onChange={(e)=>

                            setType(e.target.value)

                        }

                        className="
                        w-full
                        border
                        rounded-xl
                        mt-2
                        p-4
                        "

                    >

                        <option>

                            Given

                        </option>

                        <option>

                            Borrowed

                        </option>

                        <option>

                            Received

                        </option>

                        <option>

                            Paid

                        </option>

                    </select>

                </div>

                {/* Date */}

                <div className="mb-5">

                    <label className="font-semibold">

                        Date

                    </label>

                    <input

                        type="date"

                        value={date}

                        onChange={(e)=>

                            setDate(e.target.value)

                        }

                        className="
                        w-full
                        border
                        rounded-xl
                        mt-2
                        p-4
                        "

                    />

                </div>

                {/* Note */}

                <div>

                    <label className="font-semibold">

                        Note

                    </label>

                    <textarea

                        rows="4"

                        value={note}

                        onChange={(e)=>

                            setNote(e.target.value)

                        }

                        placeholder="Write a note..."

                        className="
                        w-full
                        border
                        rounded-xl
                        mt-2
                        p-4
                        "

                    />

                </div>

                {/* Buttons */}

                <div className="
                flex
                gap-4
                mt-8
                ">

                    <button

                        onClick={onClose}

                        className="
                        flex-1
                        border
                        rounded-xl
                        py-4
                        hover:bg-gray-100
                        "

                    >

                        Cancel

                    </button>

                    <button

                        onClick={handleSubmit}

                        className="
                        flex-1
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        rounded-xl
                        py-4
                        "

                    >

                        Save Transaction

                    </button>

                </div>

            </div>

        </div>

    );

}

export default AddTransactionModal;
