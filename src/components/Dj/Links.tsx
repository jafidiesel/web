import { css } from "aphrodite";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faComment,
  faAngleUp,
  faAngleDown,
  faCopy
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Links = () => {
  const [bioCollapse, setBioCollapse] = useState(true);
  const [spanishFlag, setSpanishFlag] = useState(false);

  const textEs =
    "Javier Bravin, más conocido como Jafi Bravin, es un talentoso DJ originario de Mendoza, Argentina. Su pasión por la música electrónica lo ha llevado a explorar diversos géneros, destacándose en el mundo del organic house, progressive y melodic house. Su carrera como DJ comenzó en el año 2022, y desde entonces ha dedicado tiempo y esfuerzo en su formación. Estudió Djing con el renombrado Luciano Neri en Studio Beatroom, donde adquirió una base sólida en las habilidades necesarias de todo DJ. Además, Jafi perfeccionó su destreza en el manejo de CDJs bajo la tutela de Nacho Montero, también conocido como Time Assault, en Studio Beatroom. A lo largo de su carrera, Jafi Bravin ha tenido la oportunidad de presentarse en diversos bares de la escena local, incluyendo lugares emblemáticos como Lúppolo Imperial, Rabbit Lounge, Unión Cervecera y Lúppolo Tienda Cervecera. Uno de los logros más destacados de Jafi Bravin es su rol como DJ residente en Ibiza Stardust Radio, donde presenta su propio programa titulado 'Organic Connection'. En su papel como artista, Jafi busca no solo hacer vibrar la pista de baile, sino también crear momentos mágicos donde la música fluye y la audiencia entra en un trance profundo. Su enfoque en mantener la diversión en la cabina y en la pista de baile es un sello distintivo de su estilo y su compromiso con la experiencia musical única que ofrece a su audiencia.";

  const textEn =
    "Javier Bravin, better known as Jafi Bravin, is a talented DJ hailing from Mendoza, Argentina. His passion for electronic music has led him to explore various genres, excelling in the world of organic house, progressive, and melodic house. His career as a DJ began in 2022, and since then, he has dedicated time and effort to his training. He studied DJing with the renowned Luciano Neri at Studio Beatroom, where he acquired a solid foundation in the essential skills for any DJ. Additionally, Jafi honed his skill in handling CDJs under the guidance of Nacho Montero, also known as Time Assault, at Studio Beatroom. Throughout his career, Jafi Bravin has had the opportunity to perform at various bars in the local scene, including iconic venues like Lúppolo Imperial, Rabbit Lounge, Unión Cervecera, and Lúppolo Tienda Cervecera. One of Jafi Bravin's most noteworthy achievements is his role as a resident DJ on Ibiza Stardust Radio, where he hosts his own program titled 'Organic Connection.' As an artist, Jafi seeks not only to get the dance floor moving but also to create magical moments where the music flows, and the audience enters a deep trance. His focus on keeping the fun alive in the DJ booth and on the dance floor is a hallmark of his style and his dedication to providing a unique musical experience to his audience.";

  return (
    <div>
      <div className={css(styles.itemLinkOutter)}>
        <div className={css(styles.itemLink)} id="link-card-organic-connection-003">
          <div className={css(styles.itemLinkInner, styles.itemLinkInnerStart)}>
            <div onClick={() => setBioCollapse(!bioCollapse)} className={css(styles.bioIcon)}>
              <FontAwesomeIcon icon={faComment} className={css(styles.darkIcon)} />
              Bio
            </div>
            <div className={css(styles.bioText, bioCollapse && styles.bioTextWrapped)}>
              {spanishFlag ? (
                <div>
                  <p>
                    Javier Bravin, más conocido como Jafi Bravin, es un talentoso DJ originario de
                    Mendoza, Argentina. Su pasión por la música electrónica lo ha llevado a explorar
                    diversos géneros, destacándose en el mundo del organic house, progressive y
                    melodic house.
                  </p>
                  <p>
                    Su carrera como DJ comenzó en el año 2022, y desde entonces ha dedicado tiempo y
                    esfuerzo en su formación. Estudió Djing con el renombrado Luciano Neri en Studio
                    Beatroom, donde adquirió una base sólida en las habilidades necesarias de todo
                    DJ. Además, Jafi perfeccionó su destreza en el manejo de CDJs bajo la tutela de
                    Nacho Montero, también conocido como Time Assault, en Studio Beatroom.
                  </p>
                  <p>
                    A lo largo de su carrera, Jafi Bravin ha tenido la oportunidad de presentarse en
                    diversos bares de la escena local, incluyendo lugares emblemáticos como Lúppolo
                    Imperial, Rabbit Lounge, Unión Cervecera y Lúppolo Tienda Cervecera.
                  </p>
                  <p>
                    Uno de los logros más destacados de Jafi Bravin es su rol como DJ residente en
                    Ibiza Stardust Radio, donde presenta su propio programa titulado "Organic
                    Connection". En su papel como artista, Jafi busca no solo hacer vibrar la pista
                    de baile, sino también crear momentos mágicos donde la música fluye y la
                    audiencia entra en un trance profundo. Su enfoque en mantener la diversión en la
                    cabina y en la pista de baile es un sello distintivo de su estilo y su
                    compromiso con la experiencia musical única que ofrece a su audiencia.
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    Javier Bravin, better known as Jafi Bravin, is a talented DJ hailing from
                    Mendoza, Argentina. His passion for electronic music has led him to explore
                    various genres, excelling in the world of organic house, progressive, and
                    melodic house.
                  </p>
                  <p>
                    His career as a DJ began in 2022, and since then, he has dedicated time and
                    effort to his training. He studied DJing with the renowned Luciano Neri at
                    Studio Beatroom, where he acquired a solid foundation in the essential skills
                    for any DJ. Additionally, Jafi honed his skill in handling CDJs under the
                    guidance of Nacho Montero, also known as Time Assault, at Studio Beatroom.
                  </p>
                  <p>
                    Throughout his career, Jafi Bravin has had the opportunity to perform at various
                    bars in the local scene, including iconic venues like Lúppolo Imperial, Rabbit
                    Lounge, Unión Cervecera, and Lúppolo Tienda Cervecera.
                  </p>
                  <p>
                    One of Jafi Bravin's most noteworthy achievements is his role as a resident DJ
                    on Ibiza Stardust Radio, where he hosts his own program titled "Organic
                    Connection." As an artist, Jafi seeks not only to get the dance floor moving but
                    also to create magical moments where the music flows, and the audience enters a
                    deep trance. His focus on keeping the fun alive in the DJ booth and on the dance
                    floor is a hallmark of his style and his dedication to providing a unique
                    musical experience to his audience.
                  </p>
                </div>
              )}

              <div className={css(styles.bioTextIcons)}>
                <div
                  className={css(styles.bioTextIcon)}
                  onClick={() => setSpanishFlag(!spanishFlag)}
                >
                  {spanishFlag ? <>🇺🇸</> : <>🇪🇸</>}
                </div>
                <FontAwesomeIcon
                  icon={faCopy}
                  className={css(styles.darkIcon, styles.bioTextIcon)}
                  onClick={() => {
                    navigator.clipboard.writeText(spanishFlag ? textEs : textEn);
                  }}
                />
              </div>
            </div>
            {bioCollapse ? (
              <FontAwesomeIcon
                icon={faAngleDown}
                className={css(styles.darkIcon, styles.collapseIcon)}
                onClick={() => setBioCollapse(!bioCollapse)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faAngleUp}
                className={css(styles.darkIcon, styles.collapseIcon)}
                onClick={() => setBioCollapse(!bioCollapse)}
              />
            )}
          </div>
        </div>
      </div>
      <div className={css(styles.itemLinkOutter)}>
        <a
          href="https://soundcloud.com/ibizastardustradio/jafi-bravin-organic-connection-004"
          target="_blank"
          rel="noopener noreferrer"
          className={css(styles.itemLink)}
          id="link-card-organic-connection-004"
        >
          <div className={css(styles.itemLinkInner)}>
            <div>
              <FontAwesomeIcon icon={faSoundcloud} className={css(styles.darkIcon)} />
              Organic Connection #004 - Ibiza Stardust Radio (🇪🇸)
            </div>
            <FontAwesomeIcon icon={faExternalLinkAlt} className={css(styles.darkIcon)} />
          </div>
        </a>
      </div>
      <div className={css(styles.itemLinkOutter)}>
        <a
          href="https://soundcloud.com/ibizastardustradio/jafi-bravin-organic-connection-003"
          target="_blank"
          rel="noopener noreferrer"
          className={css(styles.itemLink)}
          id="link-card-organic-connection-003"
        >
          <div className={css(styles.itemLinkInner)}>
            <div>
              <FontAwesomeIcon icon={faSoundcloud} className={css(styles.darkIcon)} />
              Organic Connection #003 - Ibiza Stardust Radio (🇪🇸)
            </div>
            <FontAwesomeIcon icon={faExternalLinkAlt} className={css(styles.darkIcon)} />
          </div>
        </a>
      </div>
      <div className={css(styles.itemLinkOutter)}>
        <a
          href="https://soundcloud.com/ibizastardustradio/jafi-bravin-organic-connection-002"
          target="_blank"
          rel="noopener noreferrer"
          className={css(styles.itemLink)}
          id="link-card-organic-connection-002"
        >
          <div className={css(styles.itemLinkInner)}>
            <div>
              <FontAwesomeIcon icon={faSoundcloud} className={css(styles.darkIcon)} />
              Organic Connection #002 - Ibiza Stardust Radio (🇪🇸)
            </div>
            <FontAwesomeIcon icon={faExternalLinkAlt} className={css(styles.darkIcon)} />
          </div>
        </a>
      </div>
      <div className={css(styles.itemLinkOutter)}>
        <a
          href="https://soundcloud.com/ibizastardustradio/jafi-bravin-organic-connection"
          target="_blank"
          rel="noopener noreferrer"
          className={css(styles.itemLink)}
          id="link-card-organic-connection"
        >
          <div className={css(styles.itemLinkInner)}>
            <div>
              <FontAwesomeIcon icon={faSoundcloud} className={css(styles.darkIcon)} />
              Organic Connection #001 - Ibiza Stardust Radio (🇪🇸)
            </div>
            <FontAwesomeIcon icon={faExternalLinkAlt} className={css(styles.darkIcon)} />
          </div>
        </a>
      </div>
      <div className={css(styles.itemLinkOutter)}>
        <a
          href="https://soundcloud.com/gefangenintrance/git-podcast-session-77-jafi-bravin-into-the-mix"
          target="_blank"
          rel="noopener noreferrer"
          className={css(styles.itemLink)}
          id="link-card-git-podcast-session-77"
        >
          <div className={css(styles.itemLinkInner)}>
            <div>
              <FontAwesomeIcon icon={faSoundcloud} className={css(styles.darkIcon)} />
              GIT Podcast Session 77 # Jafi Bravin Into The Mix (🇩🇪)
            </div>
            <FontAwesomeIcon icon={faExternalLinkAlt} className={css(styles.darkIcon)} />
          </div>
        </a>
      </div>
      <div className={css(styles.itemLinkOutter)}>
        <a
          href="https://soundcloud.com/jafibravin-music/set-002-luppulo"
          target="_blank"
          rel="noopener noreferrer"
          className={css(styles.itemLink)}
          id="link-card-set-002"
        >
          <div className={css(styles.itemLinkInner)}>
            <div>
              <FontAwesomeIcon icon={faSoundcloud} className={css(styles.darkIcon)} />
              Set 002 - Luppulo
            </div>
            <FontAwesomeIcon icon={faExternalLinkAlt} className={css(styles.darkIcon)} />
          </div>
        </a>
      </div>
      <div className={css(styles.itemLinkOutter)}>
        <a
          href="https://soundcloud.com/gefangenintrance/git-podcast-session-62-jafi-bravin-into-the-mix"
          target="_blank"
          rel="noopener noreferrer"
          className={css(styles.itemLink)}
          id="link-card-git-podcast-session-62"
        >
          <div className={css(styles.itemLinkInner)}>
            <div>
              <FontAwesomeIcon icon={faSoundcloud} className={css(styles.darkIcon)} />
              GIT Podcast Session 62 # Jafi Bravin Into The Mix (🇩🇪)
            </div>
            <FontAwesomeIcon icon={faExternalLinkAlt} className={css(styles.darkIcon)} />
          </div>
        </a>
      </div>
      <div className={css(styles.itemLinkOutter)}>
        <a
          href="https://www.youtube.com/watch?v=tGHOxAtj5t8"
          target="_blank"
          rel="noopener noreferrer"
          className={css(styles.itemLink)}
          id="link-card-after-movie-beatroom-showcase-2022"
        >
          <div className={css(styles.itemLinkInner)}>
            <div>
              <FontAwesomeIcon icon={faYoutube} className={css(styles.darkIcon)} />
              After Movie - Beatroom showcase 2022
            </div>
            <FontAwesomeIcon icon={faExternalLinkAlt} className={css(styles.darkIcon)} />
          </div>
        </a>
      </div>
      <div className={css(styles.itemLinkOutter)}>
        <a
          href="https://soundcloud.com/jafibravin-music/set-001-progressive"
          target="_blank"
          rel="noopener noreferrer"
          className={css(styles.itemLink)}
          id="link-card-set-001"
        >
          <div className={css(styles.itemLinkInner)}>
            <div>
              <FontAwesomeIcon icon={faSoundcloud} className={css(styles.darkIcon)} />
              Set 001 - Progressive
            </div>
            <FontAwesomeIcon icon={faExternalLinkAlt} className={css(styles.darkIcon)} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Links;
