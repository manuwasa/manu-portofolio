import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skillReact from "../assets/img/react-2.svg";
import skillLaravel from "../assets/img/laravel-2.svg";
import skillBootstrap from "../assets/img/bootstrap-4.svg";
import skillFigma from "../assets/img/figma-1.svg";
import skillWordpress from "../assets/img/wordpress-blue.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat officia iste enim. Iure officia nisi, illum quas quia
                exercitationem optio, veritatis nobis placeat libero harum vero
                eveniet nemo, dicta laborum?
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                centerMode={true}
                autoPlay={true}
              >
                <div className="item">
                  <img src={skillReact} alt="Image" />
                  <h5>React Js</h5>
                </div>
                <div className="item">
                  <img src={skillBootstrap} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={skillWordpress} alt="Image" />
                  <h5>Wordpress</h5>
                </div>
                <div className="item">
                  <img src={skillLaravel} alt="Image" />
                  <h5>Laravel</h5>
                </div>
                <div className="item">
                  <img src={skillFigma} alt="Image" />
                  <h5>Figma</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp}
        alt="background"
        className="background-image-left"
      />
    </section>
  );
};
