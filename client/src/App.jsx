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
import CollectionProduct from './pages/CollectionProducs.jsx';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';
import ThankYou from './pages/ThankYou';
import TvUnit from './pages/TvUnit';
import WallPanelsPage from './pages/WallPanelsPage.jsx';
import SandPolishPage from './pages/SandPolishPage';
import Pavers from './pages/Pavers';
import ScrollToTop from './ScrollToTop';


export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <SampleCartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections/:slug" element={<CollectionProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-samples" element={<SampleRequestPage />} />
          <Route path="/cart" element={<SampleRequestPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/services/tv-units" element={<TvUnit />} />
          <Route path="/services/wall-panels" element={<WallPanelsPage />} />
          <Route path="/services/sand-polish" element={<SandPolishPage />} />
          <Route path="/services/pavers" element={<Pavers />} />
        </Routes>
      </SampleCartProvider>
    </Router>
  );
}






