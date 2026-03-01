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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutRoutePage />} />
      </Routes>
    </BrowserRouter>
  );
}
