import React from "react";
import { css } from "aphrodite";
import stylesBio from "./stylesBio";
import jafiFoto02 from "./jafi02.jpg";

const BlockBio = () => {
  return (
    <>
      <div className={css(stylesBio.sectionBio)}>
        <div className={css(stylesBio.photoContainer)}>
          <img
            src={jafiFoto02}
            className={css(stylesBio.photoBio, stylesBio.gradientEffect)}
            alt=""
          />
        </div>

        <div className={css(stylesBio.bioContent)}>
          <h2>BIO</h2>

          <p className={css(stylesBio.bioContentText)}>
            Javier Bravin, más conocido como Jafi Bravin, es un DJ talentoso originario de Mendoza,
            Argentina. Su versatilidad musical le permite moverse con facilidad entre géneros como
            el organic house y el hard techno, demostrando una habilidad única para adaptarse y
            crear sets que capturan la esencia de cada estilo.
            <br />
            <br />
            Para perfeccionar su arte, Jafi Bravin estudió con destacados mentores como Luciano Neri
            y Nacho Montero, conocido como Time Assault, en Studio Beatroom. Esta formación le ha
            proporcionado una base sólida en las técnicas de DJing, así como un profundo
            conocimiento del manejo de los CDJs, elementos esenciales en su carrera.
            <br />
            <br />
            En la pista de baile, Jafi Bravin busca más que solo poner a la audiencia a bailar; su
            objetivo es crear una experiencia inmersiva donde la música fluya de manera orgánica y
            lleve a la audiencia a un estado de trance profundo. Con su enfoque en la diversión y la
            conexión con el público, Jafi transforma cada presentación en un viaje musical
            inolvidable.
            <br />
          </p>
          <a className={css(stylesBio.jafiDjLink)} href="https://www.instagram.com/jafi.dj">
            @jafi.dj
          </a>
        </div>
      </div>
    </>
  );
};
export default BlockBio;
