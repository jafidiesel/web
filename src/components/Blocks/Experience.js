import React from "react";
import { Row, Col } from "react-bootstrap";
import CardSection from "../Card/Card";

function Experience(props) {
	const {experience} = props;
	if(!experience.length) return <></>;
    return (
        <Row>
            <Col xl={{ span:10, offset: 1 }}>
                <CardSection>
					<h2 className="title">Experience</h2>
					{experience.map((element, index) => {
						return (
							<div key={'time' + index}>
								<small>{element.time}</small>
								<h5 className="sub-title">{element.company + ": "}<span className="role">{element.rol}</span></h5>
								<p>{element.description}</p>
							</div>
						)
					})}
                </CardSection>
            </Col>
        </Row>
    );
}

export default Experience;