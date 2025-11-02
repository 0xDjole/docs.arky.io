import { defineCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

console.log("log");
export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
};
