---
id: cmd-validate
title: Validate
sidebar_label: Validate
---

:::caution
WIP, copied from https://sysl.io/docs/commands/validate/.

**TODO:**
* Update and polish content.
* Move referenced assets to a permanent directory on GitHub and update links.
:::

---

The `sysl validate` command is used to verify that sysl files are valid.

## Usage

```bash
usage: sysl validate [<flags>] <MODULE>
```

## Required Flags

## Optional Flags

Optional flags:

- `--help` Show context-sensitive help (also try --help-long and --help-man).
- `--version` Show application version.
- `--log="warn"` log level: [info,warn,trace,off,debug]
- `-v, --verbose` enable verbose logging
- `--root=ROOT` sysl root directory for input model file. If root is not found, the module directory becomes the
  root, but the module can not import with absolute paths (or imports must be relative).

## Arguments

Args:

- `<MODULE>` Input sysl file that contains the system specifications. e.g `simple.sysl`. The `.sysl` file type is optional.
