import { useState } from "react";

import {
    Mail,
    Bell,
    Clock,
    FileText
} from "lucide-react";

function NotificationCard() {

    const [email, setEmail] = useState(true);
    const [push, setPush] = useState(false);
    const [reminders, setReminders] = useState(true);
    const [summary, setSummary] = useState(true);

    const notifications = [

        {
            title: "Email Notifications",
            subtitle: "Receive updates via email",
            icon: Mail,
            enabled: email,
            setEnabled: setEmail
        },

        {
            title: "Push Notifications",
            subtitle: "Browser push notifications",
            icon: Bell,
            enabled: push,
            setEnabled: setPush
        },

        {
            title: "Payment Reminders",
            subtitle: "Reminders for due payments",
            icon: Clock,
            enabled: reminders,
            setEnabled: setReminders
        },

        {
            title: "Weekly Summary",
            subtitle: "Receive weekly digest",
            icon: FileText,
            enabled: summary,
            setEnabled: setSummary
        }

    ];

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
                Notifications
            </h2>

            <div className="space-y-6">

                {

                    notifications.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div

                                key={index}

                                className="
                                flex
                                justify-between
                                items-center
                                pb-5
                                border-b
                                last:border-none
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

                                        <Icon
                                            size={20}
                                            className="text-slate-600"
                                        />

                                    </div>

                                    <div>

                                        <h3 className="font-semibold">

                                            {item.title}

                                        </h3>

                                        <p
                                            className="
                                            text-slate-500
                                            text-sm
                                            "
                                        >

                                            {item.subtitle}

                                        </p>

                                    </div>

                                </div>

                                {/* Toggle */}

                                <button

                                    onClick={() =>
                                        item.setEnabled(!item.enabled)
                                    }

                                    className={`
                                    w-14
                                    h-8
                                    rounded-full
                                    transition
                                    relative
                                    ${
                                        item.enabled
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
                                            item.enabled
                                                ? "left-7"
                                                : "left-1"
                                        }
                                        `}

                                    />

                                </button>

                            </div>

                        );

                    })

                }

            </div>

        </div>

    );

}

export default NotificationCard;
