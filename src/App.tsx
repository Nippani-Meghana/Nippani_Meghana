import { motion } from 'motion/react';
import { PhasePlaneBackground } from './components/PhasePlaneBackground';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WritingSection } from './components/WritingSection';
import { Footer } from './components/Footer';
import { NavigationSidebar } from './components/NavigationSidebar';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-pink-soft selection:text-ink">
      <PhasePlaneBackground />
      <NavigationSidebar />
      
      {/* Decorative blurry blobs to enhance the color palette */}
      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-pink-soft rounded-full mix-blend-multiply filter blur-[100px] opacity-30 pointer-events-none z-0 animate-blob" />
      <div className="fixed top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-green-soft rounded-full mix-blend-multiply filter blur-[100px] opacity-30 pointer-events-none z-0 animate-blob animation-delay-2000" />
      <div className="fixed bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-butter-dark rounded-full mix-blend-multiply filter blur-[120px] opacity-40 pointer-events-none z-0 animate-blob animation-delay-4000" />

      <main className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-24 flex flex-col gap-24 sm:gap-32">
        <HeroSection />
        
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }} 
          whileInView={{ opacity: 1, scaleX: 1 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="w-full h-px bg-green-soft/60 origin-left" 
        />
        
        <ExperienceSection />
        
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }} 
          whileInView={{ opacity: 1, scaleX: 1 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="w-full h-px bg-green-soft/60 origin-left" 
        />
        
        <ProjectsSection />
        
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }} 
          whileInView={{ opacity: 1, scaleX: 1 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="w-full h-px bg-green-soft/60 origin-left" 
        />
        
        <WritingSection />
      </main>
      
      <Footer />
    </div>
  );
}
