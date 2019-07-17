import { Command, flags } from '@oclif/command'
import chalk from 'chalk'
import api from '../data/api'
import messages from '../data/messages'

export default class Remove extends Command {
  static description = 'remove a task'

  static args = [
    { name: 'index' }
  ]

  async run() {
    const {args} = this.parse(Remove)
    const index = args.index

    if (index) {
      const taskDescription = api.remove(index)
      if (taskDescription) {
        this.log(messages.getRemoveMessageSuccess(taskDescription))
      } else {
        this.log(messages.getIndexOutOfBoundsError())
      }
    } else {
      this.error(messages.getNoIndexError())
    }
  }
}
