import { Navbar, ContactGetStarted, Footer } from "../components"

const TalkToUs = () => {
    return (
        <div className="font-sans text-gray-900 bg-white">
            {/* Sticky Navbar */}
            <Navbar />

            {/* Page Sections */}
            <main>
                <ContactGetStarted />
            </main>

            <Footer />
        </div>

    )
}

export default TalkToUs
