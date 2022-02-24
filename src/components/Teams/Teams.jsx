import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { HeaderForComp } from "../Common/HeaderForComp";

export const Teams = () => {
  const [myData, setMyData] = useState([]);

  const setData1 = async () => {
    const result = await axios.get("http://localhost:5050/teamjson");
    console.log("===Result===>", result);
    setMyData(result.data);
  };
  useEffect(() => {
    setData1();
  }, []);
  useEffect(() => {
    console.log("===myData===>", myData);
  }, [myData]);
  return (
    <React.Fragment>
      <HeaderForComp title="My Team" />
      {myData.teams !== undefined &&
        myData.teams.length > 0 &&
        myData.teams.map((item) => (
          <Row>
            <Col>{item.name}</Col>
            <Col>{item.mob}</Col>
            <Col>{item.email}</Col>
          </Row>
        ))}
    </React.Fragment>
  );
};
