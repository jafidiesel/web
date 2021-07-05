import React from "react";
import { Row, Col } from "react-bootstrap";
import CardSection from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialLinks(props) {
	const {socialLinks} = props;
	if(!socialLinks.length) return <></>;
    return (
		<Row>
			<Col xl={{ span:10, offset: 1 }}>
				<CardSection className="link-section">
					{socialLinks.map((element, index) => {
						return (
							<a className="text-center" href={element.link} target="_blank" rel="noopener noreferrer" key={'link-'+index}>
								{element.text}
								<FontAwesomeIcon className="link-icon ml-2" icon={element.icon} />
							</a>
						)
					})}
				</CardSection>
			</Col>
		</Row>
    );
}

export default SocialLinks;