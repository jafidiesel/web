
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "aphrodite";
import styles from './styles';
import { faSoundcloud, faInstagram, faMixcloud, } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const SocialLinks = () => {
	return <div className={css(styles.linksContainer)}>
		<div className={css(styles.link)}>
			<a className={css(styles.linkIcon)} href="https://soundcloud.com/jafibravin-music" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faSoundcloud} className={css(styles.icon)} />
			</a>
		</div>
		<div className={css(styles.link)}>
			<a className={css(styles.linkIcon)} href="https://www.instagram.com/jafibravinmusic/" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faInstagram} className={css(styles.icon)} />
			</a>
		</div>
		<div className={css(styles.link)}>
			<a className={css(styles.linkIcon)} href="https://www.mixcloud.com/jafibravin" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faMixcloud} className={css(styles.icon)} />
			</a>
		</div>
		<div className={css(styles.link)}>
			<a className={css(styles.linkIcon)} href="mailto:jafibravin@gmail.com" aria-label="Jafi Bravin email address">
				<FontAwesomeIcon icon={faEnvelope} className={css(styles.icon)} />
			</a>
		</div>
	</div>
}

export default SocialLinks;