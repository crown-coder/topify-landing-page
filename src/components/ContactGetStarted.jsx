const ContactGetStarted = () => {
    return (
        <section id="contact" className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-16">
                    {/* <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        Get In Touch
                    </div> */}
                    <h2 className="text-3xl sm:text-4xl text-gray-900 mb-6">
                        Contact & Get Started
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Ready to partner with us? Reach out for business inquiries, technical
                        integration, or to request our sandbox credentials.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">General / Business</h4>
                                        <a href="mailto:business@topify.ng" className="text-blue-600 hover:text-blue-800 transition-colors">
                                            business@topify.global
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-purple-100 p-3 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Technical / Integration</h4>
                                        <a href="mailto:integration@topify.global" className="text-blue-600 hover:text-blue-800 transition-colors">
                                            integration@topify.global
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Phone</h4>
                                        <a href="tel:+2349037120954" className="text-blue-600 hover:text-blue-800 transition-colors">
                                            +234 903 712 0954
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-amber-100 p-3 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Website</h4>
                                        <a href="https://topify.ng" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                                            topify.global
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h4 className="font-medium text-gray-900 mb-2">Registered Company</h4>
                            <p className="text-gray-600">Topify Digital Services Limited</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    placeholder="Your company name"
                                />
                            </div>

                            <div>
                                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                                    I'm interested in
                                </label>
                                <select
                                    id="interest"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                >
                                    <option value="">Select an option</option>
                                    <option value="partnership">Business Partnership</option>
                                    <option value="integration">Technical Integration</option>
                                    <option value="sandbox">Sandbox Access</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    placeholder="Tell us about your project or inquiry..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Additional CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-600 mb-6">Prefer to email directly?</p>
                    <a
                        href="mailto:business@topify.ng"
                        className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-blue-600 font-semibold hover:bg-gray-50 transition-colors"
                    >
                        Email business@topify.ng
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactGetStarted;