import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProjectsPage from "./pages/ProjectsPage";
import SingleProjectPage from "./pages/SingleProjectPage";
import Layout from "./components/Layout";
import AboutsUs from "./pages/AboutsUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/.com" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:projectId" element={<SingleProjectPage />} />
          <Route path="about-us" element={<AboutsUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
