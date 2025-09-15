import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
                {/* Logo */}
                <Link to={"/"}>
                    <div className="flex items-center">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">T</span>
                            </div>
                            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-gray-400'}`}>Topify</span>
                        </div>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 font-medium">
                    <li>
                        <a
                            href="#about"
                            className={`hover:text-blue-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-400'}`}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            className={`hover:text-blue-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-400'}`}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#partners"
                            className={`hover:text-blue-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-400'}`}
                        >
                            Partners
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={`hover:text-blue-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-400'}`}
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link
                        to={"/talk-to-us"}
                        className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        Talk to Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`focus:outline-none p-1 rounded-md ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100">
                    <div className="px-4 pt-2 pb-6 space-y-4">
                        <a
                            href="#about"
                            className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
                        >
                            About
                        </a>
                        <a
                            href="#services"
                            className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
                        >
                            Services
                        </a>
                        <a
                            href="#partners"
                            className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
                        >
                            Partners
                        </a>
                        <a
                            href="#contact"
                            className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
                        >
                            Contact
                        </a>
                        <div className="pt-4 px-4">
                            <Link
                                to={"/talk-to-us"}
                                className="block w-full text-center px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md"
                            >
                                Talk to Us
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;