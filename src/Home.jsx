import { useEffect } from "react";
import Navbar from "./sections/Navbar.jsx"
import Hero from "./sections/Hero.jsx"
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import About from "./sections/About.jsx";
import Socials from "./components/Socials.jsx";
import Button from "./components/Button.jsx";
import Footer from "./sections/Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx"

import { FaArrowDownLong } from "react-icons/fa6";

function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-b from-primary to-secondary">
      <ScrollToTop />
      <Navbar />
      <Hero />
      <div className="h-10 w-3/4 flex justify-between items-center">
        <FaArrowDownLong />
        <Socials />
      </div>
      <Projects />
      <Skills />
      <About />
      <Button name="Let's Work Together" link="/contact" show={true}/>
      <Footer />
    </div>
  )
}

export default Home
