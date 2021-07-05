import React from 'react';
import CardSection from '../Card/Card';
import '../../styles/_header.scss';
import { Row, Col } from 'react-bootstrap';

function Header(props) {
	const {header} = props;
    return (
		<Row>
			<Col xl={{ span:10, offset: 1 }}>
				<CardSection fluid={true}>
					<div className="Header">
						<div className="Text">
							<h1 className="title">{header.title}</h1>
							{
								header.subtitle
								? <h4 className="sub-title">{header.subtitle}</h4>
								: null
							}
						</div>
						<img src={header.pictureUrl} alt="profile"/>
					</div>
				</CardSection>
			</Col>
		</Row>
    );
}

export default Header;
