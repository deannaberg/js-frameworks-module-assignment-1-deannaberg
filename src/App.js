
import NavLayout from './components/layout/Layout';
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";



function App() {
  return <Routes>
    <Route path="*" element={<NavLayout />}>
      <Route index element={<Home />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes>
}
export default App;
