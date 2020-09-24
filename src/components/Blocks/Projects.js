import React from "react";
import { Row, Col } from "react-bootstrap";
import CardSection from "../Card/Card";
import data from '../../data/data';

function Projects(props) {
    return (
        <>
            <Row>
                <Col>
                    <CardSection>
                        <h2 className="text-center">Projects</h2>
                    </CardSection>
                </Col>
            </Row>
            <Row>
                { data.projects.map(project => {
                        return (
                        <Col md={4}>
                            <CardSection>
                                <h5><b>{project.title}</b></h5>
                                <p>{project.description}</p>
                            </CardSection>
                        </Col>
                        )
                    })}
            </Row>
        </>
    );
}

export default Projects;