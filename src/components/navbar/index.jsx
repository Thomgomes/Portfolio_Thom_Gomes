import { Link } from 'react-router-dom'
import TcodeLogo from '../../assets/Thom.Code-_1_.svg'
import { LayeredWaves } from './layeredWaves'
import { NavLinks } from './navLink'
import { ThemesBtn } from './navThemes'
import wavesGreen from '../../assets/layeredWaves/greenWaves.svg'
import wavesGolden from '../../assets/layeredWaves/goldenWaves.svg'
import wavesPurple from '../../assets/layeredWaves/pulpleWaves.svg'

export const Navbar = () => {


  return (
    <navbar>
      <div className=' text-white bg-[#f5fffa0c]'>
        <LayeredWaves waveName={wavesGolden}/>
      <div className="relative container max-w-7xl mx-auto px-4 h-24 flex items-center justify-between z-[1]" >
        <div className="logo">
          <Link className="login-form-title" to="/home">
            <img className="w-36 pt-5" src={TcodeLogo} alt="Thom_Code" />
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
            <ThemesBtn/>
          </ul>
        </nav>
      </div>
      </div>
    </navbar>
  )
}
