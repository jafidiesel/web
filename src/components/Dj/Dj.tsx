import React from 'react';
import { css } from "aphrodite";
import styles from './styles';
import Header from './Header';
import { Helmet } from "react-helmet";
import SocialLinks from './SocialLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSoundcloud } from '@fortawesome/free-brands-svg-icons'


const Dj = () => {
	return (
		<div className={css(styles.outter)}>
			<Helmet>
				<title>Jafi Bravin Music</title>

			</Helmet>
			<div className={css(styles.inner)}>
				<Header />
				<SocialLinks />
				<div className={css(styles.itemLinkOutter)}>
					<a href="https://www.youtube.com/watch?v=tGHOxAtj5t8" target="_blank" rel="noopener noreferrer" className={css(styles.itemLink)}>
						<div className={css(styles.itemLinkInner)}>
							<FontAwesomeIcon icon={faYoutube} className={css(styles.darkIcon)} />
							After Movie - Beatroom showcase 2022
						</div>
					</a>
				</div>
				<div className={css(styles.itemLinkOutter)}>
					<a href="https://soundcloud.com/jafibravin-music/set-002-luppulo" target="_blank" rel="noopener noreferrer" className={css(styles.itemLink)}>
						<div className={css(styles.itemLinkInner)}>
							<FontAwesomeIcon icon={faSoundcloud} className={css(styles.darkIcon)} />
							Set 002 - Luppulo
						</div>
					</a>
				</div>
				<div className={css(styles.itemLinkOutter)}>
					<a href="https://soundcloud.com/gefangenintrance/git-podcast-session-62-jafi-bravin-into-the-mix" target="_blank" rel="noopener noreferrer" className={css(styles.itemLink)}>
						<div className={css(styles.itemLinkInner)}>
							<FontAwesomeIcon icon={faSoundcloud} className={css(styles.darkIcon)} />
							GIT Podcast Session 62 # Jafi Bravin Into The Mix
						</div>
					</a>
				</div>
				<div className={css(styles.itemLinkOutter)}>
					<a href="https://soundcloud.com/jafibravin-music/set-001-progressive" target="_blank" rel="noopener noreferrer" className={css(styles.itemLink)}>
						<div className={css(styles.itemLinkInner)}>
							<FontAwesomeIcon icon={faSoundcloud} className={css(styles.darkIcon)} />
							Set 001 - Progressive
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Dj;