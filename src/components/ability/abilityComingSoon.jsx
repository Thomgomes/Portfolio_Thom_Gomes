import { motion } from 'framer-motion'

import { fadein } from '../../utils/variants'

import comingSoon from '../../assets/comingSoon.png'

export const AbilityComingSoon = () => {
  return (
    <motion.div
      variants={fadein('up', 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className="w-36 h-36 m-auto"
    >
      <div className='relative h-full rounded-md'>
        <img className="h-full" src={comingSoon} alt="Coming Soon!" />
        {/* <a href="https://www.flaticon.com/br/icones-gratis/frase" title="frase ícones">Frase ícones criados por Freepik - Flaticon</a> */}
      </div>
    </motion.div>
  )
}