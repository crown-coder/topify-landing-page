const UseCasesSolutions = () => {
    return (
        <section
            className="py-24 relative overflow-hidden
                 bg-gradient-to-b from-black via-gray-900 to-gray-800
                 bg-blend-overlay"
        >
            <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-7xl mb-10">
                        <span className="font-dancing">Use Cases</span> <br /> & Solutions
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-200">
                        Powering diverse fintech solutions — from consumer wallets to
                        enterprise-grade integrations.
                    </p>
                </div>

                {/* Use Cases Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Multi-Currency Wallets",
                            description:
                                "Let users hold and spend across multiple currencies with frictionless global transactions.",
                            iconBg: "from-sky-500 to-cyan-500",
                            icon: (
                                <svg
                                    className="w-7 h-7 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2m0-8h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            ),
                        },
                        {
                            title: "Virtual & Physical Cards",
                            description:
                                "Issue branded cards for users to spend online or offline, with dynamic spending controls.",
                            iconBg: "from-purple-500 to-fuchsia-500",
                            icon: (
                                <svg
                                    className="w-7 h-7 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2 7h20M2 12h20M2 17h20M5 7v10m14-10v10"
                                    />
                                </svg>
                            ),
                        },
                        {
                            title: "Bill Payments & Airtime",
                            description:
                                "Provide seamless access to airtime, data, and utility bills, tightly integrated into one platform.",
                            iconBg: "from-emerald-500 to-teal-500",
                            icon: (
                                <svg
                                    className="w-7 h-7 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-7.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636"
                                    />
                                </svg>
                            ),
                        },
                        {
                            title: "Merchant Payments",
                            description:
                                "Enable secure merchant payments via QR codes, APIs, or direct card processing.",
                            iconBg: "from-amber-500 to-orange-500",
                            icon: (
                                <svg
                                    className="w-7 h-7 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16 11V7a4 4 0 00-8 0v4M5 11h14l1 10H4l1-10z"
                                    />
                                </svg>
                            ),
                        },
                        {
                            title: "Cross-Border Transfers",
                            description:
                                "Let users send and receive money across borders instantly and securely.",
                            iconBg: "from-teal-500 to-cyan-500",
                            icon: (
                                <svg
                                    className="w-7 h-7 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 19V6m-7 7l7-7 7 7"
                                    />
                                </svg>
                            ),
                        },
                        {
                            title: "Developer APIs",
                            description:
                                "Plug into our APIs for powerful fintech applications and integrations.",
                            iconBg: "from-pink-500 to-rose-500",
                            icon: (
                                <svg
                                    className="w-7 h-7 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                                    />
                                </svg>
                            ),
                        },
                    ].map((useCase, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8
                         hover:shadow-xl hover:-translate-y-2 hover:border-sky-200
                         transition-all duration-300 group"
                        >
                            <div
                                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 
                            bg-[#0A2540] shadow-lg
                            group-hover:ring-4 group-hover:ring-sky-100 transition-all duration-300`}
                            >
                                {useCase.icon}
                            </div>
                            <h3 className="font-semibold text-xl text-[#0A2540] mb-3 group-hover:text-sky-600 transition-colors">
                                {useCase.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                {useCase.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative gradient blurs */}
            {/* <div className="absolute -top-20 -left-24 w-72 h-72 bg-sky-100 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-40"></div> */}
        </section>
    );
};

export default UseCasesSolutions;
