import Navbar from "./components/NavbarComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MainPage />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
