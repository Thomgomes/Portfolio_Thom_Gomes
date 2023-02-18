import { FixedNavIcons } from "../../components/fixedIconsBot"
import { SectionHome } from "../../container/homeSection"
import { Navbar } from "../../container/navbar"



export const HomePage = () => {

  return (
    <div className="h-screen w-screen font-montserrat" id="home">
      <div className="relative">
      <Navbar/>
      <SectionHome/>
      <FixedNavIcons/>
      </div>
    </div>

    
  )
}
