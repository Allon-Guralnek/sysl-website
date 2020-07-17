---
id: cmd-protobuf
title: Protobuf
sidebar_label: Protobuf
---

:::caution
WIP, copied from https://sysl.io/docs/commands/protobuf/.

**TODO:**
* Update and polish content.
* Move referenced assets to a permanent directory on GitHub and update links.
:::

---


The `sysl protobuf` command is used to generate a proto representation of the Sysl file.
Two format types are supported:

| Flag      | Description                                              |
| --------- | -------------------------------------------------------- |
| json      | JSON Protocol Buffer files of the Sysl definitions         |
| textpb    | Text based Protocol Buffer files of the Sysl definitions   |

Protocol buffers is a "language-neutral, platform-neutral, extensible mechanism for serializing structured data – think XML, but smaller, faster, and simpler". It is a strongly typed binary format used as intermediate representations of Sysl definitions comparable to an abstract syntax tree. The strongly typed protocol buffers are supported in most major programming languages.

For the following contents of `hello.sysl`

```
HelloWorld:
    !type Message:
        text <: string
```

the command

    sysl textpb hello.sysl --out hello.textpb

generates a `hello.textpb` file. Its contents are

```
apps {
  key: "HelloWorld"
  value {
    name {
      part: "HelloWorld"
    }
    types {
      key: "Message"
      value {
        tuple {
          attr_defs {
            key: "text"
            value {
              primitive: STRING
              source_context {
                start {
                  line: 4
                }
              }
            }
          }
        }
      }
    }
  }
}

## Usage

```bash
usage: sysl protobuf [<flags>] <MODULE>
```

## Optional Flags

Optional flags:

- `--help` Show context-sensitive help (also try --help-long and --help-man).
- `--version` Show application version.
- `--log="warn"` log level: [info,warn,trace,off,debug]
- `-v, --verbose` enable verbose logging
- `--root=ROOT` sysl root directory for input model file. If root is not found, the module directory becomes the
- `` root, but the module can not import with absolute paths (or imports must be relative).
- `-o, --output="-"` output file name
- `--mode=textpb` output mode: [textpb,json]

## Arguments

Args:

- `<MODULE>` Input sysl file that contains the system specifications. e.g `simple.sysl`. The `.sysl` file type is optional.
