import React from 'react';
import CardSection from '../../Card/Card';
import { css } from "aphrodite";
import styles from './styles';

const Header = (props) => {
	const { header } = props;
	return (
		<CardSection fluid={true}>
			<div className={css(styles.header)}>
				<div className={css(styles.text)}>
					<h1 className={css(styles.title)}>{header.title}</h1>
					{
						header.subtitle
							&& <h4 className={css(styles.subtitle)}>{header.subtitle}</h4>
					}
				</div>
				<img src={header.pictureUrl} className={css(styles.image)} alt="profile" />
			</div>
		</CardSection>
	);
}

export default Header;
