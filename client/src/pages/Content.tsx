import { PageHeader, Section } from "@/components/Section";
import { usePosts } from "@/hooks/use-posts";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Content() {
  const { data: posts, isLoading } = usePosts();

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Signal" 
        subtitle="Thoughts on mechanism design, community architecture, and token communications." 
      />

      <Section>
        <div className="max-w-4xl mx-auto px-6">
          {isLoading ? (
            <div className="space-y-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-40 bg-secondary/20 animate-pulse border border-white/5" />
              ))}
            </div>
          ) : (
            <div className="space-y-0 divide-y divide-white/5 border-t border-b border-white/5">
              {posts?.map((post) => (
                <Link key={post.id} href={`/content/${post.slug}`} className="block group">
                  <div className="py-12 hover:bg-white/5 transition-colors px-4 -mx-4">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-4">
                      <span className="text-xs font-mono text-primary">
                        {new Date(post.publishedAt!).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground uppercase">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-display font-medium mb-4 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed max-w-2xl mb-6">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-primary transition-colors">
                      READ ARTICLE <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
