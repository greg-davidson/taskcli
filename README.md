taskcli
=======

a lightweight command-line to-do list system

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/taskcli.svg)](https://npmjs.org/package/taskcli)
[![Downloads/week](https://img.shields.io/npm/dw/taskcli.svg)](https://npmjs.org/package/taskcli)
[![License](https://img.shields.io/npm/l/taskcli.svg)](https://github.com/gddavidson99/taskcli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g taskcli
$ taskcli COMMAND
running command...
$ taskcli (-v|--version|version)
taskcli/0.0.0 darwin-x64 node-v8.11.4
$ taskcli --help [COMMAND]
USAGE
  $ taskcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`taskcli hello [FILE]`](#taskcli-hello-file)
* [`taskcli help [COMMAND]`](#taskcli-help-command)

## `taskcli hello [FILE]`

describe the command here

```
USAGE
  $ taskcli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ taskcli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/gddavidson99/taskcli/blob/v0.0.0/src/commands/hello.ts)_

## `taskcli help [COMMAND]`

display help for taskcli

```
USAGE
  $ taskcli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_
<!-- commandsstop -->
