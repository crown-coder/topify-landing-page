import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
          alt="Fintech background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-indigo-900/80"></div>
      </div>

      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse delay-200"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-16 relative z-10 text-white">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block px-4 py-1 text-xs tracking-wide font-semibold text-blue-100 bg-blue-600/30 rounded-full mb-6 shadow-sm">
            INNOVATIVE FINTECH SOLUTIONS
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Empowering payments,{" "}
            <br className="hidden sm:block" /> one card at a time
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed mx-auto md:mx-0">
            Topify builds card & payment solutions that let customers fund in Naira,
            hold multi-currency wallets, and spend globally — with seamless local
            services (airtime, data, bills) tightly integrated.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to={"/talk-to-us"}
              className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Talk to Us
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
            <a
              href="#features"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-white/10 text-blue-100 font-semibold hover:bg-white/20 border border-white/20 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Learn more
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Content: Mock Card */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          <div className="relative w-80 h-48 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-2xl p-6 text-white font-mono transform hover:scale-105 transition-transform duration-500">
            {/* Card Chip */}
            <div className="w-10 h-8 bg-yellow-400 rounded-sm mb-6 shadow-md"></div>

            {/* Card Number */}
            <p className="tracking-widest text-lg mb-4">1234 5678 9012 3456</p>

            {/* Card Info */}
            <div className="flex justify-between items-center text-sm">
              <div>
                <p className="uppercase opacity-80 text-xs">Card Holder</p>
                <p className="font-semibold">John Doe</p>
              </div>
              <div>
                <p className="uppercase opacity-80 text-xs">Valid Thru</p>
                <p className="font-semibold">12/27</p>
              </div>
            </div>

            {/* Logo */}
            <div className="absolute bottom-4 right-6 flex items-center gap-1">
              <div className="w-6 h-6 rounded-full bg-red-500 shadow"></div>
              <div className="w-6 h-6 rounded-full bg-yellow-400 -ml-2 shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
