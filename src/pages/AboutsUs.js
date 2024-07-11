import React from "react";
import { Container, Row } from "react-bootstrap";
import StatsComponent from "../components/StatsComponent";
import MultiItemCarousel from "../components/MultiItemCarousel";

const AboutsUs = () => {
  const images = [
    {
      image1: require("../images/aboutus/111.jpg"),
    },
    {
      image1: require("../images/aboutus/2222.jpg"),
    },
  ];

  const employs = [
    {
      name: "Sevak Gevorgyan",
      position: "CEO",
      img: require("../images/aboutus/employsPhotos/whatsapp-image-2020-11-26-at-115013.jpeg"),
      linkdinURL: "linkdin.com",
    },
    {
      name: "Sevak Gevorgyan",
      position: "CEO",
      img: require("../images/aboutus/employsPhotos/whatsapp-image-2020-11-26-at-115013.jpeg"),
      linkdinURL: "linkdin.com",
    },
    {
      name: "Sevak Gevorgyan",
      position: "CEO",
      img: require("../images/aboutus/employsPhotos/whatsapp-image-2020-11-26-at-115013.jpeg"),
      linkdinURL: "linkdin.com",
    },
    {
      name: "Sevak Gevorgyan",
      position: "CEO",
      img: require("../images/aboutus/employsPhotos/whatsapp-image-2020-11-26-at-115013.jpeg"),
      linkdinURL: "linkdin.com",
    },
    {
      name: "Sevak Gevorgyan",
      position: "CEO",
      img: require("../images/aboutus/employsPhotos/whatsapp-image-2020-11-26-at-115013.jpeg"),
      linkdinURL: "linkdin.com",
    },
    {
      name: "Sevak Gevorgyan",
      position: "CEO",
      img: require("../images/aboutus/employsPhotos/whatsapp-image-2020-11-26-at-115013.jpeg"),
      linkdinURL: "linkdin.com",
    },
  ];
  return (
    <Container fluid className="about-us-container">
      <Row className="about-us-row about-us-row-1 pb-5">
        <div className="about-us-title py-5">
          <h3>About Us</h3>
        </div>
        <div className="about-us-img-text-container about-us-img-text-container-1">
          <div className="about-us-text-container">
            <p>
              <span className="about-us-ohm-energu-span">OHM ENERGY</span> ომ
              ენერჯი დაარსდა 2016 წელს როგორც საპროექტო-სამშენებლო მომსახურების
              მომწოდებელი. კომპანია ეხმარება მომხმარებლებს მიიღონ ხარისხიანი
              გადაწყვეტილებები ენერგეტიკის სფეროში და წარმოადგენს რეგიონში
              ერთ-ერთ მოწინავე კომპანიას. ორგანიზაციის მიერ ჯამში 80 მეგავატზე
              მეტი საყოფაცხოვრებო, კომერციული და ფართომასშტაბიანი პროექტი
              განხორციელდა საქართველო, სომხეთსა და უზბეკეთში.
            </p>
          </div>
          <div className="about-us-img-1-container">
            <div className="about-us-img-1-inner-container">
              <img src={images[0].image1} className="about-us-img-1" alt=""/>
            </div>
          </div>
        </div>
      </Row>
      <Row>
        <StatsComponent />
      </Row>
      <Row className="about-us-row about-us-row-2 py-5">
        <div className="about-us-img-text-container  about-us-img-text-container-2">
          <div className="about-us-text-container">
            <h5>OUR VISION</h5>
            <p>
              ჩვენი ხედვა მაღალი სტანდარტის მეთოდოლოგიებით, სერვისითა და
              აღჭურვილობით განახლებადი ენერგეტიკის დარგის ეკონომიკაში
              ინტეგრირება ეფექტიანი, სტაბილური და მომავალზე ორიენტირებული
              გადაწყვეტილებებით.
            </p>
          </div>
          <div className="about-us-img-1-container">
            <div className="about-us-img-1-inner-container">
              <img src={images[1].image1} className="about-us-img-1" alt=""/>
            </div>
          </div>
        </div>
      </Row>
      <Row className="about-us-row about-us-row-3 pb-5">
        <MultiItemCarousel employs={employs} />
      </Row>
    </Container>
  );
};

export default AboutsUs;
