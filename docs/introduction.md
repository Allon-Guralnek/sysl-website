---
id: introduction
title: Introduction
sidebar_label: Introduction
---

## What is Sysl?

Sysl is a system specification language designed for modelling distributed web applications. A Sysl specification captures the design of your project—or your entire organisation—and becomes a single source of truth.

Sysl supports an ecosystem of tools that generate all kinds of artifacts, including:

* API documentation
* Design diagrams: data, integration and sequence
* SQL scripts: create and migrate databases
* Boilerplate code: client/server REST/gRPC in Go

Sysl saves time, allows you to focus on your core business logic, and guarantees that the design and implementation stay in sync.

## Get started

Check out [Installation](installation.md) for details on the many ways you can  install Sysl. In summary:

* There are Pre-compiled binaries on the [GitHub releases page](https://github.com/anz-bank/sysl/releases).
* Mac: `$ brew install anz-bank/homebrew-sysl/sysl`
* Docker: `$ docker run --rm -it -v $HOME:$HOME -w $(pwd) anzbank/sysl:latest`
* Go: `$ GO111MODULE=on go get -u github.com/anz-bank/sysl/cmd/sysl`
* Source: `$ git clone https://github.com/anz-bank/sysl.git`, then `$ make install`

To write Sysl specifications, you'll want [Visual Studio Code](https://code.visualstudio.com/) with the [Sysl extension](https://marketplace.visualstudio.com/items?itemName=ANZ-BANK.vscode-sysl) for syntax highlighting `.sysl` files.

Once you have `sysl` working, start with the [Tutorial](tutorial.md) to get a feel for what Sysl can do.

Then 
## Primary Users and how would Sysl benefit them
### Developers

### Non-developers
#### Architects
#### Analysts
#### Testers
#### Data Engineers/Scientists
