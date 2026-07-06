function TransactionCard({ transaction }) {
    const isBorrow = transaction.type === "BORROW";

    return (
        <div
            className={
                isBorrow
                    ? "borrow-card"
                    : "paid-card"
            }
        >
            <h3>{transaction.type}</h3>

            <h2>₹{transaction.amount}</h2>

            <p>{transaction.note}</p>

            <small>
                {transaction.created_at}
            </small>
        </div>
    );
}

export default TransactionCard;
