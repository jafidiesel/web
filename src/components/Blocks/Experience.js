import React from "react";
import { Row, Col } from "react-bootstrap";
import CardSection from "../Card/Card";
import data from '../../data/data';

function Experience(props) {
    return (
        <Row>
            <Col>
                <CardSection>
                <h2>Experience</h2>
                {data.experience.map(element => {
                    return (
                    <>
                    <small>{element.time}</small>
                        <h5><b>{element.company + ": "}</b>{element.rol}</h5>
                        <p>{element.description}</p>
                    </>
                    )
                })}
                </CardSection>
            </Col>
        </Row>
    );
}

export default Experience;