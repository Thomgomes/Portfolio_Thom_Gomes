import { useState, Children } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import './index.css'

// imagens
import img1 from '../../../assets/imgProjects/depositodeconhecimento.jpg'
import { FavoriteProjects } from "../favoritesProjects";

const VISIBILIDADE_MAXIMA = 3;
const CONTEUDO_CARTOES = [
  {
    titulo: "Depósito de Conhecimento",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat nulla non quasi.",
    imagem: img1,
    alt: "img text",
  },
  {
    titulo: "Depósito de Conhecimento",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat nulla non quasi.",
    imagem: img1,
    alt: "img text",
  },
  {
    titulo: "Depósito de Conhecimento",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat nulla non quasi.",
    imagem: img1,
    alt: "img text",
  },
  {
    titulo: "Depósito de Conhecimento",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat nulla non quasi.",
    imagem: img1,
    alt: "img text",
  },
  {
    titulo: "Depósito de Conhecimento",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat nulla non quasi.",
    imagem: img1,
    alt: "img text",
  },
  {
    titulo: "Depósito de Conhecimento",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat nulla non quasi.",
    imagem: img1,
    alt: "img text",
  },
];

const Cartao = ({ titulo, conteudo, imagem, alt }) => (
  <div className="cartao w-full h-auto p-8 border rounded-2xl text-[#9ca3af] text-justify transition-all ease-out duration-[0.3s]">
    {/* Titulo do projetos */}
    <h2
      className="text-center text-3xl font-semibold mb-3 text-[#1f2937]"
    >
      {titulo}
    </h2>
    {/* imagem */}
    <div className="max-w-full">
      <img className="rounded-xl" src={imagem} alt={alt} />
    </div>
    {/* conteudo */}
    <p>{conteudo}</p>
  </div>
);

const Slider = ({ children }) => {
  const [atualAtivo, setAtualAtivo] = useState(0)
  const TOTAL_DE_CARDS = CONTEUDO_CARTOES.length

  return (
    <div className="carrosel-geral relative w-[36rem] h-96 ">
      {atualAtivo > 0 && (
        <button
          className="navegacao esquerda text-white text-[5rem] absolute flex items-center justify-center top-1/2 z-10 cursor-pointer select-none"
          onClick={() => setAtualAtivo((i) => i - 1)}
        >
          <TiChevronLeftOutline />
        </button>
      )}
      {Children.map(children, (elementoFilho, i) => (
        <div
          className="conteudo-geral absolute w-full h-full transition-all ease-out duration-[0.3s]"
          key={i}
          style={{
            "--atualAtivo": i === atualAtivo ? 1 : 0,
            "--compensacao": (atualAtivo - i) / 3,
            "--direcao": Math.sign(atualAtivo - i),
            "--abs-compensacao": Math.abs(atualAtivo - i) / 3,
            pointerEvents: atualAtivo === i ? "auto" : "none",
            opacity:
              Math.abs(atualAtivo - i) >= VISIBILIDADE_MAXIMA ? "0" : "1",
            display:
              Math.abs(atualAtivo - i) > VISIBILIDADE_MAXIMA ? "none" : "block",
          }}
        >
          {elementoFilho}
        </div>
      ))}
      {atualAtivo < TOTAL_DE_CARDS - 1 && (
        <button
          className="navegacao direita text-white text-[5rem] absolute flex items-center justify-center top-1/2 z-10 cursor-pointer select-none right-0"
          onClick={() => setAtualAtivo((i) => i + 1)}
        >
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  )
}

const SliderApp = () => (
  <div>
    <Slider>
      {CONTEUDO_CARTOES.map((_, i) => (
        <Cartao
          key={i}
          titulo={CONTEUDO_CARTOES[i].titulo}
          conteudo={CONTEUDO_CARTOES[i].conteudo}
          imagem={CONTEUDO_CARTOES[i].imagem}
          alt={CONTEUDO_CARTOES[i].alt}
        />
      ))}
      <FavoriteProjects
                fadein='left'
                title="Em breve mais projetos"
              />
    </Slider>
  </div>
);

export default SliderApp;