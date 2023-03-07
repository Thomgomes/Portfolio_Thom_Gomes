import { motion } from 'framer-motion'
import { fadein } from '../../../utils/variants'

import { ProjectCardComingsoon } from '../../../components/projects/ProjectCardComingsoon'


export const FavoriteProjects = () => {
  return (
    <div>
      <div className='max-w-2xl '>
        <ProjectCardComingsoon
          fadein='left'
          title="Em breve mais projetos"

        />
      </div>
    </div>
  )
}