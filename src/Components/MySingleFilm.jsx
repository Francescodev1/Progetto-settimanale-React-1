import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const MySingleFilm = (props) => (
  
  <Row className="mx-auto cardhover">
  <Col  xs={12} md={3} >
    <Card className="d-flex " >
      <Card.Img variant="top" src={props.imageUrl} style={{ width: "200px"}} />
    </Card>
  </Col>
  </Row>
);

export default MySingleFilm;

