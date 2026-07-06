import * as XLSX from "xlsx";

export default function exportPersonExcel(
    person,
    transactions
) {

    const rows = [];

    // Header
    rows.push(["DebtBook - Person Ledger"]);
    rows.push([]);

    // Person Information
    rows.push(["Name", person.name]);
    rows.push(["Phone", person.phone]);
    rows.push(["Email", person.email]);
    rows.push(["Current Balance", person.balance]);

    rows.push([]);

    // Table Heading
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

    const worksheet = XLSX.utils.aoa_to_sheet(rows);

    worksheet["!cols"] = [

        { wch: 18 },

        { wch: 20 },

        { wch: 15 },

        { wch: 40 }

    ];

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(

        workbook,

        worksheet,

        "Ledger"

    );

    XLSX.writeFile(

        workbook,

        `${person.name}_Ledger.xlsx`

    );

}
