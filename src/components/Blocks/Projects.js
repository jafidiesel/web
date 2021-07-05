import React from "react";
import { Row, Col } from "react-bootstrap";
import CardSection from "../Card/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function Projects(props) {
	const {projects} = props;
	if(!projects.length) return <></>;
    return (
        <>
            <Row>
                <Col xl={{ span:10, offset: 1 }}>
                    <CardSection>
                        <h2 className="text-center title">Projects</h2>
                    </CardSection>
                </Col>
            </Row>
            <Row>
                { projects.map((project, index) => {
                        return (
                        <Col key={'project' + index} md={4} xl={{ span:10, offset: 1 }}>
                            <CardSection>
                                <h5 className="title">{project.title}</h5>
                                <p>{project.description}</p>
                                <a className="link" href={project.link} target="_blank" rel="noopener noreferrer">
									<p>
										Link
										<FontAwesomeIcon className="link-icon ml-1" icon={faExternalLinkAlt} />
									</p>
								</a>
								{
									project.demo
										? <a className="link" href={project.demo} target="_blank" rel="noopener noreferrer">
											<p>
												Demo
												<FontAwesomeIcon className="link-icon ml-1" icon={faExternalLinkAlt} />
											</p>
										</a>
										: null 
								}
                                <footer className="keywords">
                                    {project.keyword.map((element, index) => (
                                        <span key={'keyword' + index} className="keyword">#{element}</span>
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