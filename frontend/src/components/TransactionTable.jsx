import TransactionRow from "./TransactionRow";

function TransactionTable({

    transactions

}) {

    return (

        <div className="px-8 mt-8 mb-8">

            <div
                className="
                bg-white
                rounded-3xl
                shadow-sm
                overflow-hidden
                "
            >

                {/* Table Header */}

                <div
                    className="
                    grid
                    grid-cols-7
                    gap-4
                    px-8
                    py-5
                    bg-slate-50
                    border-b
                    text-sm
                    font-semibold
                    text-slate-500
                    "
                >

                    <div>Person</div>

                    <div>Note</div>

                    <div>Type</div>

                    <div>Amount</div>

                    <div>Status</div>

                    <div>Date</div>

                    <div className="text-center">
                        Action
                    </div>

                </div>

                {/* Rows */}

                {

                    transactions.length === 0

                    ?

                    <div
                        className="
                        py-24
                        text-center
                        text-slate-500
                        "
                    >

                        No Transactions Found

                    </div>

                    :

                    transactions.map(transaction => (

                        <TransactionRow

                            key={transaction.id}

                            transaction={transaction}

                        />

                    ))

                }

            </div>

        </div>

    );

}

export default TransactionTable;
