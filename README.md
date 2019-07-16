TaskCLI
=======

a lightweight command-line to-do list app

<!-- [![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io) -->
<!-- [![Version](https://img.shields.io/npm/v/taskcli.svg)](https://npmjs.org/package/taskcli) -->
<!-- ![Downloads/week](https://img.shields.io/npm/dw/taskcli.svg)](https://npmjs.org/package/taskcli) -->
<!-- [![License](https://img.shields.io/npm/l/taskcli.svg)](https://github.com/gddavidson99/taskcli/blob/master/package.json) -->

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
* [`taskcli add [NEW TASK]`](#taskcli-add-command)
* [`taskcli remove [INDEX]`](#taskcli-remove-command)
* [`taskcli do [INDEX]`](#taskcli-do-command)
* [`taskcli undo [INDEX]`](#taskcli-undo-command)
* [`taskcli list`](#taskcli-undo-command)

## `taskcli add [NEW TASK]`

add a task

```
USAGE
  $ taskcli add [NEW TASK]

EXAMPLE
  $ taskcli add "Learn to code"
```

_See code: [src/commands/hello.ts](https://github.com/gddavidson99/taskcli/blob/v0.0.0/src/commands/add.ts)_

## `taskcli do [INDEX]`

complete a task

```
USAGE
  $ taskcli do [INDEX]

EXAMPLE
  $ taskcli do 0
```

_See code: [src/commands/hello.ts](https://github.com/gddavidson99/taskcli/blob/v0.0.0/src/commands/do.ts)_

## `taskcli undo [INDEX]`

uncomplete a task

```
USAGE
  $ taskcli undo [INDEX]

EXAMPLE
  $ taskcli undo 0
```

_See code: [src/commands/hello.ts](https://github.com/gddavidson99/taskcli/blob/v0.0.0/src/commands/undo.ts)_

## `taskcli remove [INDEX]`

remove a task

```
USAGE
  $ taskcli remove [INDEX]

EXAMPLE
  $ taskcli remove 0
```

_See code: [src/commands/hello.ts](https://github.com/gddavidson99/taskcli/blob/v0.0.0/src/commands/undo.ts)_

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
