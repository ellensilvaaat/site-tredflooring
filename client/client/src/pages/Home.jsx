import HeroSection from '../components/Home/HeroSection';
import Collections from '../components/Home/Collections';
import ServicesShowcase from '../components/Home/ServicesShowcase';
import Difference from '../components/Home/Difference';
import FeaturedProjects from '../components/Home/FeaturedProjects';
import Testimonials from '../components/Home/Testimonials';
import UploadRoom from '../components/Home/UploadRoom';
import CallToAction from '../components/Home/CallToAction';
import Footer from '../components/Home/Footer';



export default function Home() {
  return (
    <main>
      <HeroSection />
      <Collections />
      <ServicesShowcase />
      <Difference />
      <FeaturedProjects/>
      <Testimonials />
      <UploadRoom />
      <CallToAction />
      <Footer />
    </main>
  );
}
