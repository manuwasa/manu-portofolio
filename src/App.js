import "./App.css";
import { Banner } from "./components/Banner";
import { MyNavbar } from "./components/MyNavbar";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
