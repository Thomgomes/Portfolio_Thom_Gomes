import { motion } from 'framer-motion'

import { fadein } from '../../utils/variants'

import { WorkLink } from "./linkWorks"

export const ProjectTitle = () => {
  return (
    <motion.div
      variants={fadein('', 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className="text-center">
      <h2 className="leading-tight text-5xl font-semibold mb-6 tracking-[10%] md:mx-0 mx-3">
        Projetos em <br />
        Destaque
      </h2>

      <WorkLink id="/projects" />
    </motion.div>
  )
}