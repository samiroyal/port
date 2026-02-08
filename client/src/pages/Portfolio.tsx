import { PageHeader, Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { useProjects } from "@/hooks/use-projects";
import { useState } from "react";
import { cn } from "@/lib/utils";

const CATEGORIES = ["ALL", "PROJECTS", "RESEARCH", "GROWTH SYSTEMS", "THREADS"];

export default function Portfolio() {
  const { data: projects, isLoading } = useProjects();
  const [filter, setFilter] = useState("ALL");

  const filteredProjects = projects?.filter(p => 
    filter === "ALL" || p.category.toLowerCase().replace(' ', '-') === filter.toLowerCase().replace(' ', '-')
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
            {CATEGORIES.map(cat => (
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

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-64 bg-secondary/20 animate-pulse border border-white/5" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects?.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
