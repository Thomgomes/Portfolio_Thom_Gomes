import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { Link } from "react-router-dom"

import { motion } from 'framer-motion'

import { fadein } from '../../utils/variants'

export const SocialMedias = () => {
  return (
    <div className='container flex flex-col text-center items-center justify-center w-full -mt-16 xl:-mt-24 2xl:-mt-56 py-8 lg:py-24 mb-28 lg:mb-20'>
      <h3 className='text-3xl mb-10'>Ou</h3>
      <div className='w-full h-auto max-w-[460px] items-center mx-auto px-5 text-2xl'>
        <ul className="flex justify-center gap-6 sm:gap-12 w-full lg:text-[60px] sm:text-[50px] text-[50px]  px-14">
          <motion.li
            variants={fadein('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once:false, amount: 0.7 }}
          >
            <Link
              className="
              text-fuchsia-900/80 transition-all ease-linear
              hover:text-fuchsia-800
              "
              to="https://www.instagram.com/thom_gomes/"
              target="_blank">
              <BsInstagram />
            </Link>
          </motion.li>

          <motion.li
            variants={fadein('', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once:false, amount: 0.7 }}
          >
            <Link
              className="
              text-blue-600/80 transition-all ease-linear
              hover:text-blue-500
              "
              to="https://www.linkedin.com/in/thom%C3%A1s-gomes-796b8152/"
              target="_blank">
              <BsLinkedin />
            </Link>
          </motion.li>

          <motion.li
            variants={fadein('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once:false, amount: 0.7 }}
          >
            <Link
              className="
             text-violet-800/80 transition-all ease-linear
             hover:text-violet-700
               "
              to="https://github.com/Thomgomes"
              target="_blank">
              <BsGithub />
            </Link>
          </motion.li>

          {/* <motion.li
            variants={fadein('', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once:false, amount: 0.7 }}
          >
            <Link
              className="
              text-green-600/80 transition-all ease-linear
              hover:text-green-500
              "
              to="*"
              target="_blank">
              <BsWhatsapp />
            </Link>
          </motion.li> */}
        </ul>



      </div>
    </div>
  )
}