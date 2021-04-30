import React from "react";
import { Row, Col } from "react-bootstrap";
import CardSection from "../Card/Card";
import data from '../../data/data';

function Experience(props) {
    return (
        <Row>
            <Col xl={{ span:10, offset: 1 }}>
                <CardSection>
					<h2 className="title">Experience</h2>
					{data.experience.map((element, index) => {
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