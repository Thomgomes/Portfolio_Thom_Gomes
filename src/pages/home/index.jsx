import { FixedNavIcons } from "../../components/fixedIconsBot"
import { SectionHome } from "../../container/homeSection"
import { Navbar } from "../../container/navbar"




export const HomePage = () => {

  // const observer = new IntersectionObserver( entries => {
  //   const fixedIconsBot = document.querySelector('.init-hidden')
  //   console.log(entries)
  //   if(entries.intersectionRatio > 1){
  //     fixedIconsBot.classList.toggle('init-hidden')
  //     console.log('ok')
  //   }
  // }, {
  //   threshold: 1
  // })
  
  // observer.observe(document.querySelector('#navbar-view'))
  
  

  return (
    <div className="h-screen w-screen" id="home">
      <div className="relative">
      <Navbar/>
      <SectionHome/>
      <FixedNavIcons/>
      </div>
    </div>

    
  )
}
