function AlertCard({ title, children }) {
    return (
        <div
            style={{
                background: "#fff3cd",
                padding: "15px",
                margin: "10px",
                borderRadius: "10px",
            }}
        >
            <h3>{title}</h3>
            {children}
        </div>
    );
}

export default AlertCard;
