function TransactionSearch({ value, onChange }) {

    return (

        <div className="px-8 mt-6">

            <div className="relative">

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    w-5
                    h-5
                    text-slate-400
                    "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>

                <input

                    type="text"

                    placeholder="Search transactions..."

                    value={value}

                    onChange={(e) => onChange(e.target.value)}

                    className="
                    w-full
                    bg-white
                    border
                    border-slate-200
                    rounded-2xl
                    py-4
                    pl-14
                    pr-6
                    outline-none
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-100
                    transition
                    "

                />

            </div>

        </div>

    );

}

export default TransactionSearch;
