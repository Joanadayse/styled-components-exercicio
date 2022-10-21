import React from "react";
// import {Main1} from "../Main/styled"
import CardVideo from "../Main/CardVideo";
import { Main1 } from "./styled";

export function Main(props){
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };
    

    return (

      <Main1>
         <nav className="menu-vertical">
        <ul>
          <li className="botoes-meunu-vertical">Início</li>
          <li className="botoes-meunu-vertical">Em alta</li>
          <li className="botoes-meunu-vertical">Inscrições</li>
          <hr />
          <li className="botoes-meunu-vertical">Originais</li>
          <li className="botoes-meunu-vertical">Histórico</li>
        </ul>
        </nav>

        <section className="painel-de-videos">
        <CardVideo
          image1={card1.imagemDoVideo}
          titulo={card1.titulo}
          textoAlternativo={card1.textoAlternativo}
        />
      </section>
    </Main1>
    )
}