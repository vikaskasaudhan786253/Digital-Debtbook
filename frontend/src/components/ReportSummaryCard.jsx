import {
    ArrowUpRight,
    ArrowDownLeft,
    CheckCircle,
    AlertCircle
} from "lucide-react";

function ReportSummaryCard({

    title,

    amount,

    subtitle,

    color

}) {

    const colors = {

        blue: {

            bg: "bg-blue-50",

            text: "text-blue-600",

            Icon: ArrowUpRight

        },

        orange: {

            bg: "bg-orange-50",

            text: "text-orange-500",

            Icon: ArrowDownLeft

        },

        green: {

            bg: "bg-green-50",

            text: "text-green-600",

            Icon: CheckCircle

        },

        red: {

            bg: "bg-red-50",

            text: "text-red-500",

            Icon: AlertCircle

        }

    };

    const style = colors[color];

    const Icon = style.Icon;

    return (

        <div

            className="
            bg-white
            rounded-3xl
            shadow-sm
            border
            p-6
            hover:shadow-lg
            transition
            "

        >

            <div

                className={`
                w-14
                h-14
                rounded-2xl
                ${style.bg}
                flex
                items-center
                justify-center
                `}

            >

                <Icon

                    size={24}

                    className={style.text}

                />

            </div>

            <h3

                className="
                text-slate-500
                mt-5
                "

            >

                {title}

            </h3>

            <h2

                className={`
                text-3xl
                font-bold
                mt-2
                ${style.text}
                `}

            >

                {amount}

            </h2>

            <p

                className="
                text-slate-400
                mt-2
                text-sm
                "

            >

                {subtitle}

            </p>

        </div>

    );

}

export default ReportSummaryCard;
