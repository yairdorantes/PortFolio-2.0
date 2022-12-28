import Menu from "./components/Menu";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="container-body">
        {/* <MobileMenu></MobileMenu> */}
        {/* <Menu></Menu> */}
        <NavBar />
        <Home />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
