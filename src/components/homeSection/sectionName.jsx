import Typical from 'react-typical'
import { HomeLinks } from './homeLinks'
import './imgbox.css'

import { motion } from 'framer-motion'

import { fadein } from '../../utils/variants'

export const SectionName = () => {

  return (
    <div className='DescriptionMe md:block flex flex-col items-center justify-center'>
      <motion.span
        variants={fadein('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className=' span
          block relative text-2xl tracking-[5px]
          '>Olá, eu sou</motion.span>
      <motion.h1
        variants={fadein('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className='block xl:text-7xl lg:text-6xl md:text-5xl text-4xl '>
        Thom
        <Typical
          loop={1}
          wrapper='a'
          steps={[
            "ás D'Angelo",
            4500,
            ' Gomes',
          ]}
        />
      </motion.h1>
      <motion.p 
       variants={fadein('right', 0.7)}
       initial='hidden'
       whileInView={'show'}
       viewport={{  once: false, amount: 0.7}}
      className='md:w-[90%] w-[68%] relative mt-5 tracking-[3px] font-bold text-2xl text-green-500 pl-5 md:block flex flex-col items-center justify-center'>Desenvolvedor Front-end</motion.p>
      <HomeLinks />
    </div>
  )
}