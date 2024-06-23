import Navbar from "./components/NavbarComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exac path="/" element={<MainPage />}/>
          <Route path="/projects" element={<ProjectPage />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
