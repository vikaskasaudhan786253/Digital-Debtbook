function DebtorCard({ name, amount }) {
    return (
        <div>
            <h4>{name}</h4>
            <p>₹{amount}</p>
        </div>
    );
}

export default DebtorCard;
