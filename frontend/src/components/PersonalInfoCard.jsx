import { User, Mail, Phone } from "lucide-react";
import { useState } from "react";

function PersonalInfoCard() {

    const [name, setName] = useState("Arjun Mehta");
    const [email, setEmail] = useState("arjun.mehta@gmail.com");
    const [phone, setPhone] = useState("+91 98765 12345");

    return (

        <div
            className="
            bg-white
            rounded-3xl
            shadow-sm
            border
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
                Personal Information
            </h2>

            {/* Full Name */}

            <div className="mb-6">

                <label
                    className="
                    block
                    mb-2
                    font-medium
                    "
                >
                    Full Name
                </label>

                <div
                    className="
                    flex
                    items-center
                    border
                    rounded-2xl
                    px-4
                    h-14
                    "
                >

                    <User
                        size={18}
                        className="text-slate-400"
                    />

                    <input

                        type="text"

                        value={name}

                        onChange={(e)=>setName(e.target.value)}

                        className="
                        flex-1
                        ml-3
                        outline-none
                        "

                    />

                </div>

            </div>

            {/* Email */}

            <div className="mb-6">

                <label
                    className="
                    block
                    mb-2
                    font-medium
                    "
                >
                    Email Address
                </label>

                <div
                    className="
                    flex
                    items-center
                    border
                    rounded-2xl
                    px-4
                    h-14
                    "
                >

                    <Mail
                        size={18}
                        className="text-slate-400"
                    />

                    <input

                        type="email"

                        value={email}

                        onChange={(e)=>setEmail(e.target.value)}

                        className="
                        flex-1
                        ml-3
                        outline-none
                        "

                    />

                </div>

            </div>

            {/* Phone */}

            <div>

                <label
                    className="
                    block
                    mb-2
                    font-medium
                    "
                >
                    Phone Number
                </label>

                <div
                    className="
                    flex
                    items-center
                    border
                    rounded-2xl
                    px-4
                    h-14
                    "
                >

                    <Phone
                        size={18}
                        className="text-slate-400"
                    />

                    <input

                        type="text"

                        value={phone}

                        onChange={(e)=>setPhone(e.target.value)}

                        className="
                        flex-1
                        ml-3
                        outline-none
                        "

                    />

                </div>

            </div>

            {/* Save Button */}

            <div className="mt-8">

                <button
                    className="
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-8
                    py-3
                    rounded-xl
                    font-semibold
                    transition
                    "
                >
                    Save Changes
                </button>

            </div>

        </div>

    );

}

export default PersonalInfoCard;
