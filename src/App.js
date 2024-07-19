import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProjectsPage from "./pages/ProjectsPage";
import SingleProjectPage from "./pages/SingleProjectPage";
import Layout from "./components/Layout";
import AboutsUs from "./pages/AboutsUs";
import PartnersPage from "./pages/ParntersPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:projectId" element={<SingleProjectPage />} />
          <Route path="about-us" element={<AboutsUs />} />
          <Route path="partners" element={<PartnersPage />} />
          <Route path="contact" element={<ContactPage />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
