import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css"
import { BsDisplay } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { Link } from "react-router-dom"
import img1 from '../../../assets/imgProjects/depositodeconhecimento.jpg'
import { useState } from 'react';

import './index.css'


const CONTEUDO_CARTOES = [
  {
    titulo: "Depósito de Conhecimento",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat nulla non quasia.",
    imagem: img1,
    alt: "img text",
    repoLink: "https://thomgomes.github.io/Portfolio_Thom_Gomes/",
    gitLink: "https://github.com/Thomgomes/Portfolio_Thom_Gomes",
  },
  {
    titulo: "Depósito de Conhecimento",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat nulla non quasi.",
    imagem: img1,
    alt: "img text",
    repoLink: "https://thomgomes.github.io/Portfolio_Thom_Gomes/",
    gitLink: "https://github.com/Thomgomes/Portfolio_Thom_Gomes",
  },
  {
    titulo: "Depósito de Conhecimento",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat nulla non quasi.",
    imagem: img1,
    alt: "img text",
    repoLink: "https://thomgomes.github.io/Portfolio_Thom_Gomes/",
    gitLink: "https://github.com/Thomgomes/Portfolio_Thom_Gomes",
  },
  {
    titulo: "Depósito de Conhecimento",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat nulla non quasi.",
    imagem: img1,
    alt: "img text",
    repoLink: "https://thomgomes.github.io/Portfolio_Thom_Gomes/",
    gitLink: "https://github.com/Thomgomes/Portfolio_Thom_Gomes",
  },
  {
    titulo: "Depósito de Conhecimento",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat nulla non quasi.",
    imagem: img1,
    alt: "img text",
    repoLink: "https://thomgomes.github.io/Portfolio_Thom_Gomes/",
    gitLink: "https://github.com/Thomgomes/Portfolio_Thom_Gomes",
  },
  {
    titulo: "Depósito de Conhecimento",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat nulla non quasi.",
    imagem: img1,
    alt: "img text",
    repoLink: "https://thomgomes.github.io/Portfolio_Thom_Gomes/",
    gitLink: "https://github.com/Thomgomes/Portfolio_Thom_Gomes",
  },
];

const Cartao = ({ titulo, conteudo, imagem, alt, repoLink, gitLink }) => (
  <div className="bg-[#222] w-full h-auto pt-5 p-7 border border-[#bb700f] rounded-2xl text-[#bb700f] text-justify transition-all ease-out duration-[0.3s]">
    {/* Titulo do projetos */}
    <h2
      className="text-center text-2xl md:text-3xl font-semibold mb-5 text-[#bb8c4e]"
    >
      {titulo}
    </h2>
    {/* imagem */}
    <div className="max-w-full">
      <img className="rounded-xl transition-all ease-out duration-[0.3s] hover:scale-105" src={imagem} alt={alt} />
    </div>
    {/* conteudo */}
    <div className='h-24 pr-4 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-[#d28d06] scrollbar-track-[#251123c7]'>
      <p className="mt-2">{conteudo}</p>
    </div>

    {/* Botões */}
    <div className='flex justify-between'>

      {/* Botão do repositorio */}
      <Link to={gitLink}>
        <div className=" -bottom-full right-12 
              group-hover:bottom-28 transition-all duration-700 z-50">
          <button
            className="flex gap-1 items-center py-2 px-2 bg-[#13131F] rounded-3xl border-2 border-[#bb700f] transition-all duration-300
          hover:scale-125 hover:bg-[#8b5207] hover:text-white
          ">
            Ver Repositório <BsGithub />
          </button>
        </div>
      </Link>

      {/* Botão do Deploy */}
      <Link to={repoLink}>
        <div className=" -bottom-full right-12 
              group-hover:bottom-10 transition-all duration-700 z-50">
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
        perPage: 3,
        breakpoints: {
          768:{
            perPage: 2
          },
          640: {
            perPage: 1
          },
        },
        perMove: 1,
        gap: '2rem',
        padding: '3.5rem',
        drag: 'free',
        snap: true,
        pagination: false,

      }}>
        {CONTEUDO_CARTOES.map((_, i) => (
          <SplideSlide key={i}>
            <Cartao
              titulo={CONTEUDO_CARTOES[i].titulo}
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