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



const Card = ({ titulo, conteudo, imagem, alt, repoLink, gitLink }) => (
  <div 
  className="bg-[#222] min-w-[368px] w-auto h-auto 2xl:max-h-[900px] md:max-h-[700px] pt-5 p-7 mb-10 border border-[#bb700f] rounded-2xl text-[#bb700f] text-justify transition-all ease-out duration-[0.3s]">
    {/* Titulo do projetos */}
    <h2
      className="text-center text-2xl md:text-3xl font-semibold mb-5 text-[#bb8c4e]"
    >
      {titulo}
    </h2>

    <div className='md:grid lmd:grid-rows-3 lmd:grid-cols-4 grid-cols-3 grid-rows-4 gap-2 max-w-full'>
      {/* imagem */}
      <div className="col-span-3 row-span-3 lmd:pb-0 pb-4">
        <img className="2xl:max-h-[700px] max-h-[534px] rounded-xl" src={imagem} alt={alt} />
      </div>


        {/* conteudo */}
        <div className='h-24 md:pr-4 lmd:row-span-2 lmd:col-span-1 col-span-2 '>
          <p className="mt-2 lg:text-lg text-base">{conteudo}</p>
        </div>

        {/* Botões */}
        <div className='flex md:flex-col lmd:items-start lmd:justify-around md:items-end md:justify-around justify-between'>

          {/* Botão do repositorio */}
          <Link to={gitLink}>
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
          <Link to={repoLink}>
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
  </div>
);


export const FeaturedSliderComponent = () => {

  return (
    <div>
      <Splide options={{
        type: "loop",
        perPage: 1,
        gap: 150,
        breakpoints: {
          791: {
            perPage: 1,
            gap: '1rem'
          },
          445: {
            type: "slide",
            perPage: 1,
            gap: '1rem',
            padding: 0,
          },
        },
        padding: '2.5rem',
        speed: 1300,
        pagination: true,
        autoplay: true,
        arrows: false
      }}>
        {CONTEUDO_CARTOES.map((_, i) => (
          <SplideSlide key={i}>
            <Card
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