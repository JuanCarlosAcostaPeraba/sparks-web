import type {
  CommandExample,
  Feature,
  FooterContent,
  HeroContent,
  InstallOption,
  NavItem,
  RoadmapStep,
  SectionIntro,
} from "../types/site";

const githubUrl = "https://github.com/JuanCarlosAcostaPeraba/sparks-cli";
const unixInstallCommand =
  "curl -fsSL https://raw.githubusercontent.com/JuanCarlosAcostaPeraba/sparks-cli/main/scripts/install.sh | sh";
const windowsInstallCommand =
  "irm https://raw.githubusercontent.com/JuanCarlosAcostaPeraba/sparks-cli/main/scripts/install.ps1 | iex";

export const navItems: readonly NavItem[] = [
  { label: "Why", href: "#why" },
  { label: "Commands", href: "#commands" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Install", href: "#install" },
  { label: "GitHub", href: githubUrl },
];

export const heroContent: HeroContent = {
  title: "sparks",
  description:
    "Catch the thought before it disappears. A fast, local-first CLI for ideas, tasks and nested thoughts",
  primaryAction: {
    label: "Star on GitHub",
    href: githubUrl,
  },
};

export const terminalLines = [
  '<span class="text-spark">$</span> sparks add "Ship the CLI"',
  "Added spark 1",
  '<span class="text-spark">$</span> sparks add --parent 1 "Write docs"',
  "Added spark 2",
  '<span class="text-spark">$</span> sparks tree',
  "└─ [!] 1) Ship the CLI",
  "   └─ [ ] 1.1) Write docs",
  "",
  '<span class="text-stone-400"># fast capture, local SQLite, JSON when needed</span>',
] as const;

export const whyIntro: SectionIntro = {
  title: "Built for terminal-first thinking",
  description:
    "sparks keeps capture close to where work already happens. No dashboard, no sync account, no context switch.",
};

export const features: readonly Feature[] = [
  {
    title: "Capture before the thought disappears.",
    text: "One command is enough to save a task, note, or half-formed idea while you stay in flow.",
  },
  {
    title: "Keep related ideas connected.",
    text: "Use --parent to create sub-ideas and view them with hierarchical numbering.",
  },
  {
    title: "Local, native, scriptable.",
    text: "A Go binary backed by local SQLite, with JSON output when you want to pipe or automate.",
  },
];

export const commandsIntro: SectionIntro = {
  title: "Small command surface. Useful defaults",
  description:
    "The default command lists active sparks. Aliases keep common actions short when you are already in flow.",
};

export const commands: readonly CommandExample[] = [
  {
    command: 'sparks + "Idea"',
    description: "Capture a spark quickly with the short alias.",
  },
  {
    command: 'sparks add --parent 1 "Sub-idea"',
    description: "Attach a nested thought to a parent idea.",
  },
  {
    command: "sparks tree",
    description: "See a numbered tree of related ideas.",
  },
  {
    command: "sparks ! 3",
    description: "Toggle important status.",
  },
  {
    command: "sparks ok 3",
    description: "Mark a spark as completed.",
  },
  {
    command: 'sparks search "docs"',
    description: "Find sparks by title.",
  },
];

export const roadmapIntro: SectionIntro = {
  title: "A small tool with a clear path",
  description:
    "The roadmap keeps sparks focused: better capture first, richer organization next, and careful integrations only when the local workflow stays fast.",
};

export const roadmapSteps: readonly RoadmapStep[] = [
  {
    phase: "01",
    title: "Make capture frictionless",
    description:
      "Keep the CLI tiny, fast, and forgiving for adding, finding, and finishing sparks.",
    status: "now",
    accent: "spark",
  },
  {
    phase: "02",
    title: "Make connected ideas visible",
    description:
      "Improve tree views, filtering, and review flows so nested work stays readable.",
    status: "next",
    accent: "ember",
  },
  {
    phase: "03",
    title: "Make local data useful elsewhere",
    description:
      "Add export and automation hooks without turning sparks into another cloud dashboard.",
    status: "later",
    accent: "ink",
  },
];

export const installIntro: SectionIntro = {
  title: "One command. Then stay in flow",
  description:
    "The official installers detect your platform, verify the download checksum, and put sparks on your PATH.",
};

export const installOptions: readonly InstallOption[] = [
  {
    id: "unix",
    title: "macOS and Linux",
    description:
      "Install the latest release for your operating system and architecture.",
    commands: [unixInstallCommand],
  },
  {
    id: "windows",
    title: "Windows",
    description: "Run the checksum-verifying installer from PowerShell.",
    commands: [windowsInstallCommand],
  },
];

export const footerContent: FooterContent = {
  title: "Give your terminal a scratchpad",
  description:
    "Open it, capture the thought, and get back to the work that sparked it.",
  action: {
    label: "Star on GitHub",
    href: githubUrl,
  },
  credit: {
    label: "Designed & built by Juan Carlos Acosta Perabá ↗",
    href: "https://jcap.tech/",
  },
};
