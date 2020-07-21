---
id: cmd-datamodel
title: Data Model Diagram
sidebar_label: Data Model Diagram
---


:::info
We are currently in the process of migrating from PlantUML to Mermaid for our diagram generation. This will remove the external dependency on PlantUML and offer a better user experience. Diagram generation with mermaid is currently supported for integration diagrams and sequence diagrams only. For more details, check out [sysl diagram](cmd-diagram)
:::
---


`sysl datamodel` lets you generate datamodel diagrams for types defined in Sysl.

## Usage

```
usage: sysl datamodel [<flags>] <MODULE>
```

## Optional Flags

All flags are all optional.

Optional flags:

- `--class_format="%(classname)"`
- ` Specify the format string for data diagram participants. May include %%(appname) and %%(@foo) for attribute foo (default: %(classname))
- `-t, --title=TITLE` Diagram title
- `-p, --plantuml=PLANTUML` base url of PlantUML server (default: SYSL_PLANTUML or http://localhost:8080/plantuml see http://plantuml.com/server.html#install for more info)
- `-o, --output="%(epname).png"` Output file (default: %(epname).png)
- `-j, --project=PROJECT` Project pseudo-app to render
- `-d, --direct` Process data model directly without project manner
- `-f, --filter=FILTER` Only generate diagrams whose names match a pattern

[More common optional flags](common-flags)

## Arguments

Args:

- `<MODULE>` Input sysl file that contains the system specifications. e.g `simple.sysl`. The `.sysl` file type is optional.
