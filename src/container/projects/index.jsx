
import img1 from '../../assets/imgProjects/base image portfolio.jpg'
import { ImgProjectCard } from "../../components/projects/imgProjectCard"
import { ProjectCardComingsoon } from "../../components/projects/ProjectCardComingsoon"
import { ProjectTitle } from "../../components/projects/ProjectTitle"




export const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container mx-auto my-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <ProjectTitle/>
            {/* iamge */}
            <ImgProjectCard
              fadein="right"
              img={img1}
              pretext="Teste"
              title="titulo"
            />
          </div>

          <div className="flex-1 flex flex-col gap-y-10">
            {/* image */}
            <ImgProjectCard
              fadein="left"
              img={img1}
              pretext="Teste"
              title="titulo"
            />

            <ProjectCardComingsoon
            fadein='left'
            title="Em breve mais projetos"
            />
          </div>
        </div>
      </div>
    </section>
  )
}


