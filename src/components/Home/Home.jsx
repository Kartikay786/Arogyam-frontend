import React from 'react'
import Hero2 from './Sections/Hero2'
import Features from './Sections/Features'
import HowItWorks from './Sections/HowItWorks'
import DemoWidget2 from './Sections/DemoWidgets2'
import Impact from './Sections/Impact'
import Footer from './Sections/Footer'

const Home = () => {
    return (
        <>
            <div className="min-h-screen bg-white">
                <Hero2 />
                <Features />
                <HowItWorks />
                <DemoWidget2 />
                <Impact />
                <Footer />
            </div>
        </>
    )
}

export default Home