import React from "react";

import Header from "../Blocks/Header/Header";
import Projects from "../Blocks/Projects";
import Experience from "../Blocks/Experience";
import Courses from "../Blocks/Courses";
import SocialLinks from "../Blocks/SocialLinks";
import Skills from "../Blocks/Skills";
import data from '../../data/data';
import { css } from "aphrodite";
import styles from './styles';

const App = () => {
	const {header, socialLinks, softSkill, tech, experience, courses, projects} = data;
	return (
		<div className={css(styles.app)}>
			<Header header={header} />
			<SocialLinks socialLinks={socialLinks} />
			<Skills tech={tech} softSkill={softSkill} />
			<Experience experience={experience} />
			<Courses courses={courses}/>
			<Projects projects={projects}/>
		</div>
	);
}

export default App;
