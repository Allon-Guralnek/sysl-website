---
id: cmd-diagram
title: Mermaid Diagram (beta)
sidebar_label: Mermaid Diagram (beta)
---


:::info
We are currently in the process of migrating from PlantUML to Mermaid for our diagram generation. This will remove the external dependency on PlantUML and offer a better user experience. Diagram generation with mermaid is currently supported for integration diagrams and sequence diagrams only. For more details, check out [sysl diagram](cmd-diagram)
:::

:::info
This command requires the SYSL_PLANTUML environment variable to be set or passed in as a flag. Follow the instructions [here](plantuml.md) for more details
:::
---

## Summary

`sysl diagram` lets you generate sequence or integration diagrams from your specification files using MermaidJS.

## Usage

```bash
sysl diagram [<flags>] <MODULE>
```

## Optional Flags

- `-i, --integrationdiagram=INTEGRATIONDIAGRAM`  Generate an integration diagram (Specify the application name)
- `-s, --sequencediagram=SEQUENCEDIAGRAM`  Generate a sequence diagram (Specify 'appname->endpoint')
- `-e, --endpointanalysis`  Generate an integration diagram with its endpoints (Specify 'true')
- `-d, --datadiagram`       Generate a Data model diagram (Specify 'true')
- `-a, --app=APP`               Optional flag to specify specific application
- `-e, --endpoint=ENDPOINT`     Optional flag to specify endpoint
- `-o, --output="diagram.svg"`  Output file (Default: diagram.svg)

[More common optional flags](common-flags)

## Sequence Diagram

```bash
sysl diagram -s grocerystore.sysl --app GroceryStore --endpoint "POST /checkout"
```

```sysl title="Input Sysl file: GroceryStore.sysl"
GroceryStore:
    /checkout:
        POST?payment_info=string: 
            Payment <- POST /validate
            Payment <- POST /pay
            | Checks out the specified cart
            return ok <: string

Payment:
    /validate:
        POST?payment_info=string:
            | Validates payment information
            return 200 <: string

    /pay:
        POST:
            | Processes a payment
            return ok <: string

```

![Sequence diagram](/img/sysl/seq-diagram-mermaid.svg)

## Integration Diagram

```sysl title="Input Sysl file: GroceryStore.sysl"
GroceryStore:
    /checkout:
        POST?payment_info=string: 
            Payment <- POST /validate
            Payment <- POST /pay
            | Checks out the specified cart
            return ok <: string

Payment:
    /validate:
        POST?payment_info=string:
            | Validates payment information
            return 200 <: string

    /pay:
        POST:
            | Processes a payment
            return ok <: string

```

```bash
sysl diagram -i grocerystore.sysl --app GroceryStore
```

![Integration diagram](/img/sysl/int-diagram-mermaid.svg)
