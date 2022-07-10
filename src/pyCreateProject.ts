import {fn} from './factory'
import { Project } from './interfaces'
import { spawnChild } from './factory'


const pyCreateProject = fn(
  async (args: string) => {
    const data = await spawnChild('python', './django_prototype/django_prototype/functions/create.py', [args])
    let project: Project = JSON.parse(data)
    return project
  },
  {
    name: 'pyCreateProject'
  }
)

export default pyCreateProject