import { css } from "aphrodite";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Links = () => (
  <div>
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
            GIT Podcast Session 62 # Jafi Bravin Into The Mix 🇩🇪
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

export default Links;
