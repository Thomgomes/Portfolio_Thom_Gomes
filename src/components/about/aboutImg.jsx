import Thom from '../../assets/thom.png'

import { motion } from 'framer-motion'

import { fadein } from '../../utils/variants'

export const AboutImg = () => {
  return (
    //img in css
      <motion.div
        variants={fadein('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className='flex-1 h-[45vh] max-w-[30rem] border-red-500 hidden md:block'>
        
        <img className='h-full bg-no-repeat bg-contain rounded-3xl' src={Thom} alt="Thomás D'Angelo de Almeida Gomes"/>
      </motion.div>
  )
}