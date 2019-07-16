import { Command, flags } from '@oclif/command'
import chalk from 'chalk'
import api from '../data/api'

export default class Undo extends Command {
  static description = 'uncomplete a task'

  static args = [
    { name: 'index' }
  ]

  async run() {
    const {args} = this.parse(Undo)
    const index = args.index

    if (index) {
      api.undo(index)
      this.log(`${chalk.green('[Success]')} task uncompleted`)
    } else {
      this.error(`${chalk.red('please enter index')}`)
    }
  }
}
