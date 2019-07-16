import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'

interface Task {
  description: string
  done: boolean
}

const dataFile = path.join(os.homedir(), 'taskcli', 'tasks.json')

class API {
  private tasks: Task[] = []

  constructor() {
    if (fs.existsSync(path.dirname(dataFile))) {
      this.tasks = JSON.parse(fs.readFileSync(dataFile, { encoding: 'utf-8' }))
    }
  }

  private save() {
    if (!fs.existsSync(path.dirname(dataFile))) {
      fs.mkdirSync(path.dirname(dataFile))
    }
    const data = JSON.stringify(this.tasks)
    fs.writeFileSync(dataFile, data, { encoding: 'utf-8' })
  }

  add(desc: string) {
    const task: Task = { description: desc, done: false }
    this.tasks.push(task)
    this.save()
  }

  list() {
    return this.tasks
  }
}

const api = new API
export default api
