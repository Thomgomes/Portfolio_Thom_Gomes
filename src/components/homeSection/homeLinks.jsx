import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { motion } from 'framer-motion'

import { fadein } from '../../utils/variants'

export const HomeLinks = () => {
  return (
    <div className='flex lg:text-[60px] sm:text-[50px] text-[50px] justify-between w-96 pt-10 px-14'>
      <motion.a 
      variants={fadein('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
      href=""
      className='text-blue-600/80 transition-all ease-linear
      hover:scale-125 hover:text-blue-500
      '
      target="_blank"
      >
        <FaLinkedin />
      </motion.a>
      <motion.a 
      variants={fadein('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
      href="https://github.com/Thomgomes"
      className='text-violet-800/80 transition-all ease-linear
      hover:scale-125 hover:shadow-lg hover:shadow-violet-800/60 hover:rounded-full hover:text-violet-700/80
      '
      target="_blank"
      >
        <FaGithub />
      </motion.a>
    </div>
  )
}