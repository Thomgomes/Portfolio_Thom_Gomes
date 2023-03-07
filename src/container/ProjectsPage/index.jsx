import { ProjectsNavbar } from "./navbar"

import { FavoriteProjects } from "./favoritesProjects"

export const AllProjects = () => {
  return (
    <div className="">
      <div className="relative">
        <ProjectsNavbar />
        <div className="h-[2000px] mt-10">
          <div className="container border mx-auto">
            {/* titulo */}
            <div>
              <h1>Projetos Favoritos</h1>
            </div>

            {/* Projetos favoritos */}
            <FavoriteProjects
            fadein='left'
            title="Em breve mais projetos"
            />
          </div>
        </div>

      </div>
    </div>
  )
}