import { ShieldCheck, CreditCard, Zap, Users } from "lucide-react";

const FeaturesServicesSection = () => {
    const features = [
        {
            icon: <ShieldCheck className="w-7 h-7 text-white" />,
            title: "Secure Infrastructure",
            description:
                "Enterprise-grade encryption and fraud prevention ensure your transactions are always safe.",
        },
        {
            icon: <CreditCard className="w-7 h-7 text-white" />,
            title: "Seamless Payments",
            description:
                "Enable smooth card and wallet transactions with a reliable payment processing system.",
        },
        {
            icon: <Zap className="w-7 h-7 text-white" />,
            title: "Lightning Fast",
            description:
                "Experience rapid transaction speeds and low latency for real-time financial operations.",
        },
        {
            icon: <Users className="w-7 h-7 text-white" />,
            title: "User-Friendly Experience",
            description:
                "Intuitive interfaces that make payments and financial services accessible to everyone.",
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                {/* Heading */}
                <div className="mb-16 text-right">
                    <h2 className="text-3xl sm:text-7xl text-[#0A2540] mb-10">
                        <span className="font-dancing"> Our Features</span> <br /> and Services
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        We provide world-class services tailored for fintechs, startups, and
                        enterprises looking to scale securely and efficiently.
                    </p>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-white rounded-2xl shadow-sm border border-gray-100
                         hover:shadow-xl hover:scale-105 transition-all duration-300 relative"
                        >
                            {/* Icon inside gradient circle */}
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700  mb-6 mx-auto shadow-lggroup-hover:ring-4 group-hover:ring-sky-200 transition-all duration-300">
                                {feature.icon}
                            </div>

                            <h3 className="text-lg font-semibold text-[#0A2540] mb-3 group-hover:text-sky-600 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative gradient blur for depth */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-40"></div>
        </section>
    );
};

export default FeaturesServicesSection;
