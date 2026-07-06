import { useState } from "react";

import {
    Lock,
    Eye,
    EyeOff
} from "lucide-react";

function ChangePasswordCard() {

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleUpdatePassword = () => {

        if (newPassword !== confirmPassword) {

            alert("Passwords do not match");

            return;

        }

        alert("Password Updated Successfully");

    };

    return (

        <div
            className="
            bg-white
            rounded-3xl
            shadow-sm
            border
            p-8
            "
        >

            <h2
                className="
                text-2xl
                font-bold
                mb-8
                "
            >
                Change Password
            </h2>

            {/* Current Password */}

            <div className="mb-6">

                <label className="block mb-2 font-medium">
                    Current Password
                </label>

                <div
                    className="
                    flex
                    items-center
                    border
                    rounded-2xl
                    px-4
                    h-14
                    "
                >

                    <Lock
                        size={18}
                        className="text-slate-400"
                    />

                    <input

                        type={
                            showCurrent
                                ? "text"
                                : "password"
                        }

                        value={currentPassword}

                        onChange={(e) =>
                            setCurrentPassword(e.target.value)
                        }

                        className="
                        flex-1
                        ml-3
                        outline-none
                        "

                        placeholder="••••••••"

                    />

                    <button
                        onClick={() =>
                            setShowCurrent(!showCurrent)
                        }
                    >

                        {

                            showCurrent

                                ?

                                <EyeOff
                                    size={18}
                                    className="text-slate-400"
                                />

                                :

                                <Eye
                                    size={18}
                                    className="text-slate-400"
                                />

                        }

                    </button>

                </div>

            </div>

            {/* New Password */}

            <div className="mb-6">

                <label className="block mb-2 font-medium">
                    New Password
                </label>

                <div
                    className="
                    flex
                    items-center
                    border
                    rounded-2xl
                    px-4
                    h-14
                    "
                >

                    <Lock
                        size={18}
                        className="text-slate-400"
                    />

                    <input

                        type={
                            showNew
                                ? "text"
                                : "password"
                        }

                        value={newPassword}

                        onChange={(e) =>
                            setNewPassword(e.target.value)
                        }

                        className="
                        flex-1
                        ml-3
                        outline-none
                        "

                        placeholder="••••••••"

                    />

                    <button
                        onClick={() =>
                            setShowNew(!showNew)
                        }
                    >

                        {

                            showNew

                                ?

                                <EyeOff
                                    size={18}
                                    className="text-slate-400"
                                />

                                :

                                <Eye
                                    size={18}
                                    className="text-slate-400"
                                />

                        }

                    </button>

                </div>

            </div>

            {/* Confirm Password */}

            <div>

                <label className="block mb-2 font-medium">
                    Confirm Password
                </label>

                <div
                    className="
                    flex
                    items-center
                    border
                    rounded-2xl
                    px-4
                    h-14
                    "
                >

                    <Lock
                        size={18}
                        className="text-slate-400"
                    />

                    <input

                        type={
                            showConfirm
                                ? "text"
                                : "password"
                        }

                        value={confirmPassword}

                        onChange={(e) =>
                            setConfirmPassword(e.target.value)
                        }

                        className="
                        flex-1
                        ml-3
                        outline-none
                        "

                        placeholder="••••••••"

                    />

                    <button
                        onClick={() =>
                            setShowConfirm(!showConfirm)
                        }
                    >

                        {

                            showConfirm

                                ?

                                <EyeOff
                                    size={18}
                                    className="text-slate-400"
                                />

                                :

                                <Eye
                                    size={18}
                                    className="text-slate-400"
                                />

                        }

                    </button>

                </div>

            </div>

            {/* Button */}

            <div className="mt-8">

                <button

                    onClick={handleUpdatePassword}

                    className="
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-8
                    py-3
                    rounded-xl
                    font-semibold
                    transition
                    "

                >

                    Update Password

                </button>

            </div>

        </div>

    );

}

export default ChangePasswordCard;
