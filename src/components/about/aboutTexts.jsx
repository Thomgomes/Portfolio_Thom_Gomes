import { motion } from 'framer-motion'

import { fadein } from '../../utils/variants'

export const AboutTexts = (props) => {
  return (
    <motion.div
      variants={fadein('left', 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="flex-1 mx-2 lg:mx-0">
      <h2 className="text-3xl mb-6 tracking-[10%] uppercase">{props.h2}</h2>
      <h3 className="text-2xl mb-6 leading-[46px] font-semibold">{props.h3}</h3>
      <p className="mb-4 text-xl">{props.text}</p>
      <p className="mb-6 text-xl">{props.text2}</p>

    </motion.div>
  )
}