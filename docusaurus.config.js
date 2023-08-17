const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "Docusaurus",
  tagline: "Build optimized websites quickly, focus on your content",

  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        pages: {
          path: "src/pages",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};
