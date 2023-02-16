import '../../components/homeSection/imgbox.css'
import { SectionName } from '../../components/homeSection/sectionName';
import { ImgBox } from '../../components/homeSection/imgbox';

export const SectionHome = () => {

  return (
    <div className="text-white z-[2]">
      <div
        className=" wrapper
      container lg:mt-16 xl:mt-20 col-auto max-w-7xl mx-auto px-4 h-[70vh] flex justify-center items-center 
      ">
        <div className="lg:w-[60%] md:w-full z-10">
          <SectionName/>
        </div>
        <div className="w-[40%]">
          <ImgBox/>
        </div>
      </div>
    </div>
  )
}


// before:absolute 2xl:before:h-[600px] 2xl:before:w-[600px] xl:before:h-[400px] xl:before:w-[400px] before:rounded-[50%] before:left-[-12%] before:top-[40%] before:bg-gradient-to-br to-[#ae6211] from-[#dc9d00]
// after:absolute after:h-[200px] after:w-[200px] after:rounded-[50%] after:left-[35%] after:bottom-[3%] after:bg-gradient-to-br