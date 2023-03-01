import { WorkLink } from "../../components/projects/linkWorks"

export const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container mx-auto">
        <div>
          <div>
            {/* text */}
            <div>
              <h2 className="leading-tight text-5xl font-semibold mb-6 tracking-[10%] md:mx-0 mx-3">
                Meus Ultimos <br />
                Projetos
              </h2>
              <p className="max-w-sm mb-16">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus vel quibusdam ut et modi, autem repellat, nisi corrupti saepe eligendi odio nemo totam suscipit deserunt repudiandae consequuntur magni. Soluta, laboriosam!</p>
              <WorkLink id="/works" />
            </div>
            {/* iamge */}
            <div>
              {/* overlay */}
              <div></div>
              {/* img */}
              <img src="" alt="" />
              {/* pretitle */}
              <div>Texto de preteste</div>
              {/* title */}
              <div>
                <span>
                  Texto de teste
                </span>
              </div>
            </div>
          </div>
          <div>2</div>
        </div>
      </div>
    </section>
  )
}


