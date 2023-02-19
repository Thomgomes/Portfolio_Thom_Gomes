import CountUp from "react-countup"

import { useInView } from "framer-motion"



import thomImg from '../../assets/thom.jpg'

import '../../components/about/aboutme.css'
import { AboutImg } from "../../components/about/aboutImg"
import { AboutTexts } from "../../components/about/aboutTexts"

export const About = () => {
  // const [ref, inView] = useInView({
  //   threshold: 0.5,
  // })

  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <AboutImg/>
          <AboutTexts
           h2="Sobre mim"
           h3="Eu sou Desenvolvedor Front-end"
           text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, deleniti? Assumenda, dolores incidunt! Cupiditate nemo non eum quos maiores doloribus, quasi rem deleniti optio dolor, unde voluptates itaque possimus quaerat!"
          />
        </div>
      </div>
    </section>
  )
}