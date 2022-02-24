import React from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import { PersonalInfo } from "./PersonalInfo";
import { FamilyInfo } from "./FamilyInfo";
import { Review } from "./Review";
import "./InsurerRegistration.css";

export const InsurerRegistrationHome = () => {
  return (
    <div className="insurer">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="per">Personal Info</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fam">Family Info</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="pack">Select Package</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="agree">Agreement Acceptance</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="review">Review and Submit</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="per">
                <PersonalInfo />
              </Tab.Pane>
              <Tab.Pane eventKey="fam">
                <FamilyInfo />
              </Tab.Pane>
              <Tab.Pane eventKey="pack">Package</Tab.Pane>
              <Tab.Pane eventKey="agree">Agreement</Tab.Pane>
              <Tab.Pane eventKey="review">
                <Review />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};
