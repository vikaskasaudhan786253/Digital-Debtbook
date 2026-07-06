import TransactionRow from "./TransactionRow";

export default function TransactionTable({
    transactions,
    onEdit,
    onDelete,
}) {

    return (

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">

            <table className="min-w-full">

                {/* Header */}

                <thead className="bg-slate-50">

                    <tr className="text-left">

                        <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                            Person
                        </th>

                        <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                            Note
                        </th>

                        <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                            Type
                        </th>

                        <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                            Amount
                        </th>

                        <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                            Date
                        </th>

                        <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                            Action
                        </th>

                    </tr>

                </thead>

                {/* Body */}

                <tbody>

                    {transactions.length === 0 ? (

                        <tr>

                            <td
                                colSpan={6}
                                className="py-12 text-center text-slate-500"
                            >
                                No Transactions Found
                            </td>

                        </tr>

                    ) : (

                        transactions.map((transaction) => (

                            <TransactionRow
                                key={transaction.id}
                                transaction={transaction}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />

                        ))

                    )}

                </tbody>

            </table>

        </div>

    );

}
