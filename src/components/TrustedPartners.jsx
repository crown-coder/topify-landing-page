import BridgeLogo from "../assets/bridge.png"
import GraphLogo from "../assets/graph.png"
import PalmPayLogo from "../assets/palmpay.png"
import MonnifyLogo from "../assets/monnify.png"
import NinePSBLogo from "../assets/9psb.png"

const TrustedPartners = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="mb-10">
                    <h2 className="text-xl font-extrabold text-gray-600 mb-4 tracking-tight">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        We collaborate with forward-thinking fintechs and payment providers
                        to deliver seamless card and wallet experiences worldwide.
                    </p>
                </div>

                {/* Logos grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center justify-center">
                    {[
                        { name: "Bridgecard", color: "from-blue-500 to-blue-700", logo: BridgeLogo },
                        { name: "Graph", color: "from-purple-500 to-purple-700", logo: GraphLogo },
                        { name: "PalmPay", color: "from-amber-500 to-amber-600", logo: PalmPayLogo },
                        { name: "Monnify", color: "from-green-500 to-green-700", logo: MonnifyLogo },
                        { name: "9PSB", color: "from-teal-500 to-teal-700", logo: NinePSBLogo },
                    ].map((partner, index) => (
                        <div key={index} className="flex justify-center group">
                            <div className="w-44 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-gray-200 transition-all duration-300 group-hover:-translate-y-1">
                                <img src={partner.logo} alt={`${partner.name} Logo`} className="h-12 object-contain rounded-xl grayscale opacity-55 hover:grayscale-0 hover:opacity-100 transition-all duration-75 cursor-pointer" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedPartners;
