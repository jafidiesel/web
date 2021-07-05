import React from "react";
import { Container } from "react-bootstrap";

import Header from "../Header/Header";
import Projects from "../Blocks/Projects";
import Experience from "../Blocks/Experience";
import Courses from "../Blocks/Courses";
import SocialLinks from "../Blocks/SocialLinks";
import Skills from "../Blocks/Skills";

import data from '../../data/data';

import "./App.scss";

function App() {
	const {header, socialLinks, softSkill, tech, experience, courses, projects} = data;
	return (
		<Container>
			<Header header={header} />
			<SocialLinks socialLinks={socialLinks} />
			<Skills tech={tech} softSkill={softSkill} />
			<Experience experience={experience} />
			<Courses courses={courses}/>
			<Projects projects={projects}/>
		</Container>
	);
}

export default App;
