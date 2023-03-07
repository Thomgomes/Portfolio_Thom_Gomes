import { ProjectsNavbar } from "./navbar"

import { FavoriteProjects } from "./favoritesProjects"
import { Slider } from "./slider"


export const AllProjects = () => {
  return (
    <div className="">
      <div className="relative">
        <ProjectsNavbar />
        <div className="h-[2000px] mt-10">
          <div className="container mx-auto">

            {/* section dos projetos */}
            <section className="bdorder mb-10 border border-red-500">
              {/* titulo */}
              <div>
                <h2>Projetos</h2>
              </div>
              
              {/* Slider dos projetos */}
              <Slider/>
              
            </section>



            {/* section dos projetos favoritos */}
            <section className="border">
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