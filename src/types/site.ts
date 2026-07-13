export type NavItem = {
  label: string;
  href: string;
};

export type Link = {
  label: string;
  href: string;
};

export type CommandExample = {
  command: string;
  description: string;
};

export type Feature = {
  title: string;
  text: string;
};

export type RoadmapStep = {
  phase: string;
  title: string;
  description: string;
  status: "now" | "next" | "later";
  accent: "spark" | "ember" | "ink";
};

export type RoadmapDetail = RoadmapStep & {
  summary: string;
  outcomes: readonly string[];
};

export type InstallOption = {
  id: "unix" | "windows";
  title: string;
  description: string;
  commands: readonly string[];
};

export type HeroContent = {
  title: string;
  description: string;
  primaryAction: Link;
};

export type SectionIntro = {
  title: string;
  description: string;
};

export type FooterContent = {
  title: string;
  description: string;
  action: Link;
};

export type RoadmapPageContent = {
  hero: SectionIntro;
  overview: string;
  items: readonly RoadmapDetail[];
};
