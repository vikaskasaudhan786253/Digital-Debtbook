function TransactionStats() {

    return (

        <div className="px-8 mt-6">

            <div className="flex flex-wrap gap-4">

                <div
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-blue-50
                    text-blue-600
                    font-medium
                    border
                    border-blue-200
                    text-sm
                    "
                >
                    Total Given: ₹42.0K
                </div>

                <div
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-orange-50
                    text-orange-600
                    font-medium
                    border
                    border-orange-200
                    text-sm
                    "
                >
                    Total Borrowed: ₹33.3K
                </div>

                <div
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-green-50
                    text-green-600
                    font-medium
                    border
                    border-green-200
                    text-sm
                    "
                >
                    Received Back: ₹19.5K
                </div>

                <div
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-gray-100
                    text-gray-700
                    font-medium
                    border
                    text-sm
                    "
                >
                    Paid Back: ₹3.2K
                </div>

            </div>

        </div>

    );

}

export default TransactionStats;
