import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = React.useState(0);
  const [isDeleting, setDeleting] = React.useState(false);
  const toRotate = ["Web Developer", "Wordpress Developer"];
  const [text, setText] = React.useState("");
  const [delta, setDelta] = React.useState(300 - Math.random() * 100);
  const period = 2000;

  React.useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
  });

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my website Portofolio</span>
            <h1>
              {`Hello there`} <span className="wrap">Web Developer</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
              molestias? Debitis natus, ipsam recusandae quo quibusdam quod
              quidem magnam laborum aperiam laboriosam? Odio temporibus nemo
              maxime reiciendis modi error tempora.
            </p>
            <button
              onClick={() => {
                console.log("helllo");
              }}
            >
              Let's Connect
              <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="banner-image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
