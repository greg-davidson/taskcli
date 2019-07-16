import { Command, flags } from '@oclif/command'
import chalk from 'chalk'
import api from '../data/api'

export default class Do extends Command {
  static description = 'complete a task'

  static args = [
    { name: 'index' }
  ]

  async run() {
    const {args} = this.parse(Do)
    const index = args.index

    if (index) {
      api.do(index)
      this.log(`${chalk.green('[Success]')} task completed`)
    } else {
      this.error(`${chalk.red('please enter index')}`)
    }
  }
}
