import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 md:py-20 mt-auto bg-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-display font-bold text-lg mb-6">
            JSB
          </div>
          <p className="text-muted-foreground max-w-sm">
            Turning attention into trust, communities into infrastructure, and growth into long term value.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-xs text-white mb-6 uppercase tracking-wider">Sitemap</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-primary transition-colors">Philosophy</a></li>
            <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="/content" className="hover:text-primary transition-colors">Signal</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs text-white mb-6 uppercase tracking-wider">Network</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">
                X (Twitter) <ArrowUpRight className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">
                Telegram <ArrowUpRight className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">
                Email <ArrowUpRight className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} J.S.B. SYSTEMS OVER HYPE.
        </p>
        <p className="text-xs text-muted-foreground font-mono">
          OPERATING ON-CHAIN.
        </p>
      </div>
    </footer>
  );
}
