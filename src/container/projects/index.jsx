import { WorkLink } from "../../components/projects/linkWorks"
import img1 from '../../assets/imgProjects/base image portfolio.jpg'
import { ImgProjectCard } from "../../components/projects/imgProjectCard"

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
              img={img1}
              pretext="Teste"
              title="titulo"      
            />
          </div>

          <div className="flex-1 flex flex-col gap-y-10">
            {/* image */}
            <ImgProjectCard 
              img={img1}
              pretext="Teste"
              title="titulo"      
            />

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img1}
                alt="" />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 
              group-hover:bottom-24 transition-all duration-500 z-50">
                <h6 className="text-3xl pb-5">Texto de pretexte</h6>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 
              group-hover:bottom-14 transition-all duration-700 z-50">
                <h5 className="text-3xl">Titulo do projeto</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


