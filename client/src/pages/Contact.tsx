import { PageHeader, Section } from "@/components/Section";
import { Mail, MessageSquare, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Contact" 
        subtitle="Open for operational roles and high-signal advisory." 
      />

      <Section>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-display mb-6">Let's build systems.</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              I am currently accepting new clients for Q4 2024. 
              If you are a serious team looking to build sustainable community infrastructure, let's talk.
            </p>
            
            <div className="space-y-6">
              <a href="" className="flex items-center gap-4 text-xl hover:text-primary transition-colors group p-4 border border-white/5 hover:border-primary/30 bg-secondary/10">
                <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
                <span>Email@jsb</span>
                <ArrowUpRight className="ml-auto w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a href="https://x.com/JSB_Web3X" target="_blank" className="flex items-center gap-4 text-xl hover:text-primary transition-colors group p-4 border border-white/5 hover:border-primary/30 bg-secondary/10">
                <div className="w-6 h-6 flex items-center justify-center font-display font-bold text-muted-foreground group-hover:text-primary">X</div>
                <span>@JSB_Web3X</span>
                <ArrowUpRight className="ml-auto w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a href="https://t.me/JSB_Web3X" target="_blank" className="flex items-center gap-4 text-xl hover:text-primary transition-colors group p-4 border border-white/5 hover:border-primary/30 bg-secondary/10">
                <MessageSquare className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
                <span>@JSB_Web3X TG</span>
                <ArrowUpRight className="ml-auto w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
          
          <div className="bg-secondary/20 p-8 border border-white/5">
            <h4 className="font-mono text-sm text-primary mb-6 uppercase tracking-widest">Availability</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex justify-between border-b border-white/5 pb-4">
                <span>Advisory / Retainer</span>
                <span className="text-white">Available</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-4">
                <span>Project Audit</span>
                <span className="text-white">Available</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-4">
                <span>Full-time Roles</span>
                <span className="text-white">Available</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
