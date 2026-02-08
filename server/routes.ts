import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // === POSTS ===
  app.get(api.posts.list.path, async (req, res) => {
    const posts = await storage.getPosts();
    res.json(posts);
  });

  app.get(api.posts.get.path, async (req, res) => {
    const post = await storage.getPost(req.params.slug);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  });

  // === PROJECTS ===
  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  // === SERVICES ===
  app.get(api.services.list.path, async (req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  // === SEED DATA ===
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingServices = await storage.getServices();
  if (existingServices.length === 0) {
    console.log("Seeding database...");

    // Seed Services
    await storage.createService({
      title: "Community Growth Systems",
      description: "Building automated systems to turn passive followers into active contributors.",
      features: ["Onboarding pipelines", "Contributor frameworks", "Governance setups"]
    });
    await storage.createService({
      title: "Token Communications",
      description: "Strategic messaging for TGEs, upgrades, and dao proposals.",
      features: ["Whitepaper editing", "TGE narratives", "Governance comms"]
    });
    await storage.createService({
      title: "Research & Signal",
      description: "Deep-dive analysis on competitive landscapes and market positioning.",
      features: ["Market mapping", "Competitor analysis", "Trend forecasting"]
    });

    // Seed Projects
    await storage.createProject({
      title: "DeFi Protocol Alpha",
      description: "Led community growth from 0 to 50k members pre-TGE.",
      link: "https://example.com",
      category: "project",
      tags: ["Growth", "DeFi", "Strategy"],
      metrics: { "TVL": "$100M", "Users": "50k" }
    });
    await storage.createProject({
      title: "The State of DePIN 2025",
      description: "Comprehensive research report on decentralized physical infrastructure.",
      link: "https://example.com",
      category: "research",
      tags: ["Research", "DePIN"],
      metrics: { "Reads": "15k", "Shares": "2k" }
    });
    await storage.createProject({
      title: "DAO Governance Framework",
      description: "Designed the governance modularity for a top 50 L1 blockchain.",
      link: "https://example.com",
      category: "growth-systems",
      tags: ["Governance", "L1"],
      metrics: { "Proposals": "150+" }
    });

    // Seed Posts
    await storage.createPost({
      title: "The End of Hype Cycles",
      slug: "end-of-hype-cycles",
      excerpt: "Why sustainble growth comes from systems, not viral tweets.",
      content: "Content about hype cycles...",
      category: "growth-systems",
      isFeatured: true
    });
    await storage.createPost({
      title: "Community as Infrastructure",
      slug: "community-as-infrastructure",
      excerpt: "Moving beyond 'gm' and into functional community roles.",
      content: "Content about community...",
      category: "community-strategy",
      isFeatured: true
    });
    await storage.createPost({
      title: "Tokenomics for Builders",
      slug: "tokenomics-for-builders",
      excerpt: "Designing token models that align incentives long-term.",
      content: "Content about tokenomics...",
      category: "token-communications",
      isFeatured: false
    });

    console.log("Database seeded successfully.");
  }
}
