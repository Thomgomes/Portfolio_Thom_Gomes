
import { AbilityPage } from "../ability"
import { ContactPage } from "../contact"
import { HomePage } from "../home"
import { AboutPage } from "../sobre"
import { ProjectsPage } from "../projects"

export const Allpages = () => {
  return (
    <div className="bg-[#250821]  font-montserrat overflow-x-hidden text-white" >
      <HomePage />
      <AboutPage />
      <AbilityPage />
      <ProjectsPage />
      <ContactPage />
      {/* <div className="h-[4000px]"></div> */}
    </div>
  )
}

// bg-[#250821]
// bg-[#13131F]