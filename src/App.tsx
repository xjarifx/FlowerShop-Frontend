import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Gallery from "./components/Gallery";
import GalleryServices from "./components/GalleryServices";
import About from "./components/About";
import AboutPage from "./components/AboutPage";
import Slider from "./components/Slider";
import WhatWeDo from "./components/WhatWeDo";
import WorkWithUsSection from "./components/WorkWithUsSection";
import Footer from "./components/Footer";
import ContractPage from "./components/ContractPage";
import ComingSoon from "./components/ComingSoon";
import { startBackgroundImagePrefetch } from "./utils/prefetchImages";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Slider />
      <WhatWeDo />
      <WorkWithUsSection />
      <Footer />
    </>
  );
}

function GalleryPage() {
  return (
    <>
      <Navbar />
      <Gallery />
      <GalleryServices />
      <WorkWithUsSection />
      <Footer />
    </>
  );
}

function AboutRoutePage() {
  return (
    <>
      <Navbar />
      <AboutPage />
      <Footer />
    </>
  );
}

function ContractRoutePage() {
  return (
    <>
      <Navbar />
      <ContractPage />
      <Footer />
    </>
  );
}

function ComingSoonPage() {
  return <ComingSoon />;
}

export default function App() {
  useEffect(() => {
    startBackgroundImagePrefetch();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutRoutePage />} />
        <Route path="/contract" element={<ContractRoutePage />} />
        <Route path="/coming-soon" element={<ComingSoonPage />} />
      </Routes>
    </BrowserRouter>
  );
}
