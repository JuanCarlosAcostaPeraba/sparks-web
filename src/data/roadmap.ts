import type { RoadmapPageContent } from "../types/site";

export const roadmapPageContent: RoadmapPageContent = {
  hero: {
    title: "Roadmap",
    description:
      "sparks is intentionally small. The roadmap is about strengthening the terminal workflow before adding anything that could slow it down.",
  },
  overview:
    "The project grows in three loops: capture ideas quickly, understand how they relate, then move useful local data into other workflows when you ask for it. Each phase protects the same core promise: the terminal remains the fastest place to write down a thought.",
  items: [
    {
      phase: "01",
      title: "Make capture frictionless",
      description:
        "The first priority is making the common path feel instant: add a spark, mark it important, finish it, and find it again without remembering a complex command surface.",
      summary:
        "This phase is about removing hesitation. Commands should be short, output should be obvious, and the default list should help you choose the next action without opening another app.",
      status: "now",
      accent: "spark",
      outcomes: [
        "Sharper defaults for listing active sparks.",
        "Clearer command feedback after add, edit, complete, and important actions.",
        "More forgiving search for titles and nested ideas.",
      ],
    },
    {
      phase: "02",
      title: "Make connected ideas visible",
      description:
        "Once capture feels natural, sparks needs stronger ways to show relationships between ideas, sub-ideas, and follow-up work.",
      summary:
        "The goal is to make a small local database feel like a thinking map. Tree output, filters, and review commands should make related work visible without adding ceremony.",
      status: "next",
      accent: "ember",
      outcomes: [
        "Better tree and branch views for parent-child ideas.",
        "Focused filters for important, completed, stale, and nested sparks.",
        "Review commands that help clean up old or unfinished thoughts.",
      ],
    },
    {
      phase: "03",
      title: "Make local data useful elsewhere",
      description:
        "The final layer is integration: exports, scripts, and automation points that keep data local by default but make it easy to use where work already happens.",
      summary:
        "This phase adds escape hatches, not a cloud dependency. sparks should stay scriptable, portable, and easy to back up.",
      status: "later",
      accent: "ink",
      outcomes: [
        "JSON and plain-text export flows for automation.",
        "Simple backup and restore guidance for the SQLite store.",
        "Hooks that let other tools read sparks without owning them.",
      ],
    },
  ],
};
