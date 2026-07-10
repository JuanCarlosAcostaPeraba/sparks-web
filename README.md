# sparks-web

Marketing site for [`sparks`](https://github.com/JuanCarlosAcostaPeraba/sparks-cli), a tiny native CLI for capturing ideas, tasks, and nested thoughts without leaving the terminal.

Built with:

- Astro
- Tailwind CSS 4 through `@tailwindcss/vite`
- Static output, ready for any static host

## Development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run build
```

## Codebase knowledge graph

The project is configured for [codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp), which gives compatible coding agents structural search, call tracing, architecture summaries, and impact analysis without uploading source code.

Install it once on macOS or Linux:

```bash
curl -fsSL https://raw.githubusercontent.com/DeusData/codebase-memory-mcp/main/install.sh | bash
```

Restart the coding agent after installation, then build or refresh this repository's graph with:

```bash
pnpm graph:index
```

Agent-specific discovery guidance lives in `AGENTS.md`. Generated graph databases remain in the tool's local cache and are not part of the application build.

## Project Structure

```text
src/pages/index.astro      Main landing page
src/layouts/Layout.astro   HTML shell and SEO metadata
src/styles/global.css      Tailwind import and design tokens
public/og.svg              Social preview image
```

## Links

- CLI repository: https://github.com/JuanCarlosAcostaPeraba/sparks-cli
- Release v0.1.0: https://github.com/JuanCarlosAcostaPeraba/sparks-cli/releases/tag/v0.1.0
