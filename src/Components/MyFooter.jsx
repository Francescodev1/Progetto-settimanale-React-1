import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const MyFooter = () => (
  <footer className="bg-dark text-white">
    <Container>
      <Row className="text-center mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <Row>
            <Col className="text-left mb-2">
              <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
              <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
              <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
              <FontAwesomeIcon icon={faYoutube} className="footer-icon" />
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">
            <Col>
              <div className="footer-links">
                <p><a href="#" alt="footer link">Audio and Subtitles</a></p>
                <p><a href="#" alt="footer link">Media Center</a></p>
                <p><a href="#" alt="footer link">Privacy</a></p>
                <p><a href="#" alt="footer link">Contact us</a></p>
              </div>
            </Col>
            <Col>
              <div className="footer-links">
                <p><a href="#" alt="footer link">Audio Description</a></p>
                <p><a href="#" alt="footer link">Investor Relations</a></p>
                <p><a href="#" alt="footer link">Legal Notices</a></p>
              </div>
            </Col>
            <Col>
              <div className="footer-links">
                <p><a href="#" alt="footer link">Help Center</a></p>
                <p><a href="#" alt="footer link">Jobs</a></p>
                <p><a href="#" alt="footer link">Cookie Preferences</a></p>
              </div>
            </Col>
            <Col>
              <div className="footer-links">
                <p><a href="#" alt="footer link">Gift Cards</a></p>
                <p><a href="#" alt="footer link">Terms of Use</a></p>
                <p><a href="#" alt="footer link">Corporate Information</a></p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-left mb-2">
              <Button variant="secondary" size="sm" className="footer-button rounded-0 mt-3">
                Service Code
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="text-left mb-2 mt-2 copyright">
              © 1997-2022 Netflix, Inc.
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default MyFooter;
