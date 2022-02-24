import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  OverlayTrigger,
  Button,
  Tooltip,
  Row,
  Col,
  NavItem,
} from "react-bootstrap";

export const Cart = () => {
  const [data, setData] = useState([]);
  const selectorCart = useSelector((state) => state.productReducer.cart);
  useEffect(() => {
    if (selectorCart !== undefined && selectorCart.length > 0)
      setData([...selectorCart]);
  }, [selectorCart]);
  return (
    <h3>
      <>
        {["bottom"].map((placement) => (
          <OverlayTrigger
            key={placement}
            placement={placement}
            overlay={
              <Tooltip id={`tooltip-${placement}`}>
                {data.map((item) => (
                  <React.Fragment>
                    <Row>
                      <Col>
                        <img src={item.image} width="50px" />
                      </Col>
                      <Col>{item.title}</Col>
                      <Col>{item.price}</Col>
                    </Row>
                    <hr />
                  </React.Fragment>
                ))}
              </Tooltip>
            }
          >
            <Link to="/cartmanage">
              <FontAwesomeIcon icon={faShoppingCart} />
              <sup>{data.length}</sup>
            </Link>
          </OverlayTrigger>
        ))}
      </>
    </h3>
  );
};
