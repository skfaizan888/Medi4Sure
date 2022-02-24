import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-dropdown-select";

export const PersonalInfo = () => {
  const dispatch = useDispatch();
  const selectPI = useSelector((state) => state.insurancemanReducer.perInfo);
  const [options] = useState([
    { value: "m", label: "Male" },
    { value: "f", label: "Female" },
    { value: "t", label: "Transgender" },
    { value: "n", label: "N/A" },
  ]);
  const [values, setValues] = useState([
    { value: "m", label: "Male" },
    { value: "f", label: "Female" },
    { value: "t", label: "Transgender" },
    { value: "n", label: "N/A" },
  ]);
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const handlePISave = () => {
    const objPerInfo = {
      fname,
      mname,
      lname,
      contact,
      email,
    };
    dispatch({
      type: "ADD_PERSONAL_INFO",
      data: objPerInfo,
    });
  };
  useEffect(() => {
    const objPerInfo = selectPI[0];
    if (objPerInfo) {
      setFname(objPerInfo.fname);
      setMname(objPerInfo.mname);
      setLname(objPerInfo.lname);
      setEmail(objPerInfo.email);
      setContact(objPerInfo.contact);
    }
  }, []);
  useEffect(() => {
    const objPerInfo = {
      fname,
      mname,
      lname,
      contact,
      email,
    };
  }, [fname, lname, mname, email, contact]);
  useEffect(() => {
    const frName = fname;
  }, []);
  return (
    <React.Fragment>
      <Row className="rowreg">
        <Col>
          <Form.Control
            type="text"
            value={fname}
            placeholder="firstname"
            onChange={(e) => setFname(e.target.value)}
          ></Form.Control>
        </Col>
        <Col>
          <Form.Control
            type="text"
            value={mname}
            placeholder="middlename"
            onChange={(e) => setMname(e.target.value)}
          ></Form.Control>
        </Col>
        <Col>
          <Form.Control
            type="text"
            value={lname}
            placeholder="lastname"
            onChange={(e) => setLname(e.target.value)}
          ></Form.Control>
        </Col>
      </Row>
      <Row className="rowreg">
        <Col>
          <Form.Control
            type="text"
            value={contact}
            placeholder="contactnumber"
            onChange={(e) => setContact(e.target.value)}
          ></Form.Control>
        </Col>
        <Col>
          <Select options={options} onChange={(values) => setValues(values)} />
        </Col>
      </Row>
      <Row className="rowreg">
        <Col>
          <Form.Control
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <Button onClick={handlePISave}>Save</Button>
        </Col>
        <Col>
          <Button>Cancel</Button>
        </Col>
      </Row>
    </React.Fragment>
  );
};
