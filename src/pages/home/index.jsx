
import { AbilityPage } from "./ability"
import { ContactPage } from "./contact"
import { HomePage } from "./home"
import { AboutPage } from "./sobre"
import { ProjectsPage } from "./projects"
import { SocialMedia } from "../../container/socialMedia"

export const Home = () => {
  return (
    <div className="bg-[#250821]  font-montserrat overflow-hidden text-white" >
      <HomePage />
      <AboutPage />
      <AbilityPage />
      <ProjectsPage />
      <ContactPage />
      <SocialMedia/>
      {/* <div className="h-[4000px]"></div> */}
    </div>
  )
}

// bg-[#250821]
// bg-[#13131F]