import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-logo.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const MyNavbar = () => {
   const [activeLink, setActiveLink] = React.useState("home");
   const [scrolled, setScrolled] = React.useState(false);

   React.useEffect(() => {
      const onScroll = () => {
         window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
      };

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   const onUpdateActiveLink = (value) => {
      setActiveLink(value);
   };

   return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
         <Container>
            <Navbar.Brand href="#home">MANU</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
               <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link
                     href="#home"
                     className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                     onClick={() => onUpdateActiveLink("home")}
                  >
                     Home
                  </Nav.Link>
                  <Nav.Link
                     href="#skills"
                     className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                     onClick={() => onUpdateActiveLink("skills")}
                  >
                     Skills
                  </Nav.Link>
                  <Nav.Link
                     href="#projects"
                     className={activeLink === "project" ? "active navbar-link" : "navbar-link"}
                     onClick={() => onUpdateActiveLink("projects")}
                  >
                     Projects
                  </Nav.Link>
               </Nav>
               <span className="navbar-text">
                  <div className="social-icon">
                     <a
                        href="https://www.linkedin.com/in/manuwasa/"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <img src={navIcon1} alt="social-media" />
                     </a>
                     <a href="https://github.com/manuwasa" target="_blank" rel="noreferrer">
                        <img src={navIcon2} alt="social-media" />
                     </a>
                     <a href="https://www.instagram.com/manuws.f/" target="_blank" rel="noreferrer">
                        <img src={navIcon3} alt="social-media" />
                     </a>
                  </div>
                  <button
                     className="vvd"
                     onClick={() => {
                        window.location.href = "https://www.linkedin.com/in/manuwasa/";
                     }}
                  >
                     <span>Let's Connect</span>
                  </button>
               </span>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};
