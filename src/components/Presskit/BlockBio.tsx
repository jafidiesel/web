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
          <h2>BIOGRAFIA</h2>

          <p>
            Javier Bravin, better known as Jafi Bravin, is a talented DJ hailing from Mendoza,
            Argentina. His passion for electronic music has led him to explore various genres,
            excelling in the world of organic house, progressive, and melodic house.
            <br />
            <br />
            His career as a DJ began in 2022, and since then, he has dedicated time and effort to
            his training. He studied DJing with the renowned Luciano Neri at Studio Beatroom, where
            he acquired a solid foundation in the essential skills for any DJ. Additionally, Jafi
            honed his skill in handling CDJs under the guidance of Nacho Montero, also known as Time
            Assault, at Studio Beatroom.
            <br />
            <br />
            Throughout his career, Jafi Bravin has had the opportunity to perform at various bars in
            the local scene, including iconic venues like Lúppolo Imperial, Rabbit Lounge, Unión
            Cervecera, and Lúppolo Tienda Cervecera.
            <br />
            <br />
            One of Jafi Bravin's most noteworthy achievements is his role as a resident DJ on Ibiza
            Stardust Radio, where he hosts his own program titled "Organic Connection." As an
            artist, Jafi seeks not only to get the dance floor moving but also to create magical
            moments where the music flows, and the audience enters a deep trance. His focus on
            keeping the fun alive in the DJ booth and on the dance floor is a hallmark of his style
            and his dedication to providing a unique musical experience to his audience.
            <br />
          </p>
          <h2>@jafibravin</h2>
        </div>
      </div>
    </>
  );
};
export default BlockBio;
