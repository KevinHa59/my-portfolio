import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/pages/home/Home";
import Skill from "./components/pages/skill/Skill";
import Project from "./components/pages/project/Project";
import Experience from "./components/pages/experience/Experience";
import Education from "./components/pages/education/Education";
import Footer from "./components/pages/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="Home">
        <Home />
      </section>
      <section id="Skill">
        <Skill />
      </section>
      <section id="Project">
        <Project />
      </section>
      <section id="Experience">
        <Experience />
      </section>
      <section id="Education">
        <Education />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
