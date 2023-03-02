import { motion } from 'framer-motion'

import { fadein } from '../../utils/variants'

import { Comingsoon } from "./comingsoon"

export const ProjectCardComingsoon = (props) => {

  const direction = props.fadein

  return (
    <motion.div
      variants={fadein(direction, 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className="group relative overflow-hidden border-2 border-[#bb700f] rounded-xl"
    >
      {/* overlay */}
      <div className="w-full h-full absolute transition-all duration-300"></div>
      {/* img */}

      {/* animation by online tutorial // css Animation Effects | Css Only  */}
      <div className="relative h-[172.39px] sm2:h-[237.19px] sm:h-[358.33px] md:h-[430.44px] 2xl:h-[410px]">
        <Comingsoon />
      </div>

      {/* title */}
      <div className="absolute -bottom-full left-12 text-[#bb700f] 
              group-hover:bottom-10 transition-all duration-700 z-50">
        <h5 className="text-3xl">{props.title}</h5>
      </div>
    </motion.div>
  )
}