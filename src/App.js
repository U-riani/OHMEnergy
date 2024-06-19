import Navbar from "./components/NavbarComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MainPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
