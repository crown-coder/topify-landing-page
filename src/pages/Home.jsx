import {
    Navbar,
    Hero,
    TrustedPartners,
    AboutUs,
    WhyPartnersChoose,
    ContactGetStarted,
    CTA,
    FAQs,
    FeaturesServicesSection,
    UseCasesSolutions,
    AnalyticsStatsSection,
    Testimonials,
    HowItWorks,
    TeamLeadershipSection,
    Footer,
} from "../components/index";

const Home = () => {
    return (
        <div className="font-sans text-gray-900 bg-white">
            {/* Sticky Navbar */}
            <Navbar />

            {/* Page Sections */}
            <main>
                <Hero />
                <TrustedPartners />
                <AboutUs />
                <WhyPartnersChoose />
                <FeaturesServicesSection />
                <UseCasesSolutions />
                <HowItWorks />
                <AnalyticsStatsSection />
                <Testimonials />
                <TeamLeadershipSection />
                {/* <ContactGetStarted /> */}
                <FAQs />
                <CTA />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Home
