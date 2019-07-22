import { Command, flags } from '@oclif/command'
import chalk from 'chalk'
import api from '../data/api'
import messages from '../data/messages'

export default class List extends Command {
  static description = 'list all tasks'

  private const INITIAL_INDENTATION = 2

  printTask(task: Task, index: number, indentation: number) {
    if (task != null) {
      let spaces = ""
      for (let i = 0; i < indentation; i++) {
        spaces += " "
      }
      const message = index + " |" + spaces + task.description
      task.done ? this.log(`${chalk.dim(message)}`) : this.log(message)
      for (let i = 0; i < task.children.length; i++) {
        this.printTask(task.children[i], i, indentation + this.INITIAL_INDENTATION)
      }
    }
  }

  async run() {
    const tasks = api.list()

    this.log("")
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i]
      this.printTask(task, i, this.INITIAL_INDENTATION)
    }
    this.log("")

    if (tasks.length == 0) {
      this.log(messages.getNoTasksInListMessage())
    }
  }
}
