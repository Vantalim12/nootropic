import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useState } from 'react';
import { WaitlistModal } from '../waitlist/WaitlistModal';
import DiagramComponent from './DiagramComponent';
interface HeroSectionProps {
  showTitle: boolean;
}
export const HeroSection = ({
  showTitle
}: HeroSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'scattered' | 'convergence' | 'organized'>('scattered');
  const [heroText, setHeroText] = useState("All your note, bookmarks, inspirations, articles and images in one single, private second brain, accessible anywhere, anytime.");
  const handleSectionClick = (section: 'scattered' | 'convergence' | 'organized', text: string) => {
    setActiveSection(section);
    setHeroText(text);
  };
  return <div className="py-20 md:py-28 flex flex-col items-center text-center">
      <AnimatedTransition show={showTitle} animation="slide-up" duration={600}>
        {/* Title first */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent md:text-7xl">
          Programmable Nootropic Layer
        </h1>
        
        {/* Contract Address */}
        <div className="mb-6 px-6 py-3 rounded-lg bg-muted/50 border border-border inline-flex items-center gap-2">
          <span className="text-sm font-mono text-muted-foreground">Contract:</span>
          <span className="text-sm font-mono font-semibold">DinaFcGwNZJQAe4EcdHGe4u1t8eqiRsujuCYvkRnpump</span>
        </div>
        
        {/* Interactive text */}
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" key={heroText}>
          {heroText}
        </p>
        
        {/* Diagram */}
        <div className="mb-8">
          <DiagramComponent onSectionClick={handleSectionClick} activeSection={activeSection} />
        </div>
        
        {/* Call to action */}
        <Button size="lg" onClick={() => setIsModalOpen(true)} className="rounded-full px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 transition-all duration-300">
          Join Waitlist
        </Button>

        <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </AnimatedTransition>
    </div>;
};