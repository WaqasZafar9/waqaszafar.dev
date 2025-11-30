import React from "react";
import Herosec from "../Sections/Herosec";
import Navbar from "../Components/navbar";
import Aboutme from "../Sections/Aboutme";
import Skills from "../Sections/Skills";
import Experience from "../Sections/Experience";
import Projects from "../Sections/Projects";
import ContactUs from "../Sections/ContactUs";
import Footer from "../Components/Footer";
import Education from "../Sections/education";
import Certificates from "../Sections/Certificates";

function Home() {
  return (
    <div>
      <Navbar />
      <Herosec />
      <Aboutme />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certificates />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
