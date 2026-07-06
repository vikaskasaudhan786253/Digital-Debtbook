import { useState } from "react";

import {
    Shield,
    Lock,
    Activity
} from "lucide-react";

function SecurityCard() {

    const [twoFactor, setTwoFactor] = useState(false);

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
                Security
            </h2>

            {/* Two Factor Authentication */}

            <div
                className="
                flex
                justify-between
                items-center
                pb-5
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

                        <Shield
                            size={20}
                            className="text-slate-600"
                        />

                    </div>

                    <div>

                        <h3 className="font-semibold">

                            Two-Factor Authentication

                        </h3>

                        <p
                            className="
                            text-slate-500
                            text-sm
                            "
                        >

                            Add an extra security layer

                        </p>

                    </div>

                </div>

                <button

                    onClick={() =>
                        setTwoFactor(!twoFactor)
                    }

                    className={`
                    w-14
                    h-8
                    rounded-full
                    relative
                    transition
                    ${
                        twoFactor
                            ? "bg-blue-600"
                            : "bg-slate-300"
                    }
                    `}

                >

                    <div

                        className={`
                        absolute
                        top-1
                        w-6
                        h-6
                        rounded-full
                        bg-white
                        transition
                        ${
                            twoFactor
                                ? "left-7"
                                : "left-1"
                        }
                        `}

                    />

                </button>

            </div>

            {/* Session Management */}

            <div
                className="
                flex
                justify-between
                items-center
                py-5
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

                        <Lock
                            size={20}
                            className="text-slate-600"
                        />

                    </div>

                    <div>

                        <h3 className="font-semibold">

                            Session Management

                        </h3>

                        <p
                            className="
                            text-slate-500
                            text-sm
                            "
                        >

                            View and manage active sessions

                        </p>

                    </div>

                </div>

                <button
                    className="
                    border
                    px-5
                    py-2
                    rounded-full
                    hover:bg-slate-100
                    transition
                    "
                >

                    Manage

                </button>

            </div>

            {/* Login Activity */}

            <div
                className="
                flex
                justify-between
                items-center
                pt-5
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

                        <Activity
                            size={20}
                            className="text-slate-600"
                        />

                    </div>

                    <div>

                        <h3 className="font-semibold">

                            Login Activity

                        </h3>

                        <p
                            className="
                            text-slate-500
                            text-sm
                            "
                        >

                            View recent login history

                        </p>

                    </div>

                </div>

                <button
                    className="
                    border
                    px-5
                    py-2
                    rounded-full
                    hover:bg-slate-100
                    transition
                    "
                >

                    View

                </button>

            </div>

        </div>

    );

}

export default SecurityCard;
