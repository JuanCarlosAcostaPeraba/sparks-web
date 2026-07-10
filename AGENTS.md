## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Codebase intelligence

This project uses `codebase-memory-mcp` to maintain a local knowledge graph of the codebase.

Prefer its graph tools for code discovery, in this order:

1. `search_graph` to find functions, classes, routes, and variables.
2. `trace_path` to inspect callers, callees, and data flow.
3. `get_code_snippet` to read a specific symbol.
4. `query_graph` for complex multi-hop queries.
5. `get_architecture` for a high-level project overview.

Run `index_repository` first when the project is not indexed. Fall back to text or file search for string literals, configuration, non-code files, or when the graph has insufficient coverage.

## Code review

Do not request GitHub Copilot code reviews for this repository. Reviews are done locally to avoid burning Copilot quota.

Use the local `local-code-review` Codex skill before opening or merging pull requests. The skill is installed at `C:\Users\japeraba\.codex\skills\local-code-review` and includes `scripts\collect_review_context.py` for gathering review context from local git state.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
