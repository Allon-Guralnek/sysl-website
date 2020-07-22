---
id: gen-diagram
title: Diagram Generation
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::info
We are currently in the process of migrating from PlantUML to Mermaid for our diagram generation. This will remove the external dependency on PlantUML and offer a better user experience. Diagram generation with mermaid is currently supported for integration diagrams and sequence diagrams only. For more details, check out [sysl diagram](cmd-diagram)
:::

---

Sysl lets you generate various diagrams from your specifications so that you can visualise your design as it evolves. These capabilities become more and more valuable as your project grows to include multiple services and complex dependencies.

## Integration Diagrams

Integration diagrams shows you which applications which make up your architecture and how they interact with each other.

![Integration diagram](/img/sysl/int-diagram-mermaid.svg)

For more details, refer to [Integration Diagram](cmd-integrations)

## Sequence Diagrams

Sequence diagrams show how a call to an endpoint propagates through your system.

For more details, refer to [Sequence Diagram](cmd-sd)

![Sequence diagram](/img/sysl/seq-diagram-mermaid.svg)

## Data Model Diagrams

Data Model Diagrams show the relationship between your data types.

![Data Model diagram](/img/sysl/data-diagram-mermaid.svg)

For details on the command, refer to [Datamodel Diagram](cmd-datamodel)
