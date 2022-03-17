todo-cli
========

manage your todos in cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todo-cli.svg)](https://npmjs.org/package/todo-cli)
[![Downloads/week](https://img.shields.io/npm/dw/todo-cli.svg)](https://npmjs.org/package/todo-cli)
[![License](https://img.shields.io/npm/l/todo-cli.svg)](https://github.com/warlock1996/todo-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g todo-arslan
$ todo COMMAND
running command...
$ todo (-v|--version|version)
todo-arslan/0.1.6 win32-x64 node-v14.17.5
$ todo --help [COMMAND]
USAGE
  $ todo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todo add TODO`](#todo-add-todo)
* [`todo help [COMMAND]`](#todo-help-command)
* [`todo list`](#todo-list)
* [`todo mark`](#todo-mark)
* [`todo remove [ID]`](#todo-remove-id)

## `todo add TODO`

add more todos

```
USAGE
  $ todo add TODO

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/add.ts](https://github.com/warlock1996/todo-cli/blob/v0.1.6/src/commands/add.ts)_

## `todo help [COMMAND]`

display help for todo

```
USAGE
  $ todo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

## `todo list`

list your todos

```
USAGE
  $ todo list

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/list.ts](https://github.com/warlock1996/todo-cli/blob/v0.1.6/src/commands/list.ts)_

## `todo mark`

Toggle todo status

```
USAGE
  $ todo mark

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/mark.ts](https://github.com/warlock1996/todo-cli/blob/v0.1.6/src/commands/mark.ts)_

## `todo remove [ID]`

remove todo

```
USAGE
  $ todo remove [ID]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/remove.ts](https://github.com/warlock1996/todo-cli/blob/v0.1.6/src/commands/remove.ts)_
<!-- commandsstop -->
