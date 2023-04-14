import { ProjectsNavbar } from "./navbar"

import { motion } from "framer-motion"
import { fadein } from "../../utils/variants"
// import SliderApp from "./slider-offPage"
import { SliderComponent } from "./slides/projectsSlide"
import { FavoriteSliderComponent } from "./slides/favoriteSlide"
import { FeaturedSliderComponent } from "./slides/featuredSlide"
import { useState } from "react"
import { AllProjectsGroup } from "./allProjects"



export const AllProjects = () => {
  const [btnShowProjectsText, SetBtnShowProjectsText] = useState('Mostrar todos os projetos')

  async function toggleProjects() {
    if (btnShowProjectsText === 'Mostrar todos os projetos') {
      SetBtnShowProjectsText('Mostrar Slide de projetos')
    } else {
      SetBtnShowProjectsText('Mostrar todos os projetos')
    }
  }

  return (
    <div className="">
      <div className="relative">
        <ProjectsNavbar />

        {/* Projetos em Destaque */}
        <motion.div
          variants={fadein('down', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 xl:mt-32">
          <div className="container mx-auto">
            {/* titulo */}
            <div className="sm:mx-16 mb-10 min-w-min mx-auto rounded-bl-md rounded-tl-md relative">

              <div className="flex justify-center md:justify-start">
                <h2 className="pl-4 p-2 text-5xl font-semibold">Destaques</h2>
                {/* text-[#bb700f] */}
              </div>

            </div>
          </div>

          {/* Slider dos projetos */}
          <section className="">
            <FeaturedSliderComponent />
          </section>

        </motion.div>

        {/* Projetos Favoritos */}
        <motion.div
          variants={fadein('up', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 xl:mt-32">
          <div className="container mx-auto">
            {/* titulo */}
            <div className="sm:mx-16 mb-10 min-w-min mx-auto rounded-bl-md rounded-tl-md relative">

              <div className="flex justify-center md:justify-start">
                <h2 className="pl-4 p-2 text-5xl font-semibold text-[#f2f5f7]">Favoritos <span>2</span><span>/</span><span>3</span> </h2>
                {/* text-[#bb700f] */}
              </div>

            </div>
          </div>

          {/* Slider dos projetos */}
          <section className="">
            <FavoriteSliderComponent />
          </section>

        </motion.div>

        {/* Projetos */}
        <div className="mt-14 xl:mt-32">
          <div className="container mx-auto">
            {/* titulo */}
            <motion.div
              variants={fadein('up', 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="flex sm:flex-row sm:justify-between flex-col  sm:mx-16 mb-10 min-w-min mx-auto rounded-bl-md rounded-tl-md">

              <div className="flex sm:mb-0 mb-4 justify-center md:justify-start">
                <h2 className="pl-4 p-2 text-5xl font-semibold">Projetos</h2>
                {/* text-[#bb700f] */}
              </div>

              <button className=" py-2 px-2 bg-[#13131F] rounded-3xl border-2 border-[#bb700f] transition-all duration-300
                                   hover:scale-125 hover:bg-[#8b5207] hover:text-white"
                onClick={toggleProjects} >{btnShowProjectsText}</button>

            </motion.div>
          </div>

          {/* Slider dos projetos */}
          {btnShowProjectsText === 'Mostrar todos os projetos' ? (

            <motion.section
              variants={fadein('left', 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="">
              <SliderComponent />
            </motion.section>
          ) :
            <section className="sm2:container sm2:mx-auto">
              <AllProjectsGroup />
            </section>
          }

        </div>
      </div>
    </div>
  )
}


