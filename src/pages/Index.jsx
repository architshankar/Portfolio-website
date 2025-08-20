import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// import Extracurricular from "@/components/Extracurricular";
// import ScrollReveal from "@/components/ui/scroll-reveal";
// import About from "@/components/about";
import ClickSpark from '../blocks/Animations/ClickSpark/ClickSpark';


import Extracurricular from "../components/extracurricular";
import ScrollReveal from "../components/ui/scroll-reveal";
import About from "../components/about";


const Index = () => {
  return (
    <div>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <Hero /><ScrollReveal containerWidth="100%">
            <About />
          </ScrollReveal>
          <ScrollReveal containerWidth="100%">
            <Skills />
          </ScrollReveal>
          <ScrollReveal containerWidth="100%">
            <Projects />
          </ScrollReveal>
          <ScrollReveal containerWidth="100%">
            <Education />
          </ScrollReveal>
          <ScrollReveal containerWidth="100%">
            <Extracurricular />
          </ScrollReveal>
          <ScrollReveal containerWidth="100%">
            <Contact />
          </ScrollReveal>
          <ScrollReveal containerWidth="100%">
            <Footer />
          </ScrollReveal>
        </div>
      </ClickSpark>
    </div>

  );
};

export default Index;
