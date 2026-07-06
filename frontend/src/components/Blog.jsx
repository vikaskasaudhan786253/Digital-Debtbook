function Blog() {

    const posts = [

        {
            title:
                "5 Tips To Manage Personal Debt"
        },

        {
            title:
                "How Small Businesses Track Credit"
        },

        {
            title:
                "Why Digital Debt Tracking Matters"
        }

    ];

    return (

        <div className="min-h-screen bg-slate-50">

            <div className="max-w-6xl mx-auto py-24 px-8">

                <h1 className="text-6xl font-bold text-center">
                    Blog
                </h1>

                <div className="grid md:grid-cols-3 gap-8 mt-20">

                    {
                        posts.map(
                            (post, index) => (

                                <div
                                    key={index}
                                    className="
                                    bg-white
                                    rounded-3xl
                                    p-8
                                    shadow
                                    "
                                >

                                    <h2 className="text-2xl font-bold">
                                        {post.title}
                                    </h2>

                                    <button
                                        className="
                                        mt-6
                                        text-blue-600
                                        "
                                    >
                                        Read More →
                                    </button>

                                </div>

                            )
                        )
                    }

                </div>

            </div>

        </div>

    );

}

export default Blog;
