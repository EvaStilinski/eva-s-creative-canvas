import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import CreativityToggle from "@/components/CreativityToggle";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  const [creativeMode, setCreativeMode] = useState(false);

  return (
    <div className={`min-h-screen transition-all duration-700 ${creativeMode ? "" : ""}`}>
      <Navbar creativeMode={creativeMode} />
      <HeroSection creativeMode={creativeMode} />
      <AboutSection creativeMode={creativeMode} />
      <SkillsSection creativeMode={creativeMode} />
      <ProjectsSection creativeMode={creativeMode} />
      <GallerySection creativeMode={creativeMode} />
      <ContactSection creativeMode={creativeMode} />
      <CreativityToggle
        creativeMode={creativeMode}
        onToggle={() => setCreativeMode(!creativeMode)}
      />
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        © 2026 Eva Lucero Pérez S. — Built with 💛 and a little bit of magic.
      </footer>
    </div>
  );
};

export default Index;
