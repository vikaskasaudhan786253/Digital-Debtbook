import { MapPin, Calendar, Pencil } from "lucide-react";

function ProfileHeader() {

    return (

        <div
            className="
            bg-white
            rounded-3xl
            shadow-sm
            border
            p-6
            flex
            justify-between
            items-start
            "
        >

            {/* Left */}

            <div className="flex items-center gap-5">

                <div className="relative">

                    <div
                        className="
                        w-20
                        h-20
                        rounded-full
                        bg-blue-600
                        text-white
                        text-3xl
                        font-bold
                        flex
                        items-center
                        justify-center
                        "
                    >
                        AM
                    </div>

                    <button
                        className="
                        absolute
                        -bottom-1
                        -right-1
                        w-8
                        h-8
                        rounded-full
                        bg-blue-600
                        text-white
                        flex
                        items-center
                        justify-center
                        shadow
                        "
                    >
                        <Pencil size={14} />
                    </button>

                </div>

                <div>

                    <h2
                        className="
                        text-2xl
                        font-bold
                        "
                    >
                        Arjun Mehta
                    </h2>

                    <p
                        className="
                        text-slate-500
                        mt-1
                        "
                    >
                        arjun.mehta@gmail.com
                    </p>

                    <div
                        className="
                        flex
                        gap-3
                        mt-4
                        "
                    >

                        <div
                            className="
                            flex
                            items-center
                            gap-2
                            bg-slate-100
                            px-3
                            py-1
                            rounded-full
                            text-sm
                            text-slate-600
                            "
                        >

                            <MapPin size={14} />

                            Mumbai, India

                        </div>

                        <div
                            className="
                            flex
                            items-center
                            gap-2
                            bg-slate-100
                            px-3
                            py-1
                            rounded-full
                            text-sm
                            text-slate-600
                            "
                        >

                            <Calendar size={14} />

                            Joined January 2024

                        </div>

                    </div>

                </div>

            </div>

            {/* Right */}

            <button
                className="
                flex
                items-center
                gap-2
                border
                rounded-full
                px-5
                py-2
                hover:bg-slate-100
                "
            >

                <Pencil size={16} />

                Edit

            </button>

        </div>

    );

}

export default ProfileHeader;
