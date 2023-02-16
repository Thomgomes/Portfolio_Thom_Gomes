import { Link } from "react-router-dom"


export const NavLinks = (props) => {
  return (
    <li>
      <Link to={props.path} className="text-base pt-3 -tracking-tighter transition-all duration-75 hover:border-t-2 hover:shadow-sm">
        {props.nameDescription}
      </Link>
    </li>
  )
}
