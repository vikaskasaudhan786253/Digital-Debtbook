import { useEffect, useState } from "react";
import TransactionCard from "../components/TransactionCard";

function TransactionList({ personId }) {
    const [transactions, setTransactions] = useState([]);
    const [filter, setFilter] = useState("ALL");
    const [date, setDate] = useState("");

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    useEffect(() => {
        fetch(
            "http://127.0.0.1:5000/transactions/${personId}"
        )
            .then((response) => response.json())
            .then((data) => setTransactions(data))
            .catch((error) => console.error(error));
    }, [personId]);

    if (transactions.length === 0) {
        return <p>No transactions found.</p>;
    }

    const filteredTransactions = transactions
        .filter((transaction) => {
            if (!date) return true;
            return transaction.created_at.startsWith(date);
        })
        .filter((transaction) => {
            if (filter === "ALL") return true;
            return transaction.type === filter;
        });

    return (
        <div>
            <h2>Transactions</h2>

            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            >
                <option value="ALL">All</option>
                <option value="BORROW">Borrow</option>
                <option value="PAID">Paid</option>
            </select>

            <br />
            <br />

            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />

            <br />
            <br />

            {filteredTransactions.map((transaction) => (
                <div key={transaction.id}>
                    <TransactionCard transaction={transaction} />
                    <small>
                        {formatDate(transaction.created_at)}
                    </small>
                </div>
            ))}
        </div>
    );
}

export default TransactionList;
