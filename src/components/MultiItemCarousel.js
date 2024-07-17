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

import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import useScreenWidth from "../hooks/useScreenWidth";

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

  const screenWidth = useScreenWidth();




  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: screenWidth < 400 ? 1 : screenWidth < 600 ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  console.log('carousel', prop.projects)

  return (
    <Slider {...settings}>
      {prop.projects &&
        prop.projects.map((item, i) => (
          <div className="projects-item-container item-container p-2" key={i}>
            <div className="projects-item-inner-container item-inner-container">
              <Link
                to={`/projects/${item.name}`}
                className="projects-carousel-link"
              >
                <Image
                  src={item.imageSrc}
                  className={`project-img project-img-${i + 1}`}
                />
                <div className="projects-body-container px-1 px-sm-2 px-md-3 py-0 py-sm-1 py-md-2 py-lg-3">
                  <h6 className="projects-title py-1 py-sm-2 mb-0 fw-bold">
                    {item.name}
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
          <div className="comment-item-container p-2" key={i}>
            <div className="item-inner-container comments-item-inner-container">
              <div className="comment-title-container">
                <h5>{item.name}</h5>
              </div>
              <div className="comment-p-container">
                <p><span><FontAwesomeIcon icon={faQuoteLeft} /></span> {item.text}</p>
              </div>
              <div className="comment-company-name">
                <h6>dfdsfsd</h6>
              </div>
            </div>
          </div>
        ))}
      {prop.employs &&
        prop.employs.map((item, i) => (
          <div className="employ-item-container p-2" key={i}>
            <div className="employ-inner-container">
              <div className="employ-img-container">
                <img src={item.img} alt="" className="employ-img" />
              </div>
              <div className="employ-name-linkdin-container">
                <div className="employ-name-position-container">
                  <h6>{item.name}</h6>
                  <p>{item.position}</p>
                </div>
                <div className="employ-linkdin">
                  <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
    </Slider>
  );
};

export default MultiItemCarousel;
