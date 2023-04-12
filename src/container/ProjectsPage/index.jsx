import { ProjectsNavbar } from "./navbar"

import { FavoriteProjects } from "./favoritesProjects"
import SliderApp from "./slider-offPage"
import { SliderComponent } from "./splides"



export const AllProjects = () => {
  return (
    <div className="">
      <div className="relative">
        <ProjectsNavbar />
        <div className="mt-14 xl:mt-32">
          <div className="container mx-auto">

            {/* section dos projetos */}
            <section className="mb-10">
              
              {/* titulo */}
              <div className="sm:mx-16 mb-10 min-w-min mx-auto rounded-bl-md rounded-tl-md relative">

                <div className="flex justify-center md:justify-start">
                  <h2 className="pl-4 p-2 text-5xl font-semibold text-[#bb700f]">Projetos</h2>
                </div>

              </div>

              {/* Slider dos projetos */}
              <div className="">
                <SliderComponent />
              </div>

            </section>



            {/* section dos projetos favoritos */}
            {/* <section className="mt-44 border">
              titulo
              <div>
                <h2>Projetos Favoritados</h2>
              </div>

              Slider dos projetos favoritos
              <FavoriteProjects
                fadein='left'
                title="Em breve mais projetos"
              />

            </section> */}

          </div>
        </div>

      </div>
    </div>
  )
}