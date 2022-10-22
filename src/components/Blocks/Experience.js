import React from "react";
import CardSection from "../Card/Card";
import { css } from "aphrodite";
import styles from './styles';

const Experience = (props) => {
	const { experience } = props;
	if (!experience.length) return <></>;
	return (
		<CardSection>
			<h2 className={css(styles.title)}>Experience</h2>
			{experience.map((element, index) => {
				return (
					<div key={'time' + index}>
						<small>{element.time}</small>
						<h5 className={css(styles.subTitle)}>{element.company + ": "}<span className={css(styles.subTitleRole)}>{element.rol}</span></h5>
						<p>{element.description}</p>
					</div>
				)
			})}
		</CardSection>
	);
}

export default Experience;