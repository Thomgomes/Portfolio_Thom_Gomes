import { motion } from 'framer-motion'

import { fadein } from '../../utils/variants'

export const AboutImg = () => {
  return (
    //img in css
    <motion.div
      variants={fadein('right', 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="flex-1 bg-about bg-contain bg-no-repeat h-[70vh] mix-blend-lighten bg-top ">
    </motion.div>
  )
}