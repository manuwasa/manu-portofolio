import "./App.css";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { MyNavbar } from "./components/MyNavbar";
import { Project } from "./components/Project";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
