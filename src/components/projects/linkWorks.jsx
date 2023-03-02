import { Link } from "react-router-dom"

export const WorkLink = (props) => {
  return(
    <div>
      <Link to={props.id}>
        <button className="w-36 py-2 bg-[#13131F] rounded-3xl border-2 border-[#bb700f]">
          Ver todos os projetos
        </button>
      </Link>
    </div>
  )
 }