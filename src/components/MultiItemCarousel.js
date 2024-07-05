import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight,
  faChevronLeft,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";
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

const MultiItemCarousel = (prop) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {prop.projects &&
        prop.projects.map((item, i) => (
          <div className="projects-item-container item-container p-2" key={i}>
            <div className="projects-item-inner-container item-inner-container">
              <Link
                to={`projects/${item.name}`}
                className="projects-carousel-link"
              >
                <Image
                  src={item.src}
                  className={`project-img project-img-${i + 1}`}
                />
                <div className="projects-body-container px-1 px-sm-2 px-md-3 py-0 py-sm-1 py-md-2 py-lg-3">
                  <h6 className="projects-title py-1 py-sm-2 mb-0 fw-bold">
                    Card Title
                  </h6>
                  <p className="projects-text mb-0 py-0 py-sm-1 py-md-2 py-ld-3">
                    some text sacasc sac sacas csa csac sac sacsa csac
                  </p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      {prop.commentData &&
        prop.commentData.map((item, i) => (
          <div className="item-container p-2" key={i}>
            <div className="item-inner-container comments-item-inner-container">
              <div className="comments-multiitem-carousel-text-container">
                <div className="quete-text-container mb-0">
                <div className="multiitem-carousel-name-container">
                  <h6 className="fw-bold comments-author">{item.name}</h6>
                </div>
                  <p className="mb-3 p-3">
                    <FontAwesomeIcon icon={faQuoteLeft} /> {item.text}
                  </p>
                  <hr />
                  <div className="multiitem-carousel-name-container">
                    <h6 className="font-italic">My company</h6>
                  </div>
                </div>
                {/* <div className="quete-text-bottom"></div> */}
              </div>
            </div>
          </div>
        ))}
    </Slider>
  );
};

export default MultiItemCarousel;
