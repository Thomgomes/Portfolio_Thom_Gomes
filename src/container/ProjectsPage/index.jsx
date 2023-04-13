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

            </section>
          </div>

          {/* Slider dos projetos */}
          <section className="">
            <SliderComponent />
          </section>

        </div>
      </div>
    </div>
  )
}