import { Command, flags } from '@oclif/command'
import chalk from 'chalk'
import api from '../data/api'
import messages from '../data/messages'

export default class Do extends Command {
  static description = 'complete a task'

  static args = [
    { name: 'index' }
  ]

  async run() {
    const {args} = this.parse(Do)
    const index = args.index

    if (index) {
      const taskDescription = api.do(index)
      this.log(messages.getDoMessageSuccess(taskDescription))
    } else {
      this.log(messages.getNoIndexError())
    }
  }
}
