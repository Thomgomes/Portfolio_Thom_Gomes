import { SectionHome } from "../../components/homeSection"
import { Navbar } from "../../components/navbar"


export const Home = () => {

  return (
    <div className="h-screen w-screen bg-[#250821] font-montserrat">
      <div className="relative">
      <Navbar/>
      <SectionHome/>
      </div>
    </div>

    
  )
}