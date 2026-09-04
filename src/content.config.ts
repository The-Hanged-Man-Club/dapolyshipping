import { SocialLinks } from "@fujocoded/zod-transform-socials";
import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { glob } from "astro/loaders";
import { topicSchema } from "starlight-sidebar-topics/schema";
import { z } from "astro/zod";

const mods = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/mods/" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image(),
      links: SocialLinks,
    }),
});
export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({ extend: topicSchema }),
  }),
  mods,
};
