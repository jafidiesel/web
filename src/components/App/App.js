import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header/Header";
import CardSection from "../Card/Card";

import Projects from "../Blocks/Projects";
import Experience from "../Blocks/Experience";
import Courses from "../Blocks/Courses";

function App() {
  return (
    <Container>
      <Row>
        <Col >
          <Header/>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardSection>
            <a href="#">resume link</a>
          </CardSection>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardSection>
            <h3>Technologies</h3>
            <ul>
              <li>JS</li>
              <li>React</li>
              <li>Node</li>
              <li>SQL</li>
            </ul>
          </CardSection>
        </Col>
        <Col>
          <CardSection>
            <h3>Skills</h3>
            <ul>
              <li>Problem-solving oriented.</li>
              <li>Business analysis capacity.</li>
              <li>Cooperative work.</li>
              <li>Active listener.</li>
            </ul>
          </CardSection>
        </Col>
      </Row>
      <Experience/>
      <Courses/>
      <Projects/>
    </Container>
  );
}

export default App;
