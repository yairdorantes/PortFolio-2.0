import Menu from "./components/Menu";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="container-body">
        <Menu></Menu>
        <Home></Home>
        <Skills></Skills>
        <Projects></Projects>
      </div>
    </>
  );
}

export default App;
