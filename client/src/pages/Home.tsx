import { Section } from "@/components/Section";
import { Link } from "wouter";
import { ArrowRight, Terminal, BarChart2, Shield, Radio, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center pt-20 pb-12 px-6 border-b border-white/5 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-mono text-primary text-sm tracking-widest mb-6">WEB3 COMMUNITY ARCHITECT</h2>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter mb-8 leading-none">
              SYSTEMS <br />
              OVER <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">HYPE.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12 border-l border-primary/50 pl-6">
              I help Web3 projects turn attention into trust, communities into infrastructure, and growth into long-term value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-black font-medium hover:bg-primary transition-colors text-center">
                WORK WITH ME
              </Link>
              <Link href="/portfolio" className="px-8 py-4 border border-white/20 text-white font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors text-center">
                VIEW PROOF
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <Section className="border-b border-white/5 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {[
              { icon: Terminal, title: "Community Systems", desc: "Automated workflows and engagement loops." },
              { icon: Radio, title: "Token Comms", desc: "Narrative design and signal-heavy communication." },
              { icon: BarChart2, title: "Growth Strategy", desc: "Data-driven acquisition and retention." },
              { icon: Shield, title: "Trust Building", desc: "Positioning for longevity and institutional confidence." }
            ].map((service, i) => (
              <div key={i} className="bg-background p-8 hover:bg-secondary/50 transition-colors group">
                <service.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary mb-6 transition-colors" />
                <h3 className="font-display text-xl mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-white transition-colors">
              VIEW ALL SERVICES <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Philosophy Tease */}
      <Section>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Signal over noise. <br/>
              Trust over virality.
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Most Web3 growth is mimetic and temporary. I build systems that endure. 
              By focusing on high-signal communication and infrastructure-grade community architecture, 
              we attract operators, builders, and long-term holders.
            </p>
            <Link href="/about" className="text-primary hover:text-white transition-colors font-medium inline-flex items-center gap-2">
              READ MY PHILOSOPHY <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative aspect-square md:aspect-video bg-secondary/20 border border-white/5 p-8 flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
             <Activity className="w-24 h-24 text-primary/20" />
          </div>
        </div>
      </Section>
    </div>
  );
}
