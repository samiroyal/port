import { usePost } from "@/hooks/use-posts";
import { useRoute, Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/Section";

export default function PostDetail() {
  const [, params] = useRoute("/content/:slug");
  const { data: post, isLoading } = usePost(params?.slug || "");

  if (isLoading) return <div className="min-h-screen pt-32 px-6"><div className="w-full h-8 bg-secondary/20 animate-pulse mb-8"/></div>;
  if (!post) return <div className="min-h-screen pt-32 px-6 text-center">Post not found</div>;

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/content" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> BACK TO SIGNAL
        </Link>
        
        <header className="mb-16">
          <div className="flex items-center gap-4 text-xs font-mono text-primary mb-6">
            <span>{post.category.toUpperCase()}</span>
            <span>•</span>
            <span>{new Date(post.publishedAt!).toLocaleDateString()}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight mb-8">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        </header>
        
        <article className="prose prose-invert prose-lg max-w-none">
          {/* In a real app, this would use a Markdown renderer */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </div>
  );
}
