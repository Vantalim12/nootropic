import pumpfunLogo from '@/assets/pumpfun.png';
import dexscreenerLogo from '@/assets/dexscreener.png';

export const SocialFooter = () => {
  return (
    <footer className="w-full py-8 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a 
            href="https://x.com/PNLdotFun" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-card border border-border hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 min-w-[140px]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span className="font-medium">X (Twitter)</span>
          </a>
          
          <a 
            href="https://pump.fun/coin/DinaFcGwNZJQAe4EcdHGe4u1t8eqiRsujuCYvkRnpump" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-card border border-border hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 min-w-[140px]"
          >
            <img src={pumpfunLogo} alt="Pump.fun" className="w-5 h-5" />
            <span className="font-medium">Pump.fun</span>
          </a>
          
          <a 
            href="https://dexscreener.com/solana/DinaFcGwNZJQAe4EcdHGe4u1t8eqiRsujuCYvkRnpump" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-card border border-border hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 min-w-[140px]"
          >
            <img src={dexscreenerLogo} alt="Dexscreener" className="w-5 h-5 rounded-full" />
            <span className="font-medium">Dexscreener</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
