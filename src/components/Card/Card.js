import React from "react";
import { Card } from "react-bootstrap";
import '../../styles/_card.scss'

function CardSection(props) {
    return (
    <>
        <Card className="card-component">
            {
                props.fluid?
                props.children
                :<Card.Body>
                    {props.children}
                </Card.Body>
            }
        </Card>
    </>
    );
}

export default CardSection;
