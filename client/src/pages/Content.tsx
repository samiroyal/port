import { PageHeader, Section } from "@/components/Section";
import { ArrowRight } from "lucide-react";

const POSTS = [
  {
    id: 1,
    title: "Systems > Hype",
    excerpt: "Why sustainable Web3 growth comes from infrastructure, not virality.",
    category: "Growth Systems",
    url: "https://x.com/JSB_Web3X/status/2021369625217466674?s=20",
    publishedAt: "2026-02-10",
  },
  {
    id: 2,
    title: "On-Chain Observations Around WEED, SHOWER, and JailedDotFun",
    excerpt: "While reviewing on-chain activity related to the game @Jaileddotfun.",
    category: "RESEARCH",
    url: "https://x.com/JSB_Web3X/status/2015225628899819603?s=201",
    publishedAt: "2026-01-25",
  },
  {
    id: 3,
    title: "Token Communication Mistakes",
    excerpt: "Why most TGEs fail before launch.",
    category: "Token Design",
    url: "https://x.com/JSB_Web3X/status/2023151990683938850?s=20",
    publishedAt: "2026-02-15",
  },
];

export default function Content() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Signal"
        subtitle="Thoughts on mechanism design, community architecture, and token communications."
      />

      <Section>
        <div className="max-w-4xl mx-auto px-6">
          <div className="divide-y divide-white/5 border-t border-b border-white/5">
            {POSTS.map((post) => (
              <a
  key={post.id}
  href={post.url}
  target="_blank"
  rel="noopener noreferrer"
  className="block group"
>

                <div className="py-12 hover:bg-white/5 transition px-4 -mx-4">
                  <div className="flex gap-4 text-xs font-mono mb-4">
                    <span className="text-primary">
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-muted-foreground uppercase">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display mb-4 group-hover:text-primary transition">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground max-w-2xl mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-medium">
                    READ ARTICLE <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
