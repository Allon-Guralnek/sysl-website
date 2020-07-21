---
id: gen-diagram
title: Diagram Generation
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::info
We are currently in the process of migrating from PlantUML to Mermaid for our diagram generation. This will remove the external dependency on PlantUML and offer a better user experience. Diagram generation with mermaid is currently supported for integration diagrams and sequence diagrams only. For more details, check out [sysl diagram](cmd-diagram)
:::

---

Sysl lets you generate various diagrams from your specificatinos so that you can visualise your design as it evolves. These capabilities become more and more valuable as your project grows to include multiple services and complex dependencies.

## Integration Diagrams

Integration diagrams shows you which applications which make up your architecture and how they interact with each other.

![Integration diagram](/img/sysl/int-diagram-mermaid.svg)

For more details, refer to [Integration Diagram](cmd-integrations)

## Sequence Diagrams

Sequence diagrams show how a call to an endpoint propagates through your system.

For more details, refer to [Sequence Diagrams](cmd-sd)

![Sequence diagram](/img/sysl/seq-diagram-mermaid.svg)

## Datamodel Diagrams

For details on the command, refer to [Datamodel Diagram](cmd-datamodel)

### Format Arguments

The default diagram only shows the data type that is returned by an endpoint. You can instruct `sysl` to show the arguments to your endpoint in a sequence diagram.

Command:

`sysl sd -o 'call-login-sequence.png' --epfmt '%(epname) %(args)' -s 'MobileApp <- Login' /assets/call.sysl -v call-login-sequence.png`
See <a href={useBaseUrl('img/sysl/args.sysl')} >args.sysl</a> for complete example.

<img alt="Sequence Diagram" src={useBaseUrl('img/sysl/args-Seq.png')} />

A bit more explanation is required regarding `epname` and `args` keywords that are used in `epfmt` command line argument. See section on [Attributes](#epfmt) below.

### Using attributes in appfmt and epfmt

`appfmt` and `epfmt` (app and endpoint format respectively) can be passed to
`sd`, `ints` commands. They control how the application or endpoint name is
rendered as text. There default value is `%(appname)` and `%(epname)`
respectively. These internal attributes are:

    * appname - short name of the application
    * epname - short name of the endpoint
    * eplongname - Long quoted name of the endpoint.
    * controls - controls defined on your endpoint

Complete example:

```
App "Descriptive Long Application name":
  Endpoint-1 "Descriptive Long name for Endpoint 1":
    ...
  Endpoint-2 "Descriptive Long name for Endpoint 2":
    ...
```

Where:

- appname - App
- epname - Endpoint-1 or Endpoint-2
- eplongname - "Descriptive Long name for Endpoint 1" or "Descriptive Long name
  for Endpoint 2"

You can also refer to the attributes that you added by using `[]` or the
Collector syntax.

#### Using user defined attributes in fmt

You can use your attributes in `epfmt` or `appfmt` arguments in the following
ways:

- `%(@attrib_name)` : use `@` to refer to `attrib_name`.
- `%(@attrib_name? yes_stmt | no_stmt)`: use `?` to test for existence of value.
  This is ternary operator, which allows you to to execute `yes_stmt` or
  `no_stmt` depending on the result.
- `%(@attrib_name=='some_value'? yes_stmt | no_stmt)` : compare attrib's value
  to some constant.
- `%(@attrib_name=='some_value'? yes_stmt | @attrib_name=='some_other_value'? | ...)` : nested checks.

Now, `stmt` can be any of the following types:

- plain-text: will be copied as-is to the output
- `<color red>text or %(attrib_name)</color>`: use html like syntax to color the
  output.

Example:

```html
appfmt="%(@status?<color red>%(appname)</color>|%(appname))" epfmt="%(@status?
<color green>%(epname)</color>|%(epname))"
```

See <a href={useBaseUrl('img/sysl/attribs.sysl')} >attribs.sysl</a> for complete example. Notice how
`appfmt` and `epfmt` use `%(@status)`.

<img alt="Sequence Diagram" src={useBaseUrl('img/sysl/attribs-Seq.png')} />




