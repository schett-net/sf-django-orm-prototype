import {fn} from './factory'
import { Project } from './interfaces'
import {spawnChild} from './factory'


const pyListProjects = fn(
  async () => {
    const data = await spawnChild('python', './django_prototype/django_prototype/functions/list.py')
    let projects:Project[] = JSON.parse(data)

    return projects
  },
  {
    name: 'pyListProjects'
  }
)

export default pyListProjects