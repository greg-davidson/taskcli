import { Command, flags } from '@oclif/command'
import chalk from 'chalk'
import api from '../data/api'
import messages from '../data/messages'

export default class Add extends Command {
  static description = 'add a task'

  static args = [
    { name: 'description' }
  ]

  async run() {
    const {args} = this.parse(Add)
    const task = args.description

    if (task) {
      api.add(task)
      this.log(messages.getAddMessageSuccess(task))
    } else {
      this.log(messages.getAddMessagesFailure())
    }
  }
}
