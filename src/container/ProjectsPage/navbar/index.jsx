import { Link } from "react-router-dom"

import { Bubbles } from "../../../components/navbar/bublles"
import { LayeredWaves } from "../../../components/navbar/layeredWaves"

import wavesGolden from '../../../assets/layeredWaves/goldenWaves.svg'
import TcodeLogo from '../../../assets/Thom.Code-_1_.svg'

export const ProjectsNavbar = () => {
  return (
    <navbar>
      <div className='text-white'>
        <LayeredWaves waveName={wavesGolden} />
        <Bubbles />
        <div className="relative container mx-auto px-4 h-24 flex items-center justify-between z-[1]" id='navbar-view'>
          <div className="logo">
            <Link className="login-form-title" to="/home">
              <img className="lg:w-52 w-40 pt-5" src={TcodeLogo} alt="Thom_Code" />
            </Link>
          </div>
        </div>
      </div>
    </navbar>
  )
}