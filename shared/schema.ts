import { pgTable, text, serial, timestamp, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === POSTS (Content Hub) ===
export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(), // 'web3-education', 'community-strategy', 'growth-systems', 'research', 'depin', 'token-communications'
  publishedAt: timestamp("published_at").defaultNow(),
  isFeatured: boolean("is_featured").default(false),
});

// === PROJECTS (Portfolio / Proof of Work) ===
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  link: text("link"),
  tags: text("tags").array(),
  category: text("category").notNull(), // 'projects', 'research', 'threads', 'community-work', 'growth-systems', 'case-studies'
  metrics: jsonb("metrics"), // e.g., { "TVL": "$5M", "Members": "10k" }
});

// === SERVICES ===
export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  features: text("features").array(),
});

// === SCHEMAS ===
export const insertPostSchema = createInsertSchema(posts).omit({ id: true, publishedAt: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export const insertServiceSchema = createInsertSchema(services).omit({ id: true });

// === TYPES ===
export type Post = typeof posts.$inferSelect;
export type InsertPost = z.infer<typeof insertPostSchema>;

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;

export type Service = typeof services.$inferSelect;
export type InsertService = z.infer<typeof insertServiceSchema>;
