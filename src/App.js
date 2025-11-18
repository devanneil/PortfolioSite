import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Company from "./Company";
import NotFound from "./NotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company" element={<Company />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}