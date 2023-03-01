import { motion } from 'framer-motion'

import { fadein } from '../../utils/variants'

export const AbilityTitle = (props) => {
  return (
    <motion.div
      variants={fadein('up', 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="sm:pt-0 sm2:pt-60 pt-80 sm3:pt-[500px] text-5xl font-semibold mb-6 tracking-[10%] md:mx-0 mx-3 pb-20">{props.title}</h2>
    </motion.div>
  )
}