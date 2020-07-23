---
id: gen-code
title: Code Generation
keywords:
  - code
  - go
  - grpc
  - rest
  - generation
---

:::caution
WIP

Resources:

- https://github.com/anz-bank/sysl-go
- https://github.com/anz-bank/protoc-gen-sysl
- https://github.com/anz-bank/sysl-template

**TODO:**

- Update and polish content.
- Move referenced assets to a permanent directory on GitHub and update links.

:::

---

## Summary

Sysl can generate server and client code. Currently, Go is the only language supported, but we have several on the roadmap including (Swift, JavaScript, Java, Kotlin). If you have a language you'd like to see supported, please [raise an issue](https://github.com/anz-bank/sysl/issues/new?labels=enhancement&template=feature_request.md), so we can better prioritise it.

For details on the command, refer to [code-generation](/docs/cmd-codegen)

## RESTful server
Sysl can generate a RESTful service based on the sysl file. It requires the transform sysl file to generate service, router, interface and hander etc. Only requires custom code to implement the service interface to construct the full functional API server. The generated code will take care of the loging, middleware and error handling etc. The custom code only need to care about the business logic. 

### How to
With an input sysl file, user can use the following command to generate the service
``` bash
sysl codegen --root-transform github.com/anz-bank/sysl-go/codegen@v0.52.0 --transform [transformSyslFile] --grammar [grammarFile] --start goFile --outdir [outputDirectory] --app-name [ApplicationName] --basepath [basePath] [inputSyslFile]
```
Just replace the arguments in `[]` to generate different files
For restful service, the available tranformations are:
- `svc_app.sysl`
- `svc_types.sysl`
- `svc_interface.sysl`
- `svc_handler.sysl`
- `svc_router.sysl`
- `svc_client.sysl`
- `svc_error_types.sysl`

For detailed input file, refer to [simple.sysl](https://github.com/anz-bank/sysl-go/blob/master/codegen/testdata/simple/simple.sysl), generated code can be found in [here](https://github.com/anz-bank/sysl-go/tree/master/codegen/tests/simple)

## gRPC server

gRPC services is also supported. In addtion to the RESTful services, sysl also got the grpc transforms to generate the gRPC services.

The available gRPC transforms are:
- `svc_grpc.sysl`
- `grpc_handler.sysl`
- `grpc_interface.sysl`

### Examples

#### Simple gRPC server
A simple gRPC server specification in sysl and Protobuf format. Usually the .proto would be generated from the .sysl but at the time of writing that transformation was not available.

The .proto is used to generate the necessary Go code (via protoc) to bind the gRPC protocol to Go. The `.sysl` file is used to generate the necessary Go code that binds the protoc-generated Go code to sysl-go.

For detailed input files, refer to [simplegrpc](https://github.com/anz-bank/sysl-go/blob/master/codegen/testdata/simplegrpc), generated code can be found in [simplegrpc](https://github.com/anz-bank/sysl-go/tree/master/codegen/tests/simplegrpc)

#### Multiple gRPC services within a single server
The specification is in SySL and Protobuf format. Usually the .proto would be generated from the .sysl but at the time of writing that transformation was not available.

The .proto is used to generate the necessary Go code (via protoc) to bind the gRPC protocol to Go. The .sysl file is used to generate the necessary Go code that binds the protoc-generated Go code to sysl-go.

For detailed input files, refer to [simplegrpc](https://github.com/anz-bank/sysl-go/blob/master/codegen/testdata/multigrpc), generated code can be found in [simplegrpc](https://github.com/anz-bank/sysl-go/tree/master/codegen/tests/multigrpc)
