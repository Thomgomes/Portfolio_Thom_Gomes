
import { ContactPage } from "../contact"
import { HomePage } from "../home"
import { ServicesPage } from "../services"
import { AboutPage } from "../sobre"
import { WorkPage } from "../work"

export const Allpages = () => {
  return (
    <div className="bg-[#250821] overflow-x-hidden text-white" >
      <HomePage />
      <AboutPage />
      <ServicesPage />
      <WorkPage />
      <ContactPage />
      <div className="h-[4000px]"></div>
    </div>
  )
}