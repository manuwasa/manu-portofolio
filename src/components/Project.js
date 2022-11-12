import {
  Col,
  Container,
  Nav,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import project01 from "../assets/img/project-img1.png";
import project02 from "../assets/img/project-img2.png";
import project03 from "../assets/img/project-img3.png";

export const Project = () => {
  const projects = [
    {
      title: "Website Development",
      description: "Company Profile",
      imgUrl: project01,
      siteUrl: "#",
    },
    {
      title: "Website Development",
      description: "Company Profile",
      imgUrl: project02,
      siteUrl: "#",
    },
    {
      title: "Website Development",
      description: "Landing Page",
      imgUrl: project03,
      siteUrl: "#",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>This is some of the projects i built with my teams</p>
            <TabContainer id="projecs-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <TabPane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </TabPane>
                <TabPane eventKey="second">lorem ipsum</TabPane>
                <TabPane eventKey="third">lorem ipsum</TabPane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="bg" className="background-image-right" />
    </section>
  );
};
