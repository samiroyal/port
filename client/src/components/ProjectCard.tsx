import { Project } from "@shared/schema";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-secondary/20 border border-white/5 p-6 md:p-8 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-6">
        <span className="text-xs font-mono text-primary px-2 py-1 bg-primary/10 rounded-sm">
          {project.category.toUpperCase().replace('-', ' ')}
        </span>
        {project.link && (
          <a href={project.link} target="_blank" className="text-muted-foreground hover:text-white transition-colors">
            <ArrowUpRight className="w-5 h-5" />
          </a>
        )}
      </div>
      
      <h3 className="text-xl md:text-2xl font-display font-medium mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      {project.metrics && (
        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
          {Object.entries(project.metrics as Record<string, string>).map(([key, value]) => (
            <div key={key}>
              <p className="text-xs text-muted-foreground font-mono uppercase">{key}</p>
              <p className="text-lg font-display font-medium text-white">{value}</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
