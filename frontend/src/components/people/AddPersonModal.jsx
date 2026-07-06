import { useState } from "react";
import { X } from "lucide-react";

export default function AddPersonModal({ open,
    onClose,
    onPersonAdded }) {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    if (!open) return null;

    const handleSave = async () => {

    try {
        const token = localStorage.getItem("token");

        const API_URL = import.meta.env.VITE_API_URL;

        const response = await fetch(`${API_URL}/people`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                user_id: 1,
                name,
                phone,
                email
            }),
        });

        const text = await response.text();

        console.log("Status:", response.status);
        console.log("Response:", text);

        if (!response.ok) {
            alert(text);
            return;
        }

const data = JSON.parse(text);

        if (data.success) {
            alert("Person Added Successfully");

            setName("");
            setPhone("");
            setEmail("");

            onClose();

            if (onPersonAdded) {
                onPersonAdded();
            }
        } else {
            alert(data.message);
        }

    } catch (error) {
    console.error("Error:", error);
    console.error("Message:", error.message);
    console.error("Stack:", error.stack);

    alert("Server Error");
}
};

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

                <div className="mb-6 flex items-center justify-between">

                    <h2 className="text-xl font-bold">
                        Add Person
                    </h2>

                    <button onClick={onClose}>
                        <X />
                    </button>

                </div>

                <div className="space-y-4">

                    <div>
                        <label htmlFor="name" className="mb-2 block font-medium">
                            Name
                        </label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={name}
                            placeholder="Enter Name"
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-lg border p-3"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="mb-2 block font-medium">
                            Phone
                        </label>

                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            value={phone}
                            placeholder="Enter mobile number"
                            onChange={(e)=>setPhone(e.target.value)}
                            className="w-full rounded-lg border p-3"
                        />
                    </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">

                    <button
                        onClick={onClose}
                        className="rounded-lg border px-4 py-2"
                    >
                        Cancel
                    </button>

                    <button
    onClick={handleSave}
    className="rounded-lg bg-blue-600 px-5 py-2 text-white"
>
    Save
</button>

                </div>

            </div>

        </div>
    );
}
