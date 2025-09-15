const AboutUs = () => {
    return (
        <section id="about" className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-0 -right-20 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-40"></div>

            <div className="relative  mx-auto px-40 max-lg:px-3 flex flex-col items-center">
                {/* Left Content */}
                <div className="text-center">
                    {/* <span className="inline-block px-4 py-1.5 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-5 tracking-wide shadow-sm">
                        WHO WE ARE
                    </span> */}
                    <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6 leading-snug">
                        About <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent font-dancing">Topify</span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed my-10">
                        <span className="font-semibold">Topify Digital Services Limited</span> is a Nigerian fintech specializing in <span className="font-semibold">card issuance</span>, <span className="font-semibold">wallet infrastructure</span>, and <span className="font-semibold">value-added services</span>. We provide <span className="font-semibold">multi-currency wallet solutions</span>, <span className="font-semibold">secure API-driven infrastructure</span>, an <span className="font-semibold">agent and distribution network</span>, and a <span className="font-semibold">compliance-first, user-focused approach</span>. By combining secure APIs, agent distribution, and compliance tooling, we deliver seamless experiences for <span className="text-gray-900 font-medium">travel, remittance, and everyday payments</span>.
                    </p>
                </div>


                {/* Right Image */}
                <div className="flex justify-center md:justify-end">
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="About Topify"
                            className="w-[380px] sm:w-[480px] rounded-2xl shadow-2xl"
                        />
                        {/* Floating accent card */}
                        <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                            <p className="text-sm font-semibold text-gray-900">Fintech Innovators</p>
                            <p className="text-xs text-gray-500">Since 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
