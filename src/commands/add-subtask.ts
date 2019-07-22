import { Command, flags } from '@oclif/command'
import chalk from 'chalk'
import api from '../data/api'
import messages from '../data/messages'

export default class AddSubtask extends Command {
  static description = 'add a task'

  static args = [
    { name: 'description' },
    { name: 'index' }
  ]

  async run() {
    const {args} = this.parse(AddSubtask)
    const task = args.description
    const index = args.index

    if (task) {
      api.addSubtask(task, index)
      this.log(messages.getAddMessageSuccess(task))
    } else {
      this.log(messages.getAddMessagesFailure())
    }
  }
}
