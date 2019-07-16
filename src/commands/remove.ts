import { Command, flags } from '@oclif/command'
import chalk from 'chalk'
import api from '../data/api'

export default class Remove extends Command {
  static description = 'remove a task'

  static args = [
    { name: 'index' }
  ]

  async run() {
    const {args} = this.parse(Remove)
    const index = args.index

    if (index) {
      if (api.remove(index)) {
        this.log(`${chalk.green('[Success]')} has been deleted from the list`)
      } else {
        this.error(`${chalk.red('index out of bounds')}`)
      }
    } else {
      this.error(`${chalk.red('please enter index')}`)
    }
  }
}
