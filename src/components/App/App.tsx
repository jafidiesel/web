import React from "react";

import Header from "../Blocks/Header/Header";
import Projects from "../Blocks/Projects";
import Experience from "../Blocks/Experience";
import Courses from "../Blocks/Courses";
import SocialLinks from "../Blocks/SocialLinks";
import Skills from "../Blocks/Skills";
import { css } from "aphrodite";
import styles from './styles';


const App = () => {
	return (
		<div className={css(styles.app)}>
			<Header />
			<SocialLinks />
			<Skills />
			<Experience />
			<Courses />
			<Projects />
		</div>
	);
}

export default App;
