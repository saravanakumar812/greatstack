import { useState } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Program from "./Components/Program/Program";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import ContactUS from "./Components/Conatctus/Conatctus";
import Footer from "./Components/Footer/Footer";
import Video from "./Components/VideoPlayback/VideoPlayBack";

function App() {
  const [playState, setPlayState] = useState(false);
  return (
    <>
      <Navbar />
      <Hero />
      <div className="nav-container">
        <Title subtitle="Our PROGRAM" title="What we offer" />
        <Program />
        <About setPlayState={setPlayState} />
        <Title subtitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subtitle="TESTIMONIALS" title="What Student Says" />

        <Testimonials />
        <Title subtitle="Contact Us" title="Get in Touch" />
        <ContactUS />
        <Footer />
      </div>
      <Video playState={playState} setPlayState={setPlayState} />
    </>
  );
}

export default App;
