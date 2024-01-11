import React from "react";
import { Card, Col } from "react-bootstrap";

const MySingleFilm = (props) => (
  <Col md={2}>
    <Card style={{ width: "100px" }}>
      <Card.Img variant="top" src={props.imageUrl} />
    </Card>
   
  </Col>
);

export default MySingleFilm;