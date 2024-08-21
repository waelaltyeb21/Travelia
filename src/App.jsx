import "./App.css";
// Hooks
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import NavBar from "./Components/NavBar/NavBar";
// Components
function App() {
  return (
    <div className="app relative font-semibold scroll-my-32 scroll-smooth">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
