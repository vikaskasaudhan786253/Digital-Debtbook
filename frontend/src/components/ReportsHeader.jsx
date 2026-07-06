import { FileDown, FileText } from "lucide-react";

function ReportsHeader() {

    return (

        <div className="bg-white border-b">

            <div className="flex items-center justify-between px-8 py-6">

                {/* Left */}

                <div>

                    <h1 className="text-3xl font-bold text-slate-800">

                        Reports & Analytics

                    </h1>

                    <p className="text-slate-500 mt-1">

                        Financial insights and trends

                    </p>

                </div>

                {/* Right */}

                <div className="flex gap-4">

                    <button

                        className="
                        flex
                        items-center
                        gap-2
                        px-5
                        py-3
                        rounded-xl
                        border
                        bg-white
                        hover:bg-slate-50
                        transition
                        "

                    >

                        <FileDown size={18} />

                        Export PDF

                    </button>

                    <button

                        className="
                        flex
                        items-center
                        gap-2
                        px-5
                        py-3
                        rounded-xl
                        border
                        bg-white
                        hover:bg-slate-50
                        transition
                        "

                    >

                        <FileText size={18} />

                        Export CSV

                    </button>

                </div>

            </div>

        </div>

    );

}

export default ReportsHeader;
