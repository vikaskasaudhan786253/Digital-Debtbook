import { useEffect, useState } from "react";

function TopContacts() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {

        fetch("http://127.0.0.1:5000/top-debtors")

            .then(response => response.json())

            .then(data => setContacts(data))

            .catch(() => {

                setContacts([

                    {
                        id: 1,
                        name: "Rahul Sharma",
                        balance: 12000,
                        phone: "9876543210"
                    },

                    {
                        id: 2,
                        name: "Amit Kumar",
                        balance: 9500,
                        phone: "9876543211"
                    },

                    {
                        id: 3,
                        name: "Priya Singh",
                        balance: 7200,
                        phone: "9876543212"
                    },

                    {
                        id: 4,
                        name: "Rohit Patel",
                        balance: 6100,
                        phone: "9876543213"
                    }

                ]);

            });

    }, []);

    return (

        <div
            className="
            bg-white
            rounded-2xl
            shadow-sm
            p-6
            "
        >

            <div
                className="
                flex
                justify-between
                items-center
                mb-6
                "
            >

                <h2
                    className="
                    text-2xl
                    font-bold
                    "
                >
                    Top Contacts
                </h2>

                <button
                    className="
                    text-blue-600
                    font-semibold
                    hover:underline
                    "
                >
                    View All
                </button>

            </div>

            <div className="space-y-5">

                {

                    contacts.map(contact => (

                        <div
                            key={contact.id}
                            className="
                            flex
                            justify-between
                            items-center
                            hover:bg-gray-50
                            rounded-xl
                            p-3
                            transition
                            "
                        >

                            <div
                                className="
                                flex
                                items-center
                                gap-4
                                "
                            >

                                <div
                                    className="
                                    w-12
                                    h-12
                                    rounded-full
                                    bg-blue-600
                                    text-white
                                    flex
                                    items-center
                                    justify-center
                                    text-lg
                                    font-bold
                                    "
                                >

                                    {contact.name[0]}

                                </div>

                                <div>

                                    <h3
                                        className="
                                        font-semibold
                                        "
                                    >

                                        {contact.name}

                                    </h3>

                                    <p
                                        className="
                                        text-sm
                                        text-slate-500
                                        "
                                    >

                                        {contact.phone}

                                    </p>

                                </div>

                            </div>

                            <div className="text-right">

                                <h3
                                    className="
                                    font-bold
                                    text-green-600
                                    "
                                >

                                    ₹{contact.balance}

                                </h3>

                                <p
                                    className="
                                    text-xs
                                    text-slate-500
                                    "
                                >

                                    Outstanding

                                </p>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default TopContacts;
