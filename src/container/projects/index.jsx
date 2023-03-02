import { WorkLink } from "../../components/projects/linkWorks"
import img1 from '../../assets/imgProjects/base image portfolio.jpg'
import { ImgProjectCard } from "../../components/projects/imgProjectCard"
import { ProjectCardComingsoon } from "../../components/projects/ProjectCardComingsoon"




export const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container mx-auto my-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <div>
              <h2 className="leading-tight text-5xl font-semibold mb-6 tracking-[10%] md:mx-0 mx-3">
                Meus Ultimos <br />
                Projetos
              </h2>
              <p className="max-w-sm mb-16">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, voluptates?</p>
              <WorkLink id="/works" />
            </div>
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


