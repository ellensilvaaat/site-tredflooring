import React from 'react';
import HeroProjectDetail from '../components/ProjectDetail/HeroProjectDetail';
import InfoSection from '../components/ProjectDetail/InfoSection';
import FullTextSection from '../components/ProjectDetail/FullTextSection';
import ImageGallery from '../components/ProjectDetail/ImageGallery';
import FinalTextSection from '../components/ProjectDetail/FinalTextSection';
import ThreeImageRow from '../components/ProjectDetail/ThreeImageRow';
import Footer from '../components/Home/Footer';

export default function ProjectDetailPage() {
  return (
    <div className="project-detail-page">
      <HeroProjectDetail />
      <InfoSection />
      <FullTextSection />
      <ImageGallery />
      <FinalTextSection />
      <ThreeImageRow />
      <Footer />
    </div>
  );
}
