import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
import Company from "./Company";
import NotFound from "./NotFound";

export default function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devanneil" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company" element={<Company />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}