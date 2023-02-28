import { AiOutlineHtml5, AiFillGithub } from 'react-icons/ai'
import { DiCss3Full } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { BsBootstrapFill } from 'react-icons/bs'
import { SiTailwindcss, SiBulma, SiJss, SiMongodb, SiPostgresql } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'

export const AbilityCards = (props) => {
  return (
    <div key={props.key} id={props.id} className="w-36 h-36 bg-black/60 backdrop-blur-2xl m-auto">
      <div className='relative h-full rounded-md border-4 border-[#c77f0b38]'>
        <span className='absolute left-[14%] text-[100px] text-red-400'>
          {props.icon}
        </span>
        <div className='h-full flex text-center justify-center items-end'>
          <p className='tracking-wide'>{props.iconName}</p>
        </div>
      </div>
    </div>
  )
}