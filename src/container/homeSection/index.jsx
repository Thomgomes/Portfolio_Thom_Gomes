import '../../components/homeSection/imgbox.css'
import { SectionName } from '../../components/homeSection/sectionName';
import { ImgBox } from '../../components/homeSection/imgbox';


export const SectionHome = () => {

  return (
    <div className="text-white z-[2]">
      <div
        className=" wrapper
      container lg:mt-16 xl:mt-20 col-auto max-w-7xl lg:mx-auto md:mx-12 px-4 h-[70vh] flex justify-center items-center 
      ">
        <div className="lg:w-[60%] md:w-full z-10">
          <SectionName />
        </div>
        <div className="w-[40%]">
          <ImgBox />
        </div>
        
      </div>
    </div>
  )
}