import chalk from 'chalk'

class Messages {
  private error = `${chalk.red('[ERROR]')}`
  private success = `${chalk.green('[SUCCESS]')}`

  /*
   * GENERAL
   */

   getNoIndexError() {
     return `\n${this.error} please enter index\n`
   }

   getIndexOutOfBoundsError() {
     return `\n${this.error} index out of bounds\n`
   }

  /*
   * ADD MESSAGES
   */

  getAddMessageSuccess(task: string) {
    return `\n${this.success} "${task}" has been added to the list\n`
  }

  getAddMessagesFailure() {
    return `\n${this.error} please provide a task to add\n`
  }

  /*
   * REMOVE MESSAGES
   */

   getRemoveMessageSuccess(task: string) {
     return `\n${this.success} "${task}" has been deleted from the list\n`
   }

   /*
    * DO / UNDO MESSAGES
    */

    getDoMessageSuccess(task: string) {
      return `\n${this.success} "${task}" completed\n`
    }

    getUndoMessageSuccess(task: string) {
      return `\n${this.success} "${task}" uncompleted\n`
    }

    /*
     * LIST MESSAGES
     */

     getNoTasksInListMessage() {
       return "\nThere are no tasks in your list right now\n"
     }

}

const messages = new Messages
export default messages
