import { Link } from 'react-router-dom'

import TcodeLogo from '../../assets/Thom.Code-_1_.svg'

import { LayeredWaves } from '../../components/navbar/layeredWaves'
import { NavLinks } from '../../components/navbar/navLink'
// import { ThemesBtn } from '../../components/navbar/navThemes'

import wavesGreen from '../../assets/layeredWaves/greenWaves.svg'
import wavesGolden from '../../assets/layeredWaves/goldenWaves.svg'
import wavesPurple from '../../assets/layeredWaves/pulpleWaves.svg'
import { Bubbles } from '../../components/navbar/bublles'

export const Navbar = () => {

  return (
    <navbar>
      <div className='text-white'>
        <LayeredWaves waveName={wavesGolden} />
        <Bubbles/>
        <div className="relative container mx-auto px-4 h-24 flex items-center justify-between z-[1]"  id='navbar-view'>
          <div className="logo">
            <Link className="login-form-title" to="/home">
              <img className="lg:w-52 w-40 pt-5" src={TcodeLogo} alt="Thom_Code" />
            </Link>
          </div>

          <nav className='hidden md:block'>
            <ul className="flex items-center gap-3 space-x-3 ml-auto">
              <NavLinks
                path="home"
                class="cursor-default"
                nameDescription={`Home`}
              />
              <NavLinks
                path="about"
                class="cursor-pointer"
                nameDescription="Sobre"
              />
              <NavLinks
                path="ability"
                class="cursor-pointer"
                nameDescription="Habilidades"
              />
              <NavLinks
                path="projects"
                class="cursor-pointer"
                nameDescription="Projetos"
              />
              <NavLinks
                path="contact"
                class="cursor-pointer"
                nameDescription="Contato"
              />
              {/* <span className='opacity-50 text-2xl'>|</span> */}
              {/* <ThemesBtn /> */}
            </ul>
          </nav>
        </div>
      </div>
    </navbar>
  )
}
