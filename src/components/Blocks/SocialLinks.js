import React from "react";
import CardSection from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from 'aphrodite';
import styles from './styles';

const SocialLinks = (props) => {
	const { socialLinks } = props;
	if (!socialLinks.length) return <></>;
	return (
		<CardSection className={css(styles.linkSection)}>
			{socialLinks.map((element, index) => {
				return (
					<a className={css(styles.linkIcon)} href={element.link} target="_blank" rel="noopener noreferrer" key={'link-' + index}>
						{element.text}
						<FontAwesomeIcon icon={element.icon} />
					</a>
				)
			})}
		</CardSection>
	);
}

export default SocialLinks;