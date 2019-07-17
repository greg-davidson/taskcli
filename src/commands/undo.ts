import { Command, flags } from '@oclif/command'
import chalk from 'chalk'
import api from '../data/api'
import messages from '../data/messages'

export default class Undo extends Command {
  static description = 'uncomplete a task'

  static args = [
    { name: 'index' }
  ]

  async run() {
    const {args} = this.parse(Undo)
    const index = args.index

    if (index) {
      const taskDescription = api.undo(index)
      this.log(messages.getUndoMessageSuccess(taskDescription))
    } else {
      this.error(messages.getNoIndexError())
    }
  }
}
