import React from "react";
import { Row, Col } from "react-bootstrap";
import CardSection from "../Card/Card";
import data from '../../data/data';

function Courses(props) {
    return (
        <Row>
            <Col>
                <CardSection>
                <h2>Courses</h2>
                {data.courses.map(course => {
                    return (
                    <>
                        <h6><b>{course.title + ": "}</b><small>{course.platform}</small></h6>
                    </>
                    )
                })}
                </CardSection>
            </Col>
        </Row>
    );
}

export default Courses;