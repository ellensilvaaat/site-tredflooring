import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/Home/HeroSection';
import Collections from '../components/Home/Collections';
import ServicesShowcase from '../components/Home/ServicesShowcase';
import Difference from '../components/Home/Difference';
import ProjectsCarousel from '../components/Home/ProjectsCarousel';
// import Testimonials from '../components/Home/Testimonials';
// import UploadRoom from '../components/Home/UploadRoom';
import CallToAction from '../components/Home/CallToAction';
import Footer from '../components/Home/Footer';
import EmailCapturePopup from '../components/Popup/EmailCapturePopup';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Tred Flooring | Bespoke Flooring, Rugs & TV Units</title>
        <meta
          name="description"
          content="Discover bespoke flooring, custom rugs, architectural TV units, and skirting boards by Tred. Designed in Australia to elevate your space."
        />
        <meta
          name="keywords"
          content="flooring, custom rugs, tv units, skirting boards, wall panels, sand polish, architectural design, australian interiors"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tredflooring.com/" />
      </Helmet>

      <main>
        <HeroSection />
        <Collections />
        <ServicesShowcase />
        <Difference />
        <ProjectsCarousel />
        <EmailCapturePopup />
        {/* <Testimonials /> */}
        {/* <UploadRoom /> */}
        <CallToAction />
        <Footer />
      </main>
    </>
  );
}
