import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Row, Col, FormControl } from "react-bootstrap";
import { ProductItem } from "./ProductItem";
import "./ProductList.css";

export const ProductList = () => {
  const [data, setData] = useState([]);
  const [srchData, setSrchData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  useEffect(async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    const productsData = [...result.data];
    setData(productsData);
    setSrchData(productsData);
    dispatch({
      type: "ADD_PRODUCT",
      data: productsData,
    });
  }, []);

  useEffect(() => {
    const filter = data.filter(
      (item) =>
        item.title.toUpperCase().includes(searchText.toUpperCase()) > 0 ||
        item.description.toUpperCase().includes(searchText.toUpperCase()) > 0
    );
    setSrchData([...filter]);
  }, [searchText]);

  console.log("==>", data);
  return (
    <React.Fragment>
      <Row>
        <Col>
          <FormControl
            type="text"
            className="searchbox"
            placeholder="Search..."
            onChange={(e) => setSearchText(e.target.value)}
          ></FormControl>
        </Col>
      </Row>
      <Row>
        {srchData.length > 0 &&
          srchData.map((item) => (
            <Col lg={3}>
              <ProductItem item={item} />
            </Col>
          ))}
      </Row>
    </React.Fragment>
  );
};
