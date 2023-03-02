import { motion } from 'framer-motion'

import { fadein } from '../../utils/variants'

export const AbilityCards = (props) => {
  return (
    <motion.div
      variants={fadein('up', 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      id={props.id}
      className="w-36 h-36 backdrop-blur-2xl m-auto"
    >
      <div className='relative h-full bg-[#13131F] rounded-xl border-4 border-[#dc9e00] transition-all duration-200 ease-linear
                      hover:scale-110 hover:rounded-2xl
      '>
        <span className='absolute top-2 left-[14%] text-[100px] text-[#bb700f]'>
          <props.icon />
        </span>
        <div className='h-full flex text-center justify-center items-end text-[#dc9e00c4]'>
          <p className='tracking-wide'>{props.iconName}</p>
        </div>
      </div>
    </motion.div>
  )
}