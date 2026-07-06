import { useState } from "react";

function ReportsTabs() {

    const [activeTab, setActiveTab] = useState("Overview");

    const tabs = [

        "Overview",

        "Debt Report",

        "Credit Report"

    ];

    return (

        <div className="px-8 mt-6">

            <div className="inline-flex bg-slate-100 rounded-2xl p-1 shadow-sm">

                {

                    tabs.map((tab) => (

                        <button

                            key={tab}

                            onClick={() => setActiveTab(tab)}

                            className={`
                                px-6
                                py-3
                                rounded-xl
                                text-sm
                                font-medium
                                transition-all
                                duration-300
                                ${
                                    activeTab === tab
                                        ? "bg-white text-slate-900 shadow-md"
                                        : "text-slate-500 hover:text-slate-800"
                                }
                            `}

                        >

                            {tab}

                        </button>

                    ))

                }

            </div>

        </div>

    );

}

export default ReportsTabs;
