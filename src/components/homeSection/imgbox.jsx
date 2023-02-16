import thomGif from '../../../public/TGAvatar.gif'
import './imgbox.css'

export const ImgBox = () => {
  return (
    <div className='imgbox relative 2xl:w-full 2xl:h-full 2xl:block xl:w-[70%] xl:block lg:w-[60%] md:block hidden'>
      <img className='relative h-full w-[calc(130% - 80px)] top-[-60px] left-[50px] rounded-full border-t-[4px] border-b-[7px] border-x-4 border-[#c77f0b80] shadow-2xl shadow-[#c77f0b80]' src={thomGif} alt="Thom_Avatar.gif" />
    </div>
  )
}