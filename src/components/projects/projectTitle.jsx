import { WorkLink } from "./linkWorks"

export const ProjectTitle = () => {
  return (
    <div className="text-center">
      <h2 className="leading-tight text-5xl font-semibold mb-6 tracking-[10%] md:mx-0 mx-3">
        Projetos em <br />
        Destaque
      </h2>

      <WorkLink id="/projects" />
    </div>
  )
}