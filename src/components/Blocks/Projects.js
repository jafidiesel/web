import React from "react";
import { Row, Col } from "react-bootstrap";
import CardSection from "../Card/Card";
import data from '../../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function Projects(props) {
    return (
        <>
            <Row>
                <Col>
                    <CardSection>
                        <h2 className="text-center title">Projects</h2>
                    </CardSection>
                </Col>
            </Row>
            <Row>
                { data.projects.map(project => {
                        return (
                        <Col md={4}>
                            <CardSection>
                                <h5 className="title">{project.title}</h5>
                                <p>{project.description}</p>
                                <a className="link" href={project.link} target="_blank" rel="noopener noreferrer"> {project.link} <FontAwesomeIcon className="link-icon" icon={faExternalLinkAlt} /></a>
                                <footer className="keywords">
                                    {project.keyword.map(element => (
                                        <span className="keyword">#{element}</span>
                                    ))}
                                </footer>
                            </CardSection>
                        </Col>
                        )
                    })}
            </Row>
        </>
    );
}

export default Projects;