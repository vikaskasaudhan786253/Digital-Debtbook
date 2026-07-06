export default function exportPersonCSV(
    person,
    transactions
) {

    const rows = [];

    // Person Information
    rows.push(["DebtBook - Person Ledger"]);
    rows.push([]);

    rows.push(["Name", person.name]);
    rows.push(["Phone", person.phone]);
    rows.push(["Email", person.email]);
    rows.push(["Current Balance", person.balance]);

    rows.push([]);

    // Table Header
    rows.push([
        "Date",
        "Transaction Type",
        "Amount",
        "Note"
    ]);

    // Transactions
    transactions.forEach((transaction) => {

        rows.push([

            new Date(
                transaction.transaction_date
            ).toLocaleDateString(),

            transaction.transaction_type,

            transaction.amount,

            transaction.note || ""

        ]);

    });

    // Convert to CSV
    const csv = rows
        .map(row =>
            row
                .map(value => `"${value}"`)
                .join(",")
        )
        .join("\n");

    // Download
    const blob = new Blob(
        [csv],
        {
            type: "text/csv;charset=utf-8;"
        }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = `${person.name}_Ledger.csv`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

}
