import { Link } from "react-router-dom"


export const NavLinks = (props) => {
  return (
    <li>
      <Link to={props.path} className="text-sm pt-3 transition-all duration-75 hover:border-t-2 hover:shadow-sm">
        {props.nameDescription}
      </Link>
    </li>
  )
}
