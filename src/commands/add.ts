import { Command, flags } from '@oclif/command'
import chalk from 'chalk'
import api from '../data/api'

export default class Add extends Command {
  static description = 'add a task'

  static args = [
    { name: 'description' }
  ]

  tasks = []

  async run() {
    const {args} = this.parse(Add)
    const task = args.description

    if (task) {
      api.add(task)
      this.log(`${chalk.green('[Success]')} has been added to the list`)
    } else {
      this.error(`${chalk.red('please ')}`)
    }
  }
}
