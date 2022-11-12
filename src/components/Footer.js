import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-logo.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <h2>MANU</h2>
            <p>Copyright © 2022 . All Right Reserved </p>
          </Col>
          <Col md={6} sm={12} className="text-end">
            <p>Contact And Information</p>
            <span className="navbar-text justify-content-end">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/manuwasa/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon1} alt="social-media" />
                </a>
                <a
                  href="https://github.com/manuwasa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon2} alt="social-media" />
                </a>
                <a
                  href="https://www.instagram.com/manuws.f/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon3} alt="social-media" />
                </a>
              </div>
            </span>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
