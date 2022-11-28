import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PentatonicPage from "./components/PentatonicPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <PentatonicPage />
      <div></div>
    </div>
  );
}

export default App;
