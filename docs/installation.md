---
id: installation
title: Installation
---

Sysl is a CLI (Command Line Interface) that executes with the `sysl` command.

## Requirements

- [Golang](https://golang.org/doc/install) version >= 1.13 or above (which can be checked by running `go version`).
- [goimports](https://godoc.org/golang.org/x/tools/cmd/goimports).

---

Here are several approaches to get start using Sysl:

## [(macOS) Install with Homebrew](https://github.com/anz-bank/homebrew-sysl)

If you use a Mac and have [homebrew](https://brew.sh/) installed, you can simply run the following commands in your terminal:

```
brew tap anz-bank/homebrew-sysl
brew install anz-bank/homebrew-sysl/sysl
```

## Install the pre-compiled binary

1. Download the pre-compiled binaries matching your OS from the [releases page](https://github.com/anz-bank/sysl/releases).

2. Uncompress the archive and move the sysl binary to your desired path:

   1. under PATH location or on Windows

      ```
      # check it works
      $ sysl help
      ```

   2. under non-PATH location on non-Windows platform (with the binary in the current directory)

      ```
      # check it works
      $ ./sysl help
      ```


## Go get it

```
# make sure you've installed go in your computer at first
$ go version

# go get it
$ GO111MODULE=on go get -u github.com/anz-bank/sysl/cmd/sysl

# check it works
$ sysl help
```

> Note: Do NOT run it from inside a Go source directory that is module enabled, otherwise it gets added to go.mod/go.sum.


## Running with Docker

You can use Sysl within a [Docker container](https://hub.docker.com/r/anzbank/sysl).

First get the docker image using

```
$ docker pull anzbank/sysl:latest
```

For MacOS and Linux Users

```
$ alias sysl="docker run --rm -it -v $HOME:$HOME -w $(pwd) anzbank/sysl:latest"
$ sysl info
```

Sysl can then be used from the same terminal window subsequently. Alternatively, it can also be added to the `.bashrc` or `.zshrc` file to add the `sysl` command permanently.

```
$ docker run --rm \
  -v $PWD:/go/src/github.com/anz-bank/sysl \
  -w /go/src/github.com/anz-bank/sysl \
  anzbank/sysl:latest validate -v ./demo/examples/Modules/model_with_deps.sysl
```

We have used [this Dockerfile](https://github.com/anz-bank/sysl/blob/master/Dockerfile) to create this image.


## Compiling from source

Here you have two options:

1. If you want to contribute to the project, please follow the steps on our [contributing guide](https://github.com/anz-bank/sysl/blob/master/docs/CONTRIBUTING.md).
2. If just want to build from source for whatever reason, follow the steps bellow:

```
# clone it to create a local copy on your computer
$ git clone https://github.com/anz-bank/sysl.git
$ cd sysl

# get dependencies using go modules (needs go 1.11+)
$ go get ./...

# install
$ go install ./cmd/sysl

# check it works
$ sysl help
```

## VSCode Extension

Sysl has a VSCode extension which provides syntax highlighting for `.sysl` files. Install it [here](https://marketplace.visualstudio.com/items?itemName=ANZ-BANK.vscode-sysl).
