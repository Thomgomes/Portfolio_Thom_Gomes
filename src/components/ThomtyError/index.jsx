import ThomtyErro from '../../assets/thomtyError.gif'
import { motion } from 'framer-motion'
import { fadein } from '../../utils/variants'

export const ThomtyError = (props) => {
  return (
    <motion.div
      variants={fadein("", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.1 }}
      className='font-pangolin h-full w-full flex sm:flex-row flex-col-reverse justify-center items-center text-center'>
      {/* img */}
      <img src={ThomtyErro} alt="none" />
      {/* mensagem */}
      <div className='text-2xl'>
        <p>Nenhum resultado foi encontrado por <span className='font-semibold italic'>"{props.search}"</span></p>
        <p>Por favor procure por outro título</p>
        <span>ou</span> <button onClick={props.onClick} className=" py-2 px-2 bg-[#13131F] rounded-3xl border-2 border-[#bb700f] transition-all duration-300
                                          hover:bg-[#8b5207] hover:text-white">retornar</button> <span>à lista completa</span>
        <p className='text-sm text-[#adadad] my-3'>informo que o erro pode ser acentuação</p>
      </div>
    </motion.div>
  )
}