import { SectionHome } from "../../container/homeSection"
import { Navbar } from "../../container/navbar"



export const Home = () => {

  return (
    <div className="h-screen w-screen bg-[#250821] dark:bg-white font-montserrat overflow-x-hidden">
      <div className="relative">
      <Navbar/>
      <SectionHome/>
      </div>
    </div>

    
  )
}
