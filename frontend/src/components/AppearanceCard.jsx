import { useState } from "react";

import {

    Moon,

    Sun

} from "lucide-react";

function AppearanceCard() {

    const [darkMode, setDarkMode] = useState(false);

    const [accent, setAccent] = useState("blue");

    const colors = [

        {
            name: "blue",
            class: "bg-blue-600"
        },

        {
            name: "purple",
            class: "bg-purple-500"
        },

        {
            name: "green",
            class: "bg-green-500"
        },

        {
            name: "yellow",
            class: "bg-yellow-500"
        },

        {
            name: "red",
            class: "bg-red-500"
        },

        {
            name: "cyan",
            class: "bg-cyan-500"
        }

    ];

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
                Appearance
            </h2>

            {/* Dark Mode */}

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

                        {

                            darkMode

                                ?

                                <Moon
                                    size={20}
                                    className="text-slate-600"
                                />

                                :

                                <Sun
                                    size={20}
                                    className="text-yellow-500"
                                />

                        }

                    </div>

                    <div>

                        <h3
                            className="
                            font-semibold
                            "
                        >
                            Dark Mode
                        </h3>

                        <p
                            className="
                            text-slate-500
                            text-sm
                            "
                        >
                            Switch to dark interface
                        </p>

                    </div>

                </div>

                {/* Toggle */}

                <button

                    onClick={() =>
                        setDarkMode(!darkMode)
                    }

                    className={`
                    w-14
                    h-8
                    rounded-full
                    transition
                    ${
                        darkMode
                            ? "bg-blue-600"
                            : "bg-slate-300"
                    }
                    relative
                    `}

                >

                    <div

                        className={`
                        w-6
                        h-6
                        rounded-full
                        bg-white
                        absolute
                        top-1
                        transition
                        ${
                            darkMode
                                ? "left-7"
                                : "left-1"
                        }
                        `}

                    />

                </button>

            </div>

            {/* Accent Colors */}

            <div className="mt-8">

                <h3
                    className="
                    font-semibold
                    mb-5
                    "
                >
                    Accent Color
                </h3>

                <div className="flex gap-4">

                    {

                        colors.map((color) => (

                            <button

                                key={color.name}

                                onClick={() =>
                                    setAccent(color.name)
                                }

                                className={`
                                w-10
                                h-10
                                rounded-full
                                ${color.class}
                                border-4
                                ${
                                    accent === color.name
                                        ? "border-black"
                                        : "border-transparent"
                                }
                                transition
                                `}

                            />

                        ))

                    }

                </div>

            </div>

        </div>

    );

}

export default AppearanceCard;
