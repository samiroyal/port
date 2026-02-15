import { PageHeader, Section } from "@/components/Section";

export default function About() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Philosophy" 
        subtitle="How I think about Web3 growth, community, and the attention economy." 
      />

      <Section>
        <div className="max-w-3xl mx-auto px-6 space-y-24">
          
          <article>
            <span className="font-mono text-primary text-xs mb-4 block">ON GROWTH</span>
            <h2 className="text-3xl font-display font-medium mb-6">Growth is a system, not a hack.</h2>
            <div className="prose prose-invert prose-lg text-muted-foreground">
              <p>
                In Web3, "growth" is often confused with "hype". Hype is useful for liquidity events, 
                but toxic for community longevity. Sustainable growth comes from clear value capture mechanisms, 
                high signal communication loops, and user segmentation.
              </p>
              <p>
                I don't sell viral tweets. I build the engines that capture the attention those tweets generate 
                and convert it into on-chain activity and governance participation.
              </p>
            </div>
          </article>

          <article>
            <span className="font-mono text-primary text-xs mb-4 block">ON COMMUNITY</span>
            <h2 className="text-3xl font-display font-medium mb-6">Communities are infrastructure.</h2>
            <div className="prose prose-invert prose-lg text-muted-foreground">
              <p>
                A Discord server isn't a community. It's a waiting room. A real community is infrastructure it performs work. 
                Whether that's decentralized support, governance debate, or content production, 
                members must have a clear "job" to do within the network.
              </p>
              <p>
                My approach focuses on turning passive holders into active operators through structured 
                incentives and clear role delegation.
              </p>
            </div>
          </article>

          <article>
            <span className="font-mono text-primary text-xs mb-4 block">ON TRUST</span>
            <h2 className="text-3xl font-display font-medium mb-6">Trust is the only asset.</h2>
            <div className="prose prose-invert prose-lg text-muted-foreground">
              <p>
                In an industry defined by rug pulls and vaporware, trust is the ultimate premium. 
                It is built through consistency, transparency, and shipping. Every piece of communication 
                must reinforce the project's legitimacy.
              </p>
            </div>
          </article>

        </div>
      </Section>
    </div>
  );
}
