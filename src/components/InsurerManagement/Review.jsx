import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";
import { HeaderForComp } from "../Common/HeaderForComp";

export const Review = () => {
  const selectPI = useSelector((state) => state.insurancemanReducer.perInfo);
  const selectFI = useSelector((state) => state.insurancemanReducer.famInfo);
  const [per, setPer] = useState({});
  const [fam, setFam] = useState({});
  useEffect(() => {
    const objPerInfo = selectPI[0];
    const objFamInfo = selectFI[0];
    if (objPerInfo) setPer(objPerInfo);
    if (objFamInfo) setFam(objFamInfo);
  }, [selectPI, selectFI]);
  return (
    <React.Fragment>
      <HeaderForComp title="Personal Info" />
      <Row>
        <Col>Full Name:</Col>
        <Col>{per.fname + " " + per.mname + " " + per.lname}</Col>
      </Row>
      <Row>
        <Col>Email:</Col>
        <Col>{per.email}</Col>
      </Row>
      <Row>
        <Col>Contact:</Col>
        <Col>{per.contact}</Col>
      </Row>
      <HeaderForComp title="Family Info" />
      <Row>
        <Col>Full Name:</Col>
        <Col>{fam.fname + " " + fam.mname + " " + fam.lname}</Col>
      </Row>
      <Row>
        <Col>Email:</Col>
        <Col>{fam.email}</Col>
      </Row>
      <Row>
        <Col>Contact:</Col>
        <Col>{fam.contact}</Col>
      </Row>
      <Row>
        <Col lg={3}>
          <Button>Submit</Button>
        </Col>
        <Col lg={3}>
          <Button>Cancel</Button>
        </Col>
      </Row>
    </React.Fragment>
  );
};
