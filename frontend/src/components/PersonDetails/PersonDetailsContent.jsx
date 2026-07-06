import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PersonHeader from "./PersonHeader";
import PersonSummary from "./PersonSummary";
import PersonToolbar from "./PersonToolbar";
import PersonTransactionTable from "./PersonTransactionTable";
import exportPersonPDF from "../../utils/exportPDF";
import exportPersonExcel from "../../utils/exportExcel";
import exportPersonCSV from "../../utils/exportCSV";
import printLedger from "../../utils/printLedger";



export default function PersonDetailsContent() {

    const { id } = useParams();

    const [person, setPerson] = useState(null);

    const [transactions, setTransactions] = useState([]);

    const [search, setSearch] = useState("");

    const [filter, setFilter] = useState("all");

    const [view, setView] = useState("table");

    // --------------------------
    // Fetch Person
    // --------------------------

    const fetchPerson = async () => {

       const response = await fetch(
    `https://digital-debtbook.onrender.com/people/${id}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch person");
        }

        const data = await response.json();
        console.log("person data = ",data);
        setPerson(data.person);

    };

    // --------------------------
    // Fetch Transactions
    // --------------------------

    const fetchTransactions = async () => {

        const response = await fetch(
            `https://digital-debtbook.onrender.com/people/${id}/transactions`
        );

       const data = await response.json();

        console.log("Transactions:", data);

        if (data.success) {
            setTransactions(data.transactions || []);
        } else {
            setTransactions([]);
        }

    };

    useEffect(() => {

        fetchPerson();

        fetchTransactions();

    }, [id]);

    // --------------------------
    // Search + Filter
    // --------------------------

    const filteredTransactions = transactions.filter((transaction) => {

        const note = transaction.note || "";

        const matchesSearch =
            note.toLowerCase().includes(search.toLowerCase());

        if (!matchesSearch) return false;

        if (filter === "all") return true;

        return (
            transaction.transaction_type.toLowerCase()
            === filter
        );

    });

    if (!person) {

        return (

            <main className="flex-1 p-6">

                Loading...

            </main>

        );

    }

    return (

        <main className="flex-1 overflow-auto bg-slate-50 p-6">

            <div className="space-y-6">

                <PersonHeader

                    person={person}

                    onEdit={() => console.log("Edit Person")}

                    onDelete={() => console.log("Delete Person")}

                    onAddTransaction={() => console.log("Add Transaction")}

                />

                <PersonSummary
                    transactions={transactions}
                />

                <PersonToolbar
                    search={search}
                    setSearch={setSearch}
                    filter={filter}
                    setFilter={setFilter}
                    view={view}
                    setView={setView}

                    onExportPDF={() =>
                        exportPersonPDF(
                            person,
                            filteredTransactions
                        )
                    }
                    onExportExcel={() =>
                        exportPersonExcel(
                            person,
                            filteredTransactions
                        )
                    }
                    onExportCSV={() =>
                        exportPersonCSV(
                            person,
                            filteredTransactions
                        )
                    }
                    onPrint={() =>
                        printLedger(
                            person,
                            filteredTransactions
                        )
                    }
                />

                <PersonTransactionTable
                    transactions={filteredTransactions}
                    onEdit={(transaction)=>{
                        console.log(transaction);
                    }}
                    onDelete={(id)=>{
                        console.log(id);
                    }}
                />
            </div>
        </main>
    );
}
