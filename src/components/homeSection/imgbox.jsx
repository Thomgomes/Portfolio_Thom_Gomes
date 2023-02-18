import thomGif from '../../../public/TGAvatar.gif'
import './imgbox.css'

import { motion } from 'framer-motion'

import { fadein } from '../../utils/variants'

export const ImgBox = () => {
  return (
    <motion.div
      variants={fadein('left', 0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}
      className='imgbox relative 2xl:w-full 2xl:h-full 2xl:block xl:w-[70%] xl:block lg:w-[60%] md:block hidden'>
      <img className='relative h-full w-[calc(130% - 80px)] top-[-60px] left-[50px] rounded-full border-t-[4px] border-b-[7px] border-x-4 border-[#c77f0b80] shadow-2xl shadow-[#c77f0b80]' src={thomGif} alt="Thom_Avatar.gif" />
    </motion.div>
  )
}