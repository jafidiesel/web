import React from "react";
import { Row, Col } from "react-bootstrap";
import CardSection from "../Card/Card";

function Courses(props) {
	const {courses} = props;
	if(!courses.length) return <></>;
    return (
        <Row>
            <Col xl={{ span:10, offset: 1 }}>
                <CardSection>
                <h2 className="title">Courses</h2>
					{courses.map((course, index) => {
						return (
							<h6 key={'course' + index}><span className="sub-title">{course.title + ": "}</span><small>{course.platform}</small></h6>
						)
					})}
                </CardSection>
            </Col>
        </Row>
    );
}

export default Courses;