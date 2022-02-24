import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";

export const CartManage = () => {
  const [data, setData] = useState([]);
  const selectorCart = useSelector((state) => state.productReducer.cart);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      data: id,
    });
  };
  useEffect(() => {
    if (selectorCart !== undefined && selectorCart.length > 0)
      setData([...selectorCart]);
  }, [selectorCart]);
  return (
    <React.Fragment>
      {data.map((item) => (
        <React.Fragment>
          <Row>
            <Col>
              <img src={item.image} width="50px" />
            </Col>
            <Col>{item.title}</Col>
            <Col>{item.price}</Col>
            <Col>
              <Button onClick={() => handleRemove(item.id)}>Remove</Button>
            </Col>
          </Row>
          <hr />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};
