import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import {  Image } from "react-bootstrap";
import { Link } from "react-router-dom";

// Custom arrow components
const NextArrow = ({ onClick }) => {
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

const MultiItemCarousel = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  console.log("prop", projects);
  return (
    <Slider {...settings}>
      {projects &&
        projects.map((item, i) => (
          <div className="item-container p-2" key={i}>
            <div className="item-inner-container">
              <Link
                to={`projects/${item.name}`}
                className="projects-carousel-link"
              >
                <Image
                  src={item.src}
                  className={`project-img project-img-${i + 1}`}
                />
                <div className="projects-body-container px-1 px-sm-2 px-md-3 py-0 py-sm-1 py-md-2 py-lg-3">
                  <h6 className="projects-title py-1 py-sm-2 mb-0">Card Title</h6>
                  <p className="projects-text mb-0 py-0 py-sm-1 py-md-2 py-ld-3">some text sacasc sac sacas csa csac sac sacsa csac</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      {/* <div className="item-container">Item 2</div>
      <div className="item-container">Item 3</div>
      <div className="item-container">Item 4</div>
      <div className="item-container">Item 5</div> */}
    </Slider>
  );
};

export default MultiItemCarousel;
