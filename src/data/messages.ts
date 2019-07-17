import chalk from 'chalk'

class Messages {

  getAddMessageSuccess(task: string) {
    return `${chalk.green('[Success]')} "${task}" has been added to the list`
  }

  getAddMessagesFailure(task: string) {
    return `${chalk.red('[Error]')} please provide a task to add`
  }

}

const messages = new Messages
export default messages
