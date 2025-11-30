import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import SampleRequestPage from './pages/SampleRequestPage';
import ProjectDetail from './pages/ProjectDetail';
import { SampleCartProvider } from './contexts/SampleCartContext';
import CollectionProducts from './components/Products/CollectionProducts';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';

export default function App() {
  return (
    <Router>
      <SampleCartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections/:slug" element={<CollectionProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-samples" element={<SampleRequestPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} /> {/* ✅ ok */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </SampleCartProvider>
    </Router>
  );
}






