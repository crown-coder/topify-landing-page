import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonialsData = [
    {
        name: "Chinedu Okafor",
        role: "CEO, Bridgecard",
        feedback:
            "Topify’s card infrastructure helped us scale globally. Their reliability and support team are unmatched.",
    },
    {
        name: "Aisha Bello",
        role: "CTO, PalmPay",
        feedback:
            "Integration was seamless. The uptime and transaction success rates are exactly what we needed.",
    },
    {
        name: "James Adeyemi",
        role: "Head of Operations, Monnify",
        feedback:
            "With Topify, we launched new services faster. Their team feels like an extension of ours.",
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevTestimonial = () => {
        setCurrentIndex(
            currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1
        );
    };

    const nextTestimonial = () => {
        setCurrentIndex(
            currentIndex === testimonialsData.length - 1 ? 0 : currentIndex + 1
        );
    };

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="px-30 max-lg:px-5 text-center">
                {/* Heading */}
                <div className="mb-14">
                    <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
                        What Our Partners Say
                    </h2>
                    {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        We’re proud to support innovative businesses. Here’s what some of our
                        partners have to say about working with Topify.
                    </p> */}
                </div>

                {/* Testimonial Display */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, filter: "blur(10px)" }}
                            transition={{ duration: 0.5 }}
                            className="text-center max-w-2xl mx-auto"
                        >
                            <p className="text-gray-700 text-3xl leading-relaxed my-8 font-dancing">
                                “{testimonialsData[currentIndex].feedback}”
                            </p>
                            <div className=" flex items-center justify-center mt-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                                    {testimonialsData[currentIndex].name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        {testimonialsData[currentIndex].name}
                                    </h4>
                                    <p className="text-gray-500 text-sm">
                                        {testimonialsData[currentIndex].role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 mt-6">
                        <button
                            onClick={prevTestimonial}
                            className="bg-white w-16 h-16 rounded-full border border-gray-400 transition"
                        >
                            ←
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="bg-white w-16 h-16 rounded-full border border-gray-400 transition"
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
