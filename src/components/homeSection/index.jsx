import thomGif from '../../../public/TGAvatar.gif'
import Typed from "typed.js";
import './imgbox.css'

export const SectionHome = () => {

  return (
    <section className="text-white">
      <div 
      className=" wrapper
      container lg:mt-16 xl:mt-20 col-auto max-w-7xl mx-auto px-4 h-[70vh] flex justify-center items-center 
      before:absolute 2xl:before:h-[600px] 2xl:before:w-[600px] xl:before:h-[400px] xl:before:w-[400px] before:rounded-[50%] before:left-[-12%] before:top-[40%] before:bg-gradient-to-br to-black from-white
      after:absolute after:h-[200px] after:w-[200px] after:rounded-[50%] after:left-[35%] after:bottom-[3%] after:bg-gradient-to-br
      ">
        <div className="w-1/2 z-10">
          <span
            className=' span
          block relative text-2xl tracking-[5px] text-green-500
          after:absolute after:h-1 after:w-[45px] after:bottom-[10px] after:text-red-300
          '>Olá, eu sou</span>
          <h1 className='block text-8xl'>Thom<span className='multiText capitalize'>ás D'Angelo</span></h1>
          <p className='w-[90%] relative'>Desenvolvedor Front-end</p>
          <div className="btn">
            <button className='text-2xl bg-yellow-700 px-3 py-2 my-10 mx-1 tracking-widest capitalize shadow-md shadow-yellow-900 rounded-sm '>Sobre</button>
          </div>
        </div>
        <div className="w-1/2">
          <div className='imgbox relative 2xl:w-full 2xl:h-full xl:w-[70%] lg:w-[60%]'>
            <img className='relative h-full w-[calc(130% - 80px)] top-[-60px] left-[50px] rounded-full border-y-[10px] border-x-4' src={thomGif} alt="Thom_Avatar.gif" />
          </div>
        </div>
      </div>
    </section>
  )
}
