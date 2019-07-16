import { Command, flags } from '@oclif/command'
import chalk from 'chalk'
import api from '../data/api'
const Table = require('cli-table')

export default class List extends Command {
  static description = 'list all tasks'

  async run() {
    const table = new Table({
      head: [
        chalk.blueBright('index'),
        chalk.blueBright('todo'),
        chalk.blueBright('status')
      ]
    })

    const tasks = api.list()

    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i]
      const status = task.done ? chalk.green('complete') : chalk.red('incomplete')
      table.push([ i, task.description, status ])
    }

    if (tasks.length == 0) {
      this.log("There are no tasks in your list right now.")
    } else {
      this.log(table.toString())
    }
  }
}
