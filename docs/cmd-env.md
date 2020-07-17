---
id: cmd-env
title: Environment Variables
sidebar_label: Environment Variables
---

:::caution
WIP, copied from https://sysl.io/docs/commands/env/.

**TODO:**
* Update and polish content.
* Move referenced assets to a permanent directory on GitHub and update links.
:::

---

The `sysl env` command prints out the values of environment variables read by sysl to aid in diagnosing and reproducing reported issues.

## Usage

```bash
usage: sysl env
```

## Output

### SYSL_MODULES

`SYSL_MODULES` is a flag to indicate whether Sysl modules are enabled.

### SYSL_PLANTUML

`SYSL_PLANTUML` is used to configure the address of the PlantUML server used for diagram generation
