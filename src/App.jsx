import React from 'react'
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import {About} from "./sections/About.jsx";
import {Experiences} from "./sections/Experiences.jsx";
import {Contact} from "./sections/Contact.jsx";
import {Footer} from "./sections/Footer.jsx";
// import {Projects} from "./sections/Projects.jsx";
// import {Testimonies} from "./sections/Testimonies.jsx";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <Navbar />
            <Hero />
            <About />
            <Experiences />
            {/*<Projects />*/}
            {/*<Testimonies />*/}
            <Contact />
            <Footer />
        </main>
    )
}
export default App
