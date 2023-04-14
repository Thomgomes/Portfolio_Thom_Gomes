import { BsDisplay, BsGithub } from "react-icons/bs"
import { GoSearch } from "react-icons/go"
import { Link } from "react-router-dom"
import img1 from '../../../assets/imgProjects/depositodeconhecimento.jpg'
import { motion } from "framer-motion"
import { fadein } from "../../../utils/variants"
import { useState } from "react"

import '../../../components/contact/inputFocus.css'

const CONTEUDO_CARTOES = [
  {
    titulo: "Depósito de Conhecimento",
    iniciado: "fevereiro, 2023",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat nulla non quasia.",
    imagem: img1,
    alt: "img text",
    repoLink: "https://thomgomes.github.io/Portfolio_Thom_Gomes/",
    gitLink: "https://github.com/Thomgomes/Portfolio_Thom_Gomes",
  },
  {
    titulo: "sempre tem um",
    iniciado: "fevereiro, 2023",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat nulla non quasi.",
    imagem: img1,
    alt: "img text",
    repoLink: "https://thomgomes.github.io/Portfolio_Thom_Gomes/",
    gitLink: "https://github.com/Thomgomes/Portfolio_Thom_Gomes",
  },
  {
    titulo: "Qualquer coisa passa aqui",
    iniciado: "fevereiro, 2023",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat nulla non quasi.",
    imagem: img1,
    alt: "img text",
    repoLink: "https://thomgomes.github.io/Portfolio_Thom_Gomes/",
    gitLink: "https://github.com/Thomgomes/Portfolio_Thom_Gomes",
  },
  {
    titulo: "Se um passaro cai aqui",
    iniciado: "fevereiro, 2023",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat nulla non quasi.",
    imagem: img1,
    alt: "img text",
    repoLink: "https://thomgomes.github.io/Portfolio_Thom_Gomes/",
    gitLink: "https://github.com/Thomgomes/Portfolio_Thom_Gomes",
  },
  {
    titulo: "Depósito de Conhecimento",
    iniciado: "fevereiro, 2023",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat nulla non quasi.",
    imagem: img1,
    alt: "img text",
    repoLink: "https://thomgomes.github.io/Portfolio_Thom_Gomes/",
    gitLink: "https://github.com/Thomgomes/Portfolio_Thom_Gomes",
  },
  {
    titulo: "Depósito de Conhecimento",
    iniciado: "fevereiro, 2023",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat nulla non quasi.",
    imagem: img1,
    alt: "img text",
    repoLink: "https://thomgomes.github.io/Portfolio_Thom_Gomes/",
    gitLink: "https://github.com/Thomgomes/Portfolio_Thom_Gomes",
  },
  {
    titulo: "Depósito de Conhecimento",
    iniciado: "fevereiro, 2023",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat nulla non quasi.",
    imagem: img1,
    alt: "img text",
    repoLink: "https://thomgomes.github.io/Portfolio_Thom_Gomes/",
    gitLink: "https://github.com/Thomgomes/Portfolio_Thom_Gomes",
  },
  {
    titulo: "Depósito de Conhecimento",
    iniciado: "fevereiro, 2023",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat nulla non quasi.",
    imagem: img1,
    alt: "img text",
    repoLink: "https://thomgomes.github.io/Portfolio_Thom_Gomes/",
    gitLink: "https://github.com/Thomgomes/Portfolio_Thom_Gomes",
  },
  {
    titulo: "Depósito de Conhecimento",
    iniciado: "fevereiro, 2023",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat nulla non quasi.",
    imagem: img1,
    alt: "img text",
    repoLink: "https://thomgomes.github.io/Portfolio_Thom_Gomes/",
    gitLink: "https://github.com/Thomgomes/Portfolio_Thom_Gomes",
  },
  {
    titulo: "sorry",
    iniciado: "fevereiro, 2023",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat nulla non quasi.",
    imagem: img1,
    alt: "img text",
    repoLink: "https://thomgomes.github.io/Portfolio_Thom_Gomes/",
    gitLink: "https://github.com/Thomgomes/Portfolio_Thom_Gomes",
  },
];

const Card = ({ titulo, iniciado, conteudo, imagem, alt, repoLink, gitLink }) => (
  <div className="bg-[#222] min-w-[368px] w-auto h-auto pt-5 p-7 mb-10 border border-[#bb700f] rounded-2xl text-[#bb700f] text-justify transition-all ease-out duration-[0.3s]">
    {/* Titulo do projetos */}
    <h2
      className="text-center text-2xl md:text-3xl font-semibold mb-5 text-[#bb8c4e] min-h-[72px]"
    >
      {titulo}
    </h2>
    {/* imagem */}
    <div className="group relative overflow-hidden">
      {/* overlay */}
      <div className="group-hover:bg-black/70 group-hover:scale-105 rounded-xl w-full h-full absolute z-40 transition-all duration-300"></div>
      {/* img */}
      <img className="rounded-xl transition-all ease-out duration-[0.3s] group-hover:scale-105" src={imagem} alt={alt} />
      {/* data de inicio */}
      <p className="absolute -bottom-full right-8 text-[#bb700f]
              group-hover:bottom-6 transition-all duration-700 z-50">{iniciado}</p>
    </div>
    {/* conteudo */}
    <div className='h-24 pr-4 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-[#d28d06] scrollbar-track-[#251123c7]'>
      <p className="mt-2">{conteudo}</p>
    </div>

    {/* Botões */}
    <div className='flex justify-between'>

      {/* Botão do repositorio */}
      <Link to={gitLink} target="_blank">
        <div className="">
          <button
            className="flex gap-1 items-center py-2 px-2 bg-[#13131F] rounded-3xl border-2 border-[#bb700f] transition-all duration-300 
          hover:scale-125 hover:bg-[#8b5207] hover:text-white
          ">
            Ver Repositório <BsGithub />
          </button>
        </div>
      </Link>

      {/* Botão do Deploy */}
      <Link to={repoLink} target="_blank">
        <div className="">
          <button
            className="flex gap-1 items-center py-2 px-2 bg-[#13131F] rounded-3xl border-2 border-[#bb700f] transition-all duration-300
          hover:scale-125 hover:bg-[#8b5207] hover:text-white
          ">
            Ver Projeto <BsDisplay />
          </button>
        </div>
      </Link>

    </div>
  </div>
);

export const AllProjectsGroup = () => {
  const [search, setSearch] = useState("")

  const searchToName = search.toLowerCase()

  const searchCards = CONTEUDO_CARTOES.filter((i) => i.titulo.toLowerCase().includes(searchToName))

  console.log(search)


  return (
    <>
      <div className="flex justify-end">
        <div className="xl:w-1/4 lg:w-2/5 md:w-3/5 w-full relative border-b-2 border-[#adadad] mt-[20px] mb-9 xl:mr-3 lg:mr-5">
          <input type="search"
            name=""
            id=""
            placeholder="Procure um projeto aqui"
            className="group input text-base text-white leading-[1.2] border-none block w-full h-11 bg-transparent px-1.5 focus:outline-0"
            value={search}
            maxLength={28}
            onChange={(e => setSearch(e.target.value))} />
          <span
            className="
                      focus-input absolute block w-full h-full top-0 left-0 pointer-events-none text-[#adadad] text-start
                      before:block before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-0.5 before:transition-all before:bg-gradient-to-l to-[#d28d06] from-[#8b5002]
                      after:text-base after:text-[#999999] after:leading-[1.2] after:content-[attr(data-paceholder)] after:block after:w-full after:absolute after:top-4 after:left-0 after:pl-[5px] after:transition-all 
                      "
          ></span>
          <span className="absolute right-7 bottom-3 text-xl text-[#adadad]"><GoSearch/></span>
        </div>
      </div>
      <div className="grid 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-4">
        {searchCards.map((_, i) => (
          <motion.div
            variants={fadein("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Card
              key={i}
              titulo={searchCards[i].titulo}
              iniciado={searchCards[i].iniciado}
              conteudo={searchCards[i].conteudo}
              imagem={searchCards[i].imagem}
              alt={searchCards[i].alt}
              repoLink={searchCards[i].repoLink}
              gitLink={searchCards[i].gitLink}
            />
          </motion.div>
        ))}
      </div>
    </>
  )
}