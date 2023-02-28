import { AiOutlineHtml5, AiFillGithub } from 'react-icons/ai'
import { DiCss3Full } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { BsBootstrapFill } from 'react-icons/bs'
import { SiTailwindcss, SiBulma, SiJss, SiMongodb, SiPostgresql } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'

import { AbilityCards } from "../../components/ability/abilityCards"
import { AbilityComingSoon } from "../../components/ability/abilityComingSoon"
import { AbilityTitle } from "../../components/ability/abilityTitle"

export const Ability = () => {
  const cards = [
    {
      name: "Html5",
      icon: AiOutlineHtml5,
    },
    {
      name: "Css3",
      icon: DiCss3Full,
    },
    {
      name: "JavaScript",
      icon: IoLogoJavascript,
    },
    {
      name: "ReactJS",
      icon: FaReact,
    },
    {
      name: "TailwindCss",
      icon: SiTailwindcss,
    },
    {
      name: "Bootstrap",
      icon: BsBootstrapFill,
    },
    {
      name: "Bulma",
      icon: SiBulma,
    },
    {
      name: "Jss(css-in-js)",
      icon: SiJss,
    },
    {
      name: "GitHub",
      icon: AiFillGithub,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "PostgresSQL",
      icon: SiPostgresql,
    },
  ];

  return (
    <div className="section" id="ability">
      <div className="container relative mx-auto ">
        <div className="flex items-center text-center justify-center ">
          <AbilityTitle title='Habilidades' />
        </div>
        <div className="w-full h-full">
          <div className="grid 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-6 gap-y-12 ">
            {
              cards?.map(item => (
                <AbilityCards
                  id={item.lenght}
                  icon={item.icon}
                  iconName={item.name}
                />
              ))
            }
            <AbilityComingSoon />
          </div>
        </div>
      </div>
    </div>
  )
}