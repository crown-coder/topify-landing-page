import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQs = () => {
    const faqs = [
        {
            question: "What services does Topify currently offer?",
            answer:
                "We provide virtual card issuance, wallet funding, airtime/data/bill payments, agent networks, FX conversion, and compliance-driven payment solutions already in production.",
        },
        {
            question: "How can I partner with Topify?",
            answer:
                "Simply reach out to us via business@topify.ng to request our partnership pack or integration details. We’ll guide you through onboarding quickly.",
        },
        {
            question: "Do you offer physical cards?",
            answer:
                "Yes, our virtual-to-physical card pathway is in progress with BIN partners. Branded physical cards for travelers will be available soon.",
        },
        {
            question: "What currencies are supported?",
            answer:
                "We currently support Naira and USD wallets. Riyal (SAR) conversion is in progress, and more currencies (AED, CNY) are on our roadmap.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="p-20 max-lg:p-8 bg-white grid grid-cols-2 max-lg:grid-cols-1 gap-8 items-center">
            <div>
                {/* Section Title */}
                <h2 className="text-3xl sm:text-7xl text-[#0A2540] mb-10">
                    <span className="font-dancing">Frequently</span> Asked<br /> Questions
                </h2>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg shadow-sm"
                        >
                            <button
                                className="w-full flex justify-between items-center p-4 text-left font-semibold text-[#0A2540]"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <ChevronDown
                                    className={`w-5 h-5 transform transition-transform ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="p-4 pt-0 text-gray-600 text-sm">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-xs mx-auto h-fit bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
                {/* Decorative Circles */}
                <div className="absolute w-32 h-32 bg-pink-300 rounded-full -top-10 -right-10 opacity-30 blur-3xl"></div>
                <div className="absolute w-24 h-24 bg-yellow-300 rounded-full -bottom-8 -left-8 opacity-30 blur-2xl"></div>
                <div className="absolute w-40 h-40 bg-purple-400 rounded-full -bottom-20 -right-20 opacity-20 blur-3xl"></div>

                {/* Smiling Icon */}
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-yellow-500 text-3xl font-bold absolute -top-7 -left-7 shadow-lg">
                    🙂
                </div>

                {/* Card Content */}
                <h3 className="text-xl font-bold mt-10 relative z-10">Book a 15-min Intro Call</h3>
                <p className="text-white/80 mt-2 text-sm relative z-10">
                    Let’s connect and discuss how we can collaborate effectively.
                </p>

                <button className="mt-6 w-full bg-white text-gray-900 font-semibold py-3 px-5 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 relative z-10">
                    Book a Call
                </button>

                {/* Optional email link */}
                <div className="mt-4 text-sm flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer relative z-10">
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 12H8m0 0l4-4m-4 4l4 4"
                        />
                    </svg>
                    <span>Prefer to email? hello@example.com</span>
                </div>
            </div>


        </section>
    );
};

export default FAQs;
