import { ProjectsNavbar } from "./navbar"

import { FavoriteProjects } from "./favoritesProjects"
import SliderApp from "./slider"



export const AllProjects = () => {
  return (
    <div className="">
      <div className="relative">
        <ProjectsNavbar />
        <div className="h-[2000px] mt-14 xl:mt-32">
          <div className="container mx-auto">

            {/* section dos projetos */}
            <section className="mb-10">
              {/* titulo */}
              <div
                className="sm:mx-16 mb-10 min-w-min mx-auto bg-white rounded-bl-md rounded-tl-md relative
                         before:hidden md:before:block before:absolute before:right-0 before:h-full before:w-24 before:bg-[#250821] before:rounded-l-[50%]
              ">
                <div className="flex justify-center md:justify-start">
                  <h2 className="pl-4 p-2 text-5xl font-semibold text-[#bb700f]">Projetos</h2>
                </div>

                <div className="absolute bg-[#250821] w-16 h-3 top-0 right-0 md:left-2/3 rounded-bl-full rounded-br-full"></div>
                <div className="absolute bg-[#250821] w-16 h-3 bottom-0 right-0 md:left-2/3 rounded-tl-full rounded-tr-full"></div>

                <div className="absolute bg-[#250821] w-16 h-3 top-0 left-0 rounded-bl-full rounded-br-full md:hidden"></div>
                <div className="absolute bg-[#250821] w-16 h-3 bottom-0 left-0 rounded-tl-full rounded-tr-full md:hidden"></div>
              </div>

              {/* Slider dos projetos */}
              <div className="w-full flex justify-center">
                <SliderApp />
              </div>

            </section>



            {/* section dos projetos favoritos */}
            <section className="mt-44 border">
              {/* titulo */}
              <div>
                <h2>Projetos Favoritados</h2>
              </div>

              {/*Slider dos projetos favoritos */}
              <FavoriteProjects
                fadein='left'
                title="Em breve mais projetos"
              />

            </section>

          </div>
        </div>

      </div>
    </div>
  )
}