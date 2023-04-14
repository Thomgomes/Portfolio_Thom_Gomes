import { BsDisplay } from "react-icons/bs"
import { Link } from "react-router-dom"


export const BtnViewProject = (props) => {
  return (
    <Link to={props.link} target="_blank">
      <div className="absolute -bottom-full right-12 
              group-hover:bottom-10 transition-all duration-700 z-50">
        <button
          className="flex gap-1 items-center py-2 px-2 bg-[#13131F] rounded-3xl border-2 border-[#bb700f] transition-all duration-300
          hover:scale-125 hover:bg-[#8b5207] 
          ">
          Ver Projeto <BsDisplay />
        </button>
      </div>
    </Link>
  )
}