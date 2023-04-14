import { FaGithub, FaLinkedin, FaBehanceSquare } from 'react-icons/fa'

import { motion } from 'framer-motion'

import { fadein } from '../../utils/variants'
import { Link } from 'react-router-dom'

export const HomeLinks = () => {
  return (
    <div className=''>
      <ul className='flex lg:text-[60px] sm:text-[50px] text-[50px] justify-between w-96 pt-10 px-14'>
        <motion.li
          variants={fadein('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
        >
          <Link
            to="https://www.linkedin.com/in/thom%C3%A1s-gomes-796b8152/"
            className='text-blue-600/80 transition-all ease-linear
                       hover:text-blue-500
                      '
            target="_blank"
          >
            <FaLinkedin />
          </Link>
        </motion.li>

        <motion.li
          variants={fadein('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
        >
          <Link
            to="https://www.behance.net/thomsdangelo"
            className='text-blue-600/80 transition-all ease-linear
                       hover:text-blue-600
                      '
            target="_blank"
          >
            <FaBehanceSquare/>
          </Link>
        </motion.li>

        <motion.li
          variants={fadein('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
        >
          <Link
            to="https://github.com/Thomgomes"
            className='text-violet-800/80 transition-all ease-linear
                       hover:text-violet-700
                      '
            target="_blank"
          >
            <FaGithub />
          </Link>
        </motion.li>

      </ul>


    </div>
  )
}