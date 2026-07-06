import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function exportPersonPDF(
    person,
    transactions
) {

    const doc = new jsPDF();

    // Title
    doc.setFontSize(22);
    doc.text("DebtBook", 14, 18);

    doc.setFontSize(18);
    doc.text("Person Ledger", 14, 30);

    // Person Information
    doc.setFontSize(12);

    doc.text(`Name : ${person.name}`, 14, 45);
    doc.text(`Phone : ${person.phone}`, 14, 53);
    doc.text(`Email : ${person.email}`, 14, 61);

    doc.text(
        `Current Balance : ₹${Number(person.balance).toLocaleString()}`,
        14,
        69
    );

    autoTable(doc, {

        startY: 80,

        head: [[
            "Date",
            "Type",
            "Amount",
            "Note"
        ]],

        body: transactions.map((transaction) => [

            new Date(
                transaction.transaction_date
            ).toLocaleDateString(),

            transaction.transaction_type,

            `₹${transaction.amount}`,

            transaction.note || "-"

        ])

    });

    doc.save(
        `${person.name}_Ledger.pdf`
    );

}
