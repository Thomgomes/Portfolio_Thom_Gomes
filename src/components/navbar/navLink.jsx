import { Link } from "react-scroll"



export const NavLinks = (props) => {
  return (
    <li>
      <Link 
      to={props.path} 
      smooth={true}
      spy={true}
      className={`lg:text-xl text-lg ${props.class} pt-3 -tracking-tighter transition-all duration-75 hover:border-t-2 hover:shadow-sm`}>
        {props.nameDescription}
        <span>{props.icon}</span>
      </Link>
    </li>
  )
}
