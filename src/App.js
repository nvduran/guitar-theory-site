import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PentatonicPage from "./components/PentatonicPage";
import NavBar from "./components/NavBar";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SayWhat from "./components/SayWhat";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<PentatonicPage />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/AboutPentatonics" element={<SayWhat />} />
      </Routes>
      <div></div>
    </div>
  );
}

export default App;
