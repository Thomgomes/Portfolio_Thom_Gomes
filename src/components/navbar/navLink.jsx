import { Link } from "react-router-dom"


export const NavLinks = (props) => {
  return (
    <li>
      <Link to={props.path} className="text-sm hover:underline">
        {props.nameDescription}
      </Link>
    </li>
  )
}
