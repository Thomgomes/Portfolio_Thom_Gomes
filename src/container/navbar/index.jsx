import { Link } from 'react-router-dom'

import TcodeLogo from '../../assets/Thom.Code-_1_.svg'

import { LayeredWaves } from '../../components/navbar/layeredWaves'
import { NavLinks } from '../../components/navbar/navLink'
import { ThemesBtn } from '../../components/navbar/navThemes'

import wavesGreen from '../../assets/layeredWaves/greenWaves.svg'
import wavesGolden from '../../assets/layeredWaves/goldenWaves.svg'
import wavesPurple from '../../assets/layeredWaves/pulpleWaves.svg'
import { Bubbles } from '../../components/navbar/bublles'

export const Navbar = () => {


  return (
    <navbar>
      <div className=' text-white bg-[#f5fffa0c]'>
        <LayeredWaves waveName={wavesGolden} />
        <Bubbles/>
        <div className="relative container max-w-7xl mx-auto px-4 h-24 flex items-center justify-between z-[1]" >
          <div className="logo">
            <Link className="login-form-title" to="/home">
              <img className="w-40 pt-5" src={TcodeLogo} alt="Thom_Code" />
            </Link>
          </div>

          <nav>
            <ul className="flex items-center gap-3 space-x-3 ml-auto">
              <NavLinks
                path="*"
                nameDescription="Home"
              />
              <NavLinks
                path="*"
                nameDescription="Sobre"
              />
              <NavLinks
                path="*"
                nameDescription="Habilidades"
              />
              <NavLinks
                path="*"
                nameDescription="Projetos"
              />
              <NavLinks
                path="*"
                nameDescription="Contato"
              />
              <span className='opacity-50 text-2xl'>|</span>
              <ThemesBtn />
            </ul>
          </nav>
        </div>
      </div>
    </navbar>
  )
}
