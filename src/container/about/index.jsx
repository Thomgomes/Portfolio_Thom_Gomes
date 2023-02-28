import CountUp from "react-countup"

import { useInView } from "framer-motion"



import thomImg from '../../assets/thom.jpg'

import '../../components/about/aboutme.css'
import { AboutImg } from "../../components/about/aboutImg"
import { AboutTexts } from "../../components/about/aboutTexts"
// import { Datee } from "../../utils/dateBirthday"

export const About = () => {
  // const [ref, inView] = useInView({
  //   threshold: 0.5,
  // })

  // console.log(Datee)


  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <AboutImg />
          <AboutTexts
            h2="Sobre mim"
            h3="Eu sou Desenvolvedor Front-end"

            text={`Meu nome é Thomás D'Angelo de Almeida Gomes e sou apaixonado por desenvolvimento web. Sempre gostei de computadores, tive meu primeiro contato com programação em 2021, fazia a parte visual dos projetos do curso, mas não podia estudar só front-end, só comecei a dar o devido foco após completar o curso. Atualmente estudo o curso "One Bit Code" e variações de vídeos pela internet.`}
            text2={`Sou formado em Técnico em análise e Desenvolvimento de Sistemas, tenho conhecimento sobre tecnologias e ferramentas voltadas para o Front-end. Gosto de aprimorar e aprender por meio de pequenos projetos pessoais, assim posso ir aperfeiçoando minhas habilidades com as tecnologias.`}
          />
        </div>
      </div>
    </section>
  )
}