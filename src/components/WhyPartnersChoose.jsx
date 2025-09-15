import { ShieldCheck, Zap, Layers, Globe } from "lucide-react";

const WhyPartnersChoose = () => {
  const reasons = [
    {
      icon: <Layers className="w-6 h-6 text-white" />,
      title: "Focused Product",
      text: "Cards + wallet + FX flows tailored for travelers and cross-border needs.",
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Fast Go-To-Market",
      text: "Production integrations complete — launch quickly using our stack.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Security & Compliance",
      text: "NDPR alignment, KYC flows, ISMS roadmap and EFCC.",
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Partner-First Approach",
      text: "Keep your brand while leveraging our secure infrastructure.",
    },
  ];

  return (
    <section
      id="partners"
      className="py-20"
    >
      <div className="p-8 sm:px-20 max-w-[90%] mx-auto rounded-2xl shadow-xl bg-gradient-to-r from-gray-50 via-white to-gray-50 border border-gray-200">

        {/* Section Title */}
        <h2 className="text-3xl sm:text-5xl mb-10">
          <span className="font-dancing">Why</span> Partners <br /> Choose Topify
        </h2>

        {/* Grid of Reasons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center 
                         hover:shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-100"
            >
              {/* Icon inside colored circle */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black mb-5 shadow-md">
                {reason.icon}
              </div>

              <h3 className="font-semibold text-xl text-black mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartnersChoose;
