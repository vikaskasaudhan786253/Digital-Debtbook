function TransactionHeader({ total, onAdd }) {

    return (

        <div className="bg-white border-b">

            <div className="flex items-center justify-between px-8 py-6">

                <div>

                    <h1 className="text-3xl font-bold text-slate-800">
                        Transactions
                    </h1>

                    <p className="text-slate-500 mt-1">
                        {total} total records
                    </p>

                </div>

                <div className="flex items-center gap-4">

                    <button
                        className="
                        px-5
                        py-3
                        rounded-xl
                        border
                        bg-white
                        hover:bg-slate-50
                        font-medium
                        transition
                        "
                    >
                        ⬇ Export
                    </button>

                    <button

                        onClick={onAdd}

                        className="
                        px-6
                        py-3
                        rounded-xl
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        font-semibold
                        transition
                        "

                    >
                        + Add Transaction
                    </button>

                </div>

            </div>

        </div>

    );

}

export default TransactionHeader;
