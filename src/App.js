import About from "./components/About";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Education from "./components/Education";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Education />
      <About />
      <Project />
      <Skill />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
