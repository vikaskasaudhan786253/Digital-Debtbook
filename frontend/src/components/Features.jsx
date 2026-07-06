function Features() {

    return (

        <div className="min-h-screen bg-white">

            <div className="max-w-7xl mx-auto py-24 px-8">

                <h1 className="text-6xl font-bold text-center">
                    Features
                </h1>

                <p className="text-center text-slate-500 mt-4">
                    Everything you need to manage debts.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-20">

                    <div className="border rounded-3xl p-8">
                        <h2 className="text-3xl font-bold">
                            Smart Debt Tracking
                        </h2>

                        <p className="mt-4 text-slate-500">
                            Track all money lent and borrowed.
                        </p>
                    </div>

                    <div className="border rounded-3xl p-8">
                        <h2 className="text-3xl font-bold">
                            People Management
                        </h2>

                        <p className="mt-4 text-slate-500">
                            Organize all contacts in one place.
                        </p>
                    </div>

                    <div className="border rounded-3xl p-8">
                        <h2 className="text-3xl font-bold">
                            Reports & Analytics
                        </h2>

                        <p className="mt-4 text-slate-500">
                            Generate insights instantly.
                        </p>
                    </div>

                </div>

            </div>

        </div>

    );

}

export default Features;
