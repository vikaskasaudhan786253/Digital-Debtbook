function Pricing() {

    return (

        <div className="min-h-screen bg-slate-50">

            <div className="max-w-7xl mx-auto py-24 px-8">

                <h1 className="text-6xl font-bold text-center">
                    Pricing
                </h1>

                <p className="text-center text-slate-500 mt-4">
                    Simple pricing for everyone.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-20">

                    <div className="bg-white p-10 rounded-3xl shadow">

                        <h2 className="text-3xl font-bold">
                            Free
                        </h2>

                        <h1 className="text-5xl font-bold mt-6">
                            ₹0
                        </h1>

                        <ul className="mt-8 space-y-4">
                            <li>✓ 10 Contacts</li>
                            <li>✓ 50 Transactions</li>
                            <li>✓ Dashboard</li>
                        </ul>

                    </div>

                    <div className="bg-blue-600 text-white p-10 rounded-3xl shadow">

                        <h2 className="text-3xl font-bold">
                            Pro
                        </h2>

                        <h1 className="text-5xl font-bold mt-6">
                            ₹99/mo
                        </h1>

                        <ul className="mt-8 space-y-4">
                            <li>✓ Unlimited Contacts</li>
                            <li>✓ Unlimited Transactions</li>
                            <li>✓ Analytics</li>
                        </ul>

                    </div>

                    <div className="bg-white p-10 rounded-3xl shadow">

                        <h2 className="text-3xl font-bold">
                            Business
                        </h2>

                        <h1 className="text-5xl font-bold mt-6">
                            ₹299/mo
                        </h1>

                        <ul className="mt-8 space-y-4">
                            <li>✓ Team Access</li>
                            <li>✓ Advanced Reports</li>
                            <li>✓ Priority Support</li>
                        </ul>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Pricing;
