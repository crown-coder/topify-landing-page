const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Sign Up",
            desc: "Create your free account in minutes and access our platform instantly.",
            color: "from-blue-500 to-indigo-500",
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7m0-7a7 7 0 110-14 7 7 0 010 14z" />
                </svg>
            ),
        },
        {
            number: "02",
            title: "Integrate",
            desc: "Easily connect with our APIs or use our dashboard to start transacting.",
            color: "from-purple-500 to-pink-500",
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
            ),
        },
        {
            number: "03",
            title: "Go Live",
            desc: "Launch your service, process payments, and scale with confidence.",
            color: "from-green-500 to-emerald-500",
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            ),
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl text-[#0A2540] mb-6">
                    How It Works
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16 leading-relaxed">
                    Get started in just three simple steps. We’ve made onboarding and integration as smooth as possible.
                </p>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 max-lg:flex"
                        >
                            {/* Gradient Icon Circle */}
                            <div
                                className={`w-16 h-16 max-lg:w-[100px] mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700  text-white shadow-lg mb-6`}
                            >
                                {step.icon}
                            </div>

                            <div>
                                <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full mb-4">
                                    Step {step.number}
                                </span>

                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Step number */}

                        </div>
                    ))}
                </div>

                {/* Decorative line for flow (only visible on desktop) */}
                <div className="hidden md:block absolute top-[55%] left-1/2 -translate-x-1/2 w-[70%] h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 z-0"></div>
            </div>
        </section>
    );
};

export default HowItWorks;
