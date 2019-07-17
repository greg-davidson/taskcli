import chalk from 'chalk'

class Messages {
  private error = `${chalk.red('[ERROR]')}`
  private success = `${chalk.green('[SUCCESS]')}`

  /*
   * GENERAL
   */

   getNoIndexError() {
     return `${this.error} please enter index`
   }

   getIndexOutOfBoundsError() {
     return `${this.error} index out of bounds`
   }

  /*
   * ADD MESSAGES
   */

  getAddMessageSuccess(task: string) {
    return `${this.success} "${task}" has been added to the list`
  }

  getAddMessagesFailure() {
    return `${this.error} please provide a task to add`
  }

  /*
   * REMOVE MESSAGES
   */

   getRemoveMessageSuccess(task: string) {
     return `${this.success} "${task}" has been deleted from the list`
   }

   /*
    * DO / UNDO MESSAGES
    */

    getDoMessageSuccess(task: string) {
      return `${this.success} "${task}" completed`
    }

    getUndoMessageSuccess(task: string) {
      return `${this.success} "${task}" uncompleted`
    }

    /*
     * LIST MESSAGES
     */

     getNoTasksInListMessage() {
       return "There are no tasks in your list right now"
     }
     
}

const messages = new Messages
export default messages
