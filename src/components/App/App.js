import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header/Header";
import CardSection from "../Card/Card";

import Projects from "../Blocks/Projects";
import Experience from "../Blocks/Experience";
import Courses from "../Blocks/Courses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import "./App.scss";

function App() {
	return (
		<Container>
			<Row>
				<Col xl={{ span:10, offset: 1 }}>
					<Header />
				</Col>
			</Row>
			<Row>
				<Col xl={{ span:10, offset: 1 }}>
					<CardSection className="link-section">
						<a className="text-center" href="jafibravin.com/cv-es" target="_blank" rel="noopener noreferrer">
							Resume
							<FontAwesomeIcon className="link-icon ml-2" icon={faFilePdf} />
						</a>
						<a className="text-center" href="https://www.linkedin.com/in/javierbravin/" target="_blank" rel="noopener noreferrer">
							LinkedIn
							<FontAwesomeIcon className="link-icon ml-2" icon={faLinkedin} />
						</a>
						<a className="text-center" href="https://github.com/jafidiesel" target="_blank" rel="noopener noreferrer">
							Github
							<FontAwesomeIcon className="link-icon ml-2" icon={faGithub} />
						</a>
					</CardSection>
				</Col>
			</Row>
			<Row>
				<Col xl={{ span:5, offset: 1 }}>
					<CardSection>
						<h3 className="title">Technologies</h3>
						<ul>
							<li>JS</li>
							<li>React</li>
							<li>Node</li>
							<li>SQL</li>
						</ul>
					</CardSection>
				</Col>
				<Col xl={{ span:5 }}>
					<CardSection>
						<h3 className="title">Skills</h3>
						<ul>
							<li>Problem-solving oriented.</li>
							<li>Business analysis capacity.</li>
							<li>Cooperative work.</li>
							<li>Active listener.</li>
						</ul>
					</CardSection>
				</Col>
			</Row>
			<Experience />
			<Courses />
			<Projects />
		</Container>
	);
}

export default App;
