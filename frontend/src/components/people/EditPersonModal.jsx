import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function EditPersonModal({
    open,
    onClose,
    person,
    fetchPeople,
}) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (person) {
            setName(person.name || "");
            setPhone(person.phone || "");
            setEmail(person.email || "");
        }
    }, [person]);

    if (!open || !person) return null;

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            const response = await fetch(
                `https://digital-debtbook.onrender.com/people/${person.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        name,
                        phone,
                        email,
                    }),
                }
            );

            const data = await response.json();

            if (data.success) {
                alert("Person Updated Successfully");

                fetchPeople();

                onClose();
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Server Error");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

                {/* Header */}
                <div className="mb-6 flex items-center justify-between">

                    <h2 className="text-xl font-bold">
                        Edit Person
                    </h2>

                    <button onClick={onClose}>
                        <X />
                    </button>

                </div>

                {/* Form */}
                <form
                    onSubmit={handleUpdate}
                    className="space-y-4"
                >

                    <div>
                        <label className="mb-2 block font-medium">
                            Name
                        </label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                            className="w-full rounded-lg border p-3"
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Phone
                        </label>

                        <input
                            type="text"
                            value={phone}
                            onChange={(e) =>
                                setPhone(e.target.value)
                            }
                            className="w-full rounded-lg border p-3"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            className="w-full rounded-lg border p-3"
                            required
                        />
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex justify-end gap-3">

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg border px-4 py-2"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
                        >
                            Update
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}
