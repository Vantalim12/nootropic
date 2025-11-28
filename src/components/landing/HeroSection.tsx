import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useState } from 'react';
import { WaitlistModal } from '../waitlist/WaitlistModal';
import DiagramComponent from './DiagramComponent';
import pumpfunLogo from '@/assets/pumpfun.png';
interface HeroSectionProps {
  showTitle: boolean;
}
export const HeroSection = ({
  showTitle
}: HeroSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'scattered' | 'convergence' | 'organized'>('scattered');
  const [heroText, setHeroText] = useState("All your notes, bookmarks, inspirations, articles and images in one single, private second brain, accessible anywhere, anytime.");
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
          <span className="text-sm font-mono font-semibold">TBA</span>
        </div>

        {/* Social and Platform Links */}
        <div className="flex items-center gap-4 mb-8">
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:bg-primary/10 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span className="text-sm font-medium">Twitter</span>
          </a>
          
          <a 
            href="https://pump.fun" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:bg-primary/10 transition-all duration-300"
          >
            <img src={pumpfunLogo} alt="Pump.fun" className="w-5 h-5" />
            <span className="text-sm font-medium">Pump.fun</span>
          </a>

          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-sm font-medium">Solana Chart</span>
          </div>
        </div>
        
        {/* Interactive text second */}
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" key={heroText}>
          {heroText}
        </p>
        
        {/* Diagram third */}
        <div className="mb-8">
          <DiagramComponent onSectionClick={handleSectionClick} activeSection={activeSection} />
        </div>
        
        {/* Call to action last */}
        <Button size="lg" onClick={() => setIsModalOpen(true)} className="rounded-full px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 transition-all duration-300">
          Join Waitlist
        </Button>

        <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </AnimatedTransition>
    </div>;
};