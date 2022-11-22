import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import { useRef, useState } from "react";

function App() {
  // const [sectionValY, setSectionValY] = useState({})

  // const getSectionValY = (val: string) => {
  //   console.log(val);
  //     return val;
  // }

  // const activeTab = () => {
  //   return "about-me"
  // }

  return (
    <div className="App">
      <Banner />
      {/* <div onClick={() => window.scrollTo(0, introRef.current.offsetTop - 21 - 66)}>werwer</div> */}
      {/* <div ref={introRef} onClick={() => console.log(introRef.current.offsetTop)}>helloooo</div> */}
      <Header />
      <Intro />
      <TechStack />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
