import { useState } from "react";

import {
    IndianRupee,
    Trash2
} from "lucide-react";

function PreferenceCard() {

    const [currency, setCurrency] = useState("INR (₹)");

    return (

        <div
            className="
            bg-white
            rounded-3xl
            border
            shadow-sm
            p-8
            "
        >

            <h2
                className="
                text-2xl
                font-bold
                mb-8
                "
            >
                Account Preferences
            </h2>

            {/* Currency */}

            <div
                className="
                flex
                justify-between
                items-center
                pb-6
                border-b
                "
            >

                <div className="flex gap-4">

                    <div
                        className="
                        w-12
                        h-12
                        rounded-full
                        bg-slate-100
                        flex
                        items-center
                        justify-center
                        "
                    >

                        <IndianRupee
                            size={20}
                            className="text-slate-600"
                        />

                    </div>

                    <div>

                        <h3
                            className="
                            font-semibold
                            "
                        >
                            Default Currency
                        </h3>

                        <p
                            className="
                            text-slate-500
                            text-sm
                            "
                        >
                            Primary currency for transactions
                        </p>

                    </div>

                </div>

                <select

                    value={currency}

                    onChange={(e)=>setCurrency(e.target.value)}

                    className="
                    border
                    rounded-xl
                    px-4
                    py-2
                    outline-none
                    "

                >

                    <option>
                        INR (₹)
                    </option>

                    <option>
                        USD ($)
                    </option>

                    <option>
                        EUR (€)
                    </option>

                    <option>
                        GBP (£)
                    </option>

                </select>

            </div>

            {/* Delete Button */}

            <div className="mt-8">

                <button

                    className="
                    flex
                    items-center
                    gap-2
                    bg-red-500
                    hover:bg-red-600
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    transition
                    "

                >

                    <Trash2 size={18} />

                    Delete Account

                </button>

            </div>

        </div>

    );

}

export default PreferenceCard;
