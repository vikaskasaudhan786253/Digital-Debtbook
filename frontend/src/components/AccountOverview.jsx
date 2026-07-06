import {
    Users,
    ArrowLeftRight,
    Clock
} from "lucide-react";

function AccountOverview() {

    const stats = [

        {

            title: "People",

            value: "8",

            subtitle: "Contacts",

            icon: Users,

            bg: "bg-blue-100",

            color: "text-blue-600"

        },

        {

            title: "Transactions",

            value: "10",

            subtitle: "Completed",

            icon: ArrowLeftRight,

            bg: "bg-green-100",

            color: "text-green-600"

        },

        {

            title: "Pending",

            value: "7",

            subtitle: "Awaiting",

            icon: Clock,

            bg: "bg-orange-100",

            color: "text-orange-500"

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
                Account Overview
            </h2>

            <div
                className="
                grid
                grid-cols-1
                md:grid-cols-3
                gap-6
                "
            >

                {

                    stats.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div

                                key={index}

                                className="
                                bg-slate-50
                                rounded-2xl
                                p-6
                                text-center
                                hover:shadow-md
                                transition
                                "

                            >

                                <div
                                    className={`
                                    w-16
                                    h-16
                                    mx-auto
                                    rounded-2xl
                                    ${item.bg}
                                    flex
                                    items-center
                                    justify-center
                                    `}
                                >

                                    <Icon

                                        size={30}

                                        className={item.color}

                                    />

                                </div>

                                <h2
                                    className={`
                                    text-3xl
                                    font-bold
                                    mt-5
                                    ${item.color}
                                    `}
                                >

                                    {item.value}

                                </h2>

                                <h3
                                    className="
                                    text-lg
                                    font-semibold
                                    mt-2
                                    "
                                >

                                    {item.title}

                                </h3>

                                <p
                                    className="
                                    text-slate-500
                                    mt-1
                                    "
                                >

                                    {item.subtitle}

                                </p>

                            </div>

                        );

                    })

                }

            </div>

        </div>

    );

}

export default AccountOverview;
