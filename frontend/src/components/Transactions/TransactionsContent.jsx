import TransactionSummary from "./TransactionSummary";
import TransactionFilters from "./TransactionFilters";
import TransactionTable from "./TransactionTable";
import NewTransactionModal from "./NewTransactionModal";
import {useState,useEffect} from "react";
import EditTransactionModal from "./EditTransactionModal";

export default function TransactionsContent() {


    const [people, setPeople] = useState([]);

    const [transactions, setTransactions] = useState([]);

    const [filter, setFilter] = useState("all");

    const [search, setSearch] = useState("");

    const [view, setView] = useState("table");

    const [open, setOpen] = useState(false);

    const [editOpen, setEditOpen] = useState(false);

const [selectedTransaction, setSelectedTransaction] = useState(null);

        const fetchTransactions = async () => {

    const response = await fetch(
        "https://digital-debtbook.onrender.com/transactions?user_id=1"
    );

    const data = await response.json();

    setTransactions(data);

};

        const filteredTransactions = transactions.filter((transaction) => {

    const matchesSearch =
        transaction.person_name
            .toLowerCase()
            .includes(search.toLowerCase());

    if (!matchesSearch)
        return false;

    if (filter === "all")
        return true;

    return (
        transaction.transaction_type.toLowerCase()
        === filter
    );

});

        useEffect(()=>{
            fetchPeople();
    fetchTransactions();
},[]);

    const handleEdit = (transaction) => {

    setSelectedTransaction(transaction);

    setEditOpen(true);

};


const fetchPeople = async () => {

    const response = await fetch(
        "https://digital-debtbook.onrender.com/people?user_id=1"
    );

    const data = await response.json();

    console.log("People:", data);

    if (Array.isArray(data)) {
        setPeople(data);
    } else {
        setPeople([]);
    }
};




const deleteTransaction = async (id) => {

    if (!window.confirm("Delete this transaction?"))
        return;

    try {

        const response = await fetch(

            `https://digital-debtbook.onrender.com/transactions/${id}`,

            {
                method: "DELETE",
            }

        );

        const data = await response.json();

        if (data.success) {

            alert("Transaction Deleted");

            fetchTransactions();

        } else {

            alert(data.message);

        }

    } catch (err) {

        console.error(err);

    }

};
  return (
    <main className="flex-1 overflow-y-auto p-5 lg:p-6">
      <div className="space-y-5">

        {/* Page Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">

          <div>
            <h3 className="text-xl !text-black font-bold text-slate-900">
              Transactions
            </h3>

            <p className="text-sm text-slate-500">
              10 total records
            </p>
          </div>

          <div className="flex gap-2">

                    <button
                        className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-lg
                        border
                        border-slate-200
                        bg-white
                        px-3
                        py-2
                        text-xs
                        font-medium
                        text-slate-700
                        hover:bg-slate-50
                        transition
                        "
                    >
                        Export
                    </button>

                    <button
                        onClick={() => setOpen(true)}
                        className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-lg
                        bg-blue-600
                        px-3
                        py-2
                        text-xs
                        font-medium
                        text-white
                        hover:bg-blue-700
                        transition
                        "
                    >
                        Add Transaction
                    </button>

            </div>

        </div>

   <NewTransactionModal
    open={open}
    onClose={() => setOpen(false)}
    people={people}
    fetchTransactions={fetchTransactions}
/>

    <TransactionSummary
    transactions={transactions}
/>

<TransactionFilters
    filter={filter}
    setFilter={setFilter}
    search={search}
    setSearch={setSearch}
/>

<TransactionTable
    transactions={filteredTransactions}
    onEdit={handleEdit}
    onDelete={deleteTransaction}
/>

<EditTransactionModal

    open={editOpen}

    onClose={() => setEditOpen(false)}

    transaction={selectedTransaction}

    people={people}

    fetchTransactions={fetchTransactions}

/>

      </div>


    </main>
  );
}
