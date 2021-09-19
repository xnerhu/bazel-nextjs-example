# Prerequisites

## Install Bazel

Bazel is a build system built by Google.

Follow the instructions on the Bazel site.

- [Windows](https://docs.bazel.build/versions/main/install-windows.html)
- [MacOS](https://docs.bazel.build/versions/main/install-os-x.html)
- [Debian/Ubuntu](https://docs.bazel.build/versions/main/install-ubuntu.html)

## Install Buildifier and Bulldozer

- Buildifier is a bazel formatter.

- Bulldozer is a command line tool for bazel files.

Create `C:\Bazel` folder and add it to the system **PATH**.

Download both [latest version](https://github.com/bazelbuild/buildtools/releases) of buildifier and buildozer to `C:\Bazel` folder.

## Install [Bazel](https://marketplace.visualstudio.com/items?itemName=BazelBuild.vscode-bazel) extension for VS Code.

# Development

Run every command at the root of the project.

## Install dependencies

```
$ yarn
```

## Build all components

```
$ yarn build
```

## Test all components

```
$ yarn test
```

## Start frontend dev server

```
$ yarn dev:ui
```

## Build individual components

```
$ npx bazel build //backend/common:components
```

## Run individual components

```
$ npx bazel run //backend/chat
```

## Watch and run individual components

```
$ npx ibazel run ///backend/api-gateway
```

## Clean bazel cache

```
$ yarn clean
```

## Clean bazel global cache

```
$ npx bazel clean --expunge
```

# Worth to read

- [Concepts](https://docs.bazel.build/versions/main/build-ref.html)
- [Make Variables](https://docs.bazel.build/versions/main/be/make-variables.html)

## Known issues

- Bazel on Windows can't build docker images. See [#1926](https://github.com/bazelbuild/rules_docker/issues/1926). A workaround is to use WSL or to add `manual` to tags property.

- Bazel on Windows isn't sandboxed compared to other platforms, so there may be inconsistencies of behaviours. This can be seen how tests for TypeScript are created. [Example](rules/typescript/index.bzl#L42) also see [#2939](https://github.com/bazelbuild/rules_nodejs/issues/2939).

## Bazel support for protobuffers

- [rules_proto_grpc](https://github.com/rules-proto-grpc/rules_proto_grpc) - Set of Bazel rules for GRPC. Supports many languages including TypeScript. We use it.
- [protoc-gen-ts](https://github.com/thesayyn/protoc-gen-ts) - Maintained by a Bazel contributor. Doesn't work on Windows. See [#86](https://github.com/thesayyn/protoc-gen-ts/issues/86)
- [rules_typescript_proto](https://github.com/Dig-Doug/rules_typescript_proto) - Doesn't work with Bazel >= 4.1.0
