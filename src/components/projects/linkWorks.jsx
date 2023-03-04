import { Link } from "react-router-dom"

export const WorkLink = (props) => {
  return(
    <div>
      <Link 
      to={props.id}
      >
        <button 
          className="w-36 py-2 bg-[#13131F] rounded-3xl border-2 border-[#bb700f] transition-all duration-300
          hover:scale-125 hover:bg-[#8b5207] 
          ">
          Ver todos os projetos
        </button>
      </Link>
    </div>
  )
 }