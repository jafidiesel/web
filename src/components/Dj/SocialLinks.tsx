import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "aphrodite";
import styles from "./styles";
import {
  faSoundcloud,
  faInstagram,
  faMixcloud,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialLinks = () => {
  return (
    <div className={css(styles.linksContainer)}>
      <a
        href="https://soundcloud.com/jafibravin-music"
        target="_blank"
        rel="noopener noreferrer"
        id="social-link-soundcloud"
      >
        <FontAwesomeIcon icon={faSoundcloud} className={css(styles.icon)} />
      </a>
      <a
        href="https://www.instagram.com/jafibravinmusic/"
        target="_blank"
        rel="noopener noreferrer"
        id="social-link-instagram"
      >
        <FontAwesomeIcon icon={faInstagram} className={css(styles.icon)} />
      </a>
      <a
        href="https://www.mixcloud.com/jafibravin"
        target="_blank"
        rel="noopener noreferrer"
        id="social-link-mixcloud"
      >
        <FontAwesomeIcon icon={faMixcloud} className={css(styles.icon)} />
      </a>
      <a
        href="https://www.youtube.com/channel/UCFufW_kIdr6p5q69sT944tQ"
        target="_blank"
        rel="noopener noreferrer"
        id="social-link-youtube"
      >
        <FontAwesomeIcon icon={faYoutube} className={css(styles.icon)} />
      </a>
      <a
        href="mailto:jafibravin@gmail.com"
        aria-label="Jafi Bravin email address"
        id="social-link-email"
      >
        <FontAwesomeIcon icon={faEnvelope} className={css(styles.icon)} />
      </a>
    </div>
  );
};

export default SocialLinks;
