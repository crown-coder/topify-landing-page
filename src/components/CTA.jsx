import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <section className="bg-white py-20">
            <div className="max-w-5xl mx-auto px-6 text-center">
                {/* Headline */}
                <div className="mb-12">
                    {/* <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium mb-6">
                        Get Started
                    </div> */}
                    <h2 className="text-3xl sm:text-4xl text-gray-900 mb-6">
                        Ready to scale your payments with Topify?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Join our partners and leverage our secure APIs, wallet infrastructure,
                        and compliance tools to power seamless cross-border payments.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <Link
                        to={"/talk-to-us"}
                        className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                    >
                        Talk to Us
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </Link>
                    <a
                        href="#demo"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                        Request a Demo
                    </a>
                </div>

                {/* Features Grid */}
                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">SOC 2 Compliant</h3>
                        <p className="text-gray-600 text-sm">Enterprise-grade security and compliance standards</p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Fast Integration</h3>
                        <p className="text-gray-600 text-sm">Quick setup with comprehensive documentation and support</p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
                        <p className="text-gray-600 text-sm">Dedicated technical support whenever you need it</p>
                    </div>
                </div> */}

                {/* Trust indicators */}
                <div className="border-t border-gray-200 pt-12">
                    <p className="text-gray-600 text-sm mb-6">Trusted by industry leaders</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                        <div className="text-gray-700 font-semibold">Bridgecard</div>
                        <div className="text-gray-700 font-semibold">Graph</div>
                        <div className="text-gray-700 font-semibold">PalmPay</div>
                        <div className="text-gray-700 font-semibold">Monnify</div>
                        <div className="text-gray-700 font-semibold">9PSB</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;