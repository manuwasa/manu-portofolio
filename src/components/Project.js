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
import projectC1 from "../assets/img/solit.png";
import projectC2 from "../assets/img/cbp.png";
import projectC3 from "../assets/img/wansin.png";
import projectC4 from "../assets/img/KTB.png";
import projectC5 from "../assets/img/smartplus.png";
import projectC6 from "../assets/img/Mutiara.png";
import projectL1 from "../assets/img/cups.png";
import projectL2 from "../assets/img/furnitune.png";
import projectL3 from "../assets/img/ygec.png";
import projectP1 from "../assets/img/calc.png";
import projectP2 from "../assets/img/progate.png";
import projectP3 from "../assets/img/staycation.png";
import projectP4 from "../assets/img/ytClone.png";
import projectP5 from "../assets/img/gerich.png";

export const Project = () => {
  const projectsCompany = [
    {
      title: "SOLIT Website",
      description: "Company Profile",
      techStack: "Wordpress, Elementor, CSS, JS",
      imgUrl: projectC1,
      webUrl: "https://solit.co.id/",
    },
    {
      title: "CBP Website",
      description: "Company Profile",
      techStack: "Wordpress, Elementor, CSS, JS",
      imgUrl: projectC2,
      webUrl: "http://candrabudiperkasa.com/",
    },
    {
      title: "Wansin Website",
      description: "Company Profile",
      techStack: "Wordpress, Elementor, CSS, JS",
      imgUrl: projectC3,
      webUrl: "https://wansin-mesinkayu.com/",
    },
    {
      title: "KTB Website",
      description: "Company Profile",
      techStack: "Wordpress, Elementor, CSS, JS",
      imgUrl: projectC4,
      webUrl: "http://karyateknikbersama.com/",
    },
    {
      title: "Smartplus Website",
      description: "Company Profile",
      techStack: "Wordpress, Elementor, CSS, JS",
      imgUrl: projectC5,
      webUrl: "https://soldering-smt.com/",
    },
    {
      title: "Mutiara Hidroponik Website",
      description: "Company Profile",
      techStack: "Wordpress, Elementor, CSS, JS",
      imgUrl: projectC6,
      webUrl: "https://mutiara.putrateknologiindonesia.com/",
    },
  ];

  const projectsLanding = [
    {
      title: "CUPS",
      description: "Landing Page",
      techStack: "HTML, CSS , JS, Bootstrap",
      imgUrl: projectL1,
      webUrl: "https://manuwasa.github.io/cups/",
    },
    {
      title: "Furnitune",
      description: "Landing Page",
      techStack: "HTML, CSS , JS, Bootstrap",
      imgUrl: projectL2,
      webUrl: "https://manuwasa.github.io/furnitune/",
    },
    {
      title: "YGEC 2022",
      description: "Landing Page & Registration",
      techStack: "Wordpress, Elementor, CSS, JS",
      imgUrl: projectL3,
      webUrl: "https://yamahagenerasi125esports.com/",
    },
  ];

  const projectsCourse = [
    {
      title: "Calculator Website",
      description: "Progate Assignment",
      techStack: "HTML, CSS , JS",
      imgUrl: projectP1,
      webUrl: "https://manuwasa.github.io/progate-calculator/",
    },
    {
      title: "JalanIn",
      description: "Progate Team Assignment",
      techStack: "HTML, CSS , JS",
      imgUrl: projectP2,
      webUrl: "https://manuwasa.github.io/project-10c/",
    },
    {
      title: "NOMADS",
      description: "Build With Angga Course",
      techStack: "Laravel, Bootstrap, Mysql",
      imgUrl: projectP3,
      webUrl: "#",
    },
    {
      title: "Youtube Clone",
      description: "Coding Along With Javascript Mastery",
      techStack: "ReactJs, RapidAPI",
      imgUrl: projectP4,
      webUrl: "https://manu-youtubeclone-jsm.netlify.app/",
    },
    {
      title: "Gerich Restaurant",
      description: "Coding Along With Javascript Mastery",
      techStack: "ReactJs",
      imgUrl: projectP5,
      webUrl: "https://manu-gerich-jsm.netlify.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>This is some of the projects i built with my teams or my own</p>
            <TabContainer id="projecs-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Company Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Landing Page</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Course Project</Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <TabPane eventKey="first">
                  <Row>
                    {projectsCompany.map((projectC, index) => {
                      return <ProjectCard key={index} {...projectC} />;
                    })}
                  </Row>
                </TabPane>
                <TabPane eventKey="second">
                  <Row>
                    {projectsLanding.map((projectL, index) => {
                      return <ProjectCard key={index} {...projectL} />;
                    })}
                  </Row>
                </TabPane>
                <TabPane eventKey="third">
                  <Row>
                    {projectsCourse.map((projectP, index) => {
                      return <ProjectCard key={index} {...projectP} />;
                    })}
                  </Row>
                </TabPane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="bg" className="background-image-right" />
    </section>
  );
};
