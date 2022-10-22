import React from "react";
import CardSection from "../Card/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { css } from "aphrodite";
import styles from './styles';

const Projects = (props) => {
	const { projects } = props;
	if (!projects.length) return <></>;
	return (
		<>
			<div>
				<CardSection>
					<h2 className={css(styles.title, styles.textCenter)}>Projects</h2>
				</CardSection>
			</div>
			<div>
				{projects.map((project, index) => {
					return (
						<div>
							<CardSection>
								<h5 className={css(styles.title)}>{project.title}</h5>
								<p>{project.description}</p>
								<a className={css(styles.linkIcon)} href={project.link} target="_blank" rel="noopener noreferrer">
									Link
									<FontAwesomeIcon icon={faExternalLinkAlt} />
								</a>
								{
									project.demo
									&& <a className={css(styles.linkIcon)} href={project.demo} target="_blank" rel="noopener noreferrer">
										Demo
										<FontAwesomeIcon icon={faExternalLinkAlt} />
									</a>
								}
								<div>
									{project.keyword.map((element, index) => (
										<span key={'keyword' + index} className={css(styles.keyword)}>#{element}</span>
									))}
								</div>
							</CardSection>
						</div>
					)
				})}
			</div>
		</>
	);
}

export default Projects;