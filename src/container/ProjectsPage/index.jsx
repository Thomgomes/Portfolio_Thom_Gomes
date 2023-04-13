import { ProjectsNavbar } from "./navbar"

import { FavoriteProjects } from "./favoritesProjects"
import SliderApp from "./slider-offPage"
import { SliderComponent } from "./slides/projectsSlide"
import { FavoriteSliderComponent } from "./slides/favoriteSlide"
import { FeaturedSliderComponent } from "./slides/featuredSlide"



export const AllProjects = () => {
  return (
    <div className="">
      <div className="relative">
        <ProjectsNavbar />

        {/* Projetos em Destaque */}
        <div className="mt-14 xl:mt-32">
          <div className="container mx-auto">
            {/* titulo */}
            <div className="sm:mx-16 mb-10 min-w-min mx-auto rounded-bl-md rounded-tl-md relative">

              <div className="flex justify-center md:justify-start">
                <h2 className="pl-4 p-2 text-5xl font-semibold">Projetos Em destaque</h2>
                {/* text-[#bb700f] */}
              </div>

            </div>
          </div>

          {/* Slider dos projetos */}
          <section className="">
            <FeaturedSliderComponent />
          </section>

        </div>

        {/* Projetos Favoritos */}
        <div className="mt-14 xl:mt-32">
          <div className="container mx-auto">
            {/* titulo */}
            <div className="sm:mx-16 mb-10 min-w-min mx-auto rounded-bl-md rounded-tl-md relative">

              <div className="flex justify-center md:justify-start">
                <h2 className="pl-4 p-2 text-5xl font-semibold text-[#f2f5f7]">Projetos Favoritos <span>2</span><span>/</span><span>3</span> </h2>
                {/* text-[#bb700f] */}
              </div>

            </div>
          </div>

          {/* Slider dos projetos */}
          <section className="">
            <FavoriteSliderComponent />
          </section>

        </div>

        {/* Projetos */}
        <div className="mt-14 xl:mt-32">
          <div className="container mx-auto">
            {/* titulo */}
            <div className="sm:mx-16 mb-10 min-w-min mx-auto rounded-bl-md rounded-tl-md relative">

              <div className="flex justify-center md:justify-start">
                <h2 className="pl-4 p-2 text-5xl font-semibold">Projetos</h2>
                {/* text-[#bb700f] */}
              </div>

            </div>
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


