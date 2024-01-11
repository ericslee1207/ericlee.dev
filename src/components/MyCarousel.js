import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MyCarousel = ({ data }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
    <div className="carousel-wrapper">
      <Carousel responsive={responsive}>
        {data.map((project) => (
          <a href={project.link} className="project-box" target="_blank">
            <div className="project-image">
              <img src={project.img} alt="Project Screenshot" />
            </div>
            <div className="project-details">
              <h3>{project.name}</h3>
              <p className="project-date">{project.date}</p>
              <div className="tools-used">
                {project.tools.map((tool) => (
                  <span className="tool">{tool}</span>
                ))}
              </div>
              <p className="project-description">{project.desc}</p>
            </div>
          </a>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
