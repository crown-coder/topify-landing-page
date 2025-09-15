const AnalyticsStatsSection = () => {
    const stats = [
        { value: "100K+", label: "Active Users" },
        { value: "50M+", label: "Transactions Processed" },
        { value: "₦2B+", label: "Total Volume" },
        { value: "99.9%", label: "Uptime Reliability" },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Heading */}
                <div className="mb-16">
                    <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
                        Powerful Analytics & Insights
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Gain a clear picture of your performance with real-time dashboards,
                        detailed reports, and actionable insights.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 transform hover:-translate-y-1 border border-gray-100"
                        >
                            <div className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                                {stat.value}
                            </div>
                            <div className="text-gray-700 font-medium text-sm sm:text-base">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AnalyticsStatsSection;
