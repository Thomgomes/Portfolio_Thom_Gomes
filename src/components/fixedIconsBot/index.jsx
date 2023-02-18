import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from 'react-icons/bs'
import { Link } from 'react-scroll'

export const FixedNavIcons = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] items-center to=''r mx-auto px-5 flex justify-between text-2xl text-white/50">
          <Link 
          to='home' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '>
            <BiHomeAlt />
          </Link>
          <Link 
          to='about' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '>
            <BiUser />
          </Link>
          <Link 
          to='services' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '>
            <BsClipboardData />
          </Link>
          <Link 
          to='work' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '>
            <BsBriefcase />
          </Link>
          <Link 
          to='contact' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '>
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  )
}