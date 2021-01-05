import React from "react";
import { Row, Col } from "react-bootstrap";
import CardSection from "../Card/Card";
import data from '../../data/data';

function Courses(props) {
    return (
        <Row>
            <Col>
                <CardSection>
                <h2 className="title">Courses</h2>
                {data.courses.map(course => {
                    return (
                    <>
                        <h6><span className="sub-title">{course.title + ": "}</span><small>{course.platform}</small></h6>
                    </>
                    )
                })}
                </CardSection>
            </Col>
        </Row>
    );
}

export default Courses;