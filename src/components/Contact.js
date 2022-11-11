import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const formInitialDetail = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetail, setFormDetail] = React.useState(formInitialDetail);
  const [buttonText, setButtonText] = React.useState("send");
  const [status, setStatus] = React.useState({});

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-item-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form action="">
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetail.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1"></Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
