import Typical from 'react-typical'
import './imgbox.css'

export const SectionName = () => {

  return (
    <div className='DescriptionMe'>
      <span
        className=' span
          block relative text-2xl tracking-[5px]
          '>Olá, eu sou</span>
      <h1 className='block xl:text-7xl lg:text-6xl md:text-5xl text-4xl '>
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
      </h1>
      <p className='w-[90%] relative mt-5 tracking-wider text-2xl text-green-500'>Desenvolvedor Front-end</p>
      <div className="btn">
        <button className='text-2xl bg-yellow-700 px-3 py-2 my-10 mx-1 tracking-widest capitalize shadow-md shadow-yellow-900 rounded-sm '>Sobre</button>
      </div>

    </div>
  )
}