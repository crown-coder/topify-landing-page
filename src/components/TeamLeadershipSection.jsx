import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TeamLeadershipSection = () => {
    const team = [
        {
            name: "Ahmad Usman Dankyarana",
            role: "CEO & Founder",
            img: "./assets/ceo.png",
            bio: "Visionary fintech leader driving strategy, innovation, and growth in digital payments and wallets."
        },
        {
            name: "Isma'il Bello",
            role: "Human Resource Manager",
            img: "./assets/HR.jpg",
            bio: "Experienced HR professional focused on talent acquisition, employee engagement, and organizational development."
        },
        {
            name: "Sani Faisal Ibrahim",
            role: "Client Service Director",
            img: "./assets/marketer.jpg",
            bio: "Expert in client relations and partnerships, ensuring seamless support and long-term satisfaction."
        },
        {
            name: "Abdulmalik Auwal Makama",
            role: "Chief Technology Officer",
            img: "./assets/cto.jpeg",
            bio: "Technical leader overseeing product architecture, innovation, and scalable engineering solutions in fintech."
        },
        {
            name: "Muhammad Abdullahi",
            role: "Backend Engineer",
            img: "./assets/backend.png",
            bio: "Specialist in backend systems, API development, and database optimization for secure fintech solutions."
        },
        {
            name: "A. Sadiq Muhammad",
            role: "Frontend Engineer",
            img: "./assets/frontend.png",
            bio: "Focused on crafting intuitive, responsive, and user-friendly fintech interfaces with modern web technologies."
        }
    ];

    const sliderRef = useRef(null);

    const scroll = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = 350; // px per click
            sliderRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6">
                        Meet Our Leadership
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Behind Topify is a team of innovators, engineers, and strategists
                        dedicated to redefining cross-border payments and card experiences.
                    </p>
                </div>

                {/* Team horizontal slider */}
                <div
                    ref={sliderRef}
                    className="flex overflow-x-auto space-x-6 pb-6 snap-x snap-mandatory scroll-hidden"
                >

                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="flex-none w-80 snap-center group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 p-6 text-center border border-gray-100"
                        >
                            {/* Image */}
                            <div className="relative mb-6">
                                <div className="w-32 h-32 mx-auto rounded-full p-1 bg-gradient-to-r from-blue-500 to-blue-700 ">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full rounded-full object-cover border-4 border-white bg-white"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                {member.bio}
                            </p>

                            {/* Decorative dots */}
                            <div className="flex justify-center space-x-1 mt-4">
                                <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slider Controls */}
                <div className="flex justify-center mt-6 space-x-4">
                    <button
                        onClick={() => scroll("left")}
                        className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TeamLeadershipSection;
