import React from "react";
import { Row, Col } from "react-bootstrap";
import CardSection from "../Card/Card";

function Skills(props) {
	const {tech, softSkill} = props;
	if(!tech?.list?.length && softSkill?.list?.length) return <></>;
	return (
		<Row>
			{
				tech?.list?.length
					? <Col xl={{ span: softSkill?.list?.length ? 5 : 10 , offset: 1 }}>
						<CardSection>
							<h3 className="title">{tech.title}</h3>
							<ul>
								{tech.list.map((skill, index) => <li key={'skill-'+index}>{skill}</li>)}
							</ul>
						</CardSection>
					</Col>
					: null
			}
			{
				softSkill?.list?.length
					? <Col xl={{ span: tech?.list?.length ? 5 : 10, offset: tech?.list?.length ? 0 : 1 }}>
						<CardSection>
							<h3 className="title">{softSkill.title}</h3>
							<ul>
								{softSkill.list.map((skill, index) =><li key={'soft-'+index}>{skill}</li>)}
							</ul>
						</CardSection>
					</Col>
					: null
			}
			
		</Row>
	)
}

export default Skills;