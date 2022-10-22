import { css } from "aphrodite";
import React from "react";
import CardSection from "../Card/Card";
import styles from './styles';

function Skills(props) {
	const { tech, softSkill } = props;
	if (!tech?.list?.length && softSkill?.list?.length) return <></>;
	return (
		<>
			{
				tech?.list?.length
				&& <div>
					<CardSection>
						<h3 className={css(styles.title)}>{tech.title}</h3>
						<ul>
							{tech.list.map((skill, index) => <li key={'skill-' + index}>{skill}</li>)}
						</ul>
					</CardSection>
				</div>
			}
			{
				softSkill?.list?.length &&
				<div>
					<CardSection>
						<h3 className={css(styles.title)}>{softSkill.title}</h3>
						<ul>
							{softSkill.list.map((skill, index) => <li key={'soft-' + index}>{skill}</li>)}
						</ul>
					</CardSection>
				</div>
			}

		</>
	)
}

export default Skills;