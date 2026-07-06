import { useState } from "react";

function AddPersonModal({

    isOpen,

    onClose,

    onPersonAdded

}) {

    const [name, setName] = useState("");

    const [phone, setPhone] = useState("");

    const [email, setEmail] = useState("");

    if (!isOpen) return null;

    const handleSubmit = async () => {

        try {

            const response = await fetch(

                "http://127.0.0.1:5000/add-person",

                {

                    method: "POST",

                    headers: {

                        "Content-Type": "application/json"

                    },

                    body: JSON.stringify({

                        name,

                        phone,

                        email

                    })

                }

            );

            const data = await response.json();

            alert(data.message);

            if (data.success) {

                setName("");

                setPhone("");

                setEmail("");

                onPersonAdded();

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
            w-[450px]
            p-8
            shadow-2xl
            ">

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
                        Add New Person
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

                <div className="space-y-5">

                    <div>

                        <label className="font-semibold">

                            Full Name

                        </label>

                        <input

                            value={name}

                            onChange={(e)=>

                                setName(e.target.value)

                            }

                            placeholder="e.g. Priya Sharma"

                            className="
                            w-full
                            border
                            rounded-xl
                            p-4
                            mt-2
                            "

                        />

                    </div>

                    <div>

                        <label className="font-semibold">

                            Phone Number

                        </label>

                        <input

                            value={phone}

                            onChange={(e)=>

                                setPhone(e.target.value)

                            }

                            placeholder="+91 9876543210"

                            className="
                            w-full
                            border
                            rounded-xl
                            p-4
                            mt-2
                            "

                        />

                    </div>

                    <div>

                        <label className="font-semibold">

                            Email Address

                        </label>

                        <input

                            value={email}

                            onChange={(e)=>

                                setEmail(e.target.value)

                            }

                            placeholder="abc@gmail.com"

                            className="
                            w-full
                            border
                            rounded-xl
                            p-4
                            mt-2
                            "

                        />

                    </div>

                </div>

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
                        "

                    >

                        Cancel

                    </button>

                    <button

                        onClick={handleSubmit}

                        className="
                        flex-1
                        bg-blue-600
                        text-white
                        rounded-xl
                        py-4
                        hover:bg-blue-700
                        "

                    >

                        Add Person

                    </button>

                </div>

            </div>

        </div>

    );

}

export default AddPersonModal;
