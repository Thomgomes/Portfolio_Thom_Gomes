import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css"

import { BsDisplay } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { Link } from "react-router-dom"
import img1 from '../../../../assets/imgProjects/depositodeconhecimento.jpg'
import { useState } from 'react';

import './index.css'

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


export const SliderComponent = () => {

  return (
    <div>
      <Splide options={{
        type: "slide",
        perPage: 4,
        perMove: 1,
        gap: 150,
        breakpoints: {
          1439: {
            perPage: 3,
            gap: '1.7rem'
          },
          1185: {
            perPage: 2,
            gap: '1.4rem'
          },
          791: {
            perPage: 1,
            gap: '1rem'
          },
          445: {
            perPage: 1,
            gap: '1rem',
            padding: 0,
          },
        },
        padding: '2.5rem',
        rewind: true,
        rewindSpeed: 2600,
        speed: 1300,
        pagination: false,

      }}>
        {CONTEUDO_CARTOES.map((_, i) => (
          <SplideSlide key={i}>
            <Card
              titulo={CONTEUDO_CARTOES[i].titulo}
              iniciado={CONTEUDO_CARTOES[i].iniciado}
              conteudo={CONTEUDO_CARTOES[i].conteudo}
              imagem={CONTEUDO_CARTOES[i].imagem}
              alt={CONTEUDO_CARTOES[i].alt}
              repoLink={CONTEUDO_CARTOES[i].repoLink}
              gitLink={CONTEUDO_CARTOES[i].gitLink}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}