import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PentatonicPage from "./components/PentatonicPage";
import NavBar from "./components/NavBar";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SayWhat from "./components/SayWhat";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<PentatonicPage />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/AboutPentatonics" element={<SayWhat />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <div></div>
    </div>
  );
}

export default App;
