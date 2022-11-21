import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  webUrl,
  techStack,
}) => {
  return (
    <Col sm={6} md={4}>
      <a className="proj-imgbx" href={webUrl} target="_blank" rel="noreferrer">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>{techStack}</p>
          {title === "NOMADS" && <p>Sorry, this one is not deployed</p>}
        </div>
      </a>
    </Col>
  );
};
