import CountUp from "react-countup"

import { useInView } from "framer-motion"



import thomImg from '../../assets/thom.jpg'

import '../../components/about/aboutme.css'
import { AboutImg } from "../../components/about/aboutImg"
import { AboutTexts } from "../../components/about/aboutTexts"
import { Datee } from "../../utils/dateBirthday"

export const About = () => {
  // const [ref, inView] = useInView({
  //   threshold: 0.5,
  // })

  console.log(Datee)


  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <AboutImg/>
          <AboutTexts
           h2="Um pouco sobre mim"
           h3="Meu nome é, Thomás D'angelo de Almeida Gomes"
           h3_2="Eu sou Desenvolvedor Front-end"
           text={`Dês de cedo sempre gostei muito de computadores, aos meus 17 anos tive meu primeiro contato com programção`}
          />
        </div>
      </div>
    </section>
  )
}