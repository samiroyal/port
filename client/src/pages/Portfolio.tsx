import { PageHeader, Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { useState } from "react";
import { cn } from "@/lib/utils";

const CATEGORIES = ["ALL", "PROJECTS", "RESEARCH", "GROWTH SYSTEMS", "THREADS"];

const PROJECTS = [
  {
    id: "1",
    title: "Protocol Community System",
    description:
      "Designed and operated a contributor pipeline for a mid-cap DeFi protocol.",
    category: "PROJECTS",
  },
  {
    id: "2",
    title: "Token Narrative Research",
    description:
      "Market positioning and narrative research for a token launch.",
    category: "RESEARCH",
  },
  {
    id: "3",
    title: "Growth Automation Framework",
    description:
      "Automated contributor onboarding and internal coordination systems.",
    category: "GROWTH SYSTEMS",
  },
  {
    id: "4",
    title: "Signal Threads",
    description:
      "High-signal research threads focused on protocol positioning.",
    category: "THREADS",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("ALL");

  const filteredProjects =
    filter === "ALL"
      ? PROJECTS
      : PROJECTS.filter(
          (p) =>
            p.category.toLowerCase().replace(" ", "-") ===
            filter.toLowerCase().replace(" ", "-")
        );

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Proof of Work"
        subtitle="Selected operations, research, and systems deployed in the wild."
      />

      <Section className="pt-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "text-xs font-mono px-4 py-2 border transition-all duration-200",
                  filter === cat
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-muted-foreground border-white/10 hover:border-white/50"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
