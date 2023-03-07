import { motion } from 'framer-motion'

import { fadein } from '../../utils/variants'

import { BsDisplay, BsGithub } from 'react-icons/bs'

import { BtnGithub } from './btn/btnGithub'
import { BtnViewProject } from './btn/btnViewProject'

export const ImgProjectCard = (props) => {

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
      <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
      {/* img */}
      <img
        className="group-hover:scale-125 transition-all duration-500"
        src={props.img}
        alt="" />

        <BtnGithub 
        link={props.github}
        />
        <BtnViewProject 
        link={props.view}
        />
    </motion.div>
  )
}