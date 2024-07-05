import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import Partner11 from "../images/partners/partner-11";

const Partners = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const partners = [
    {
      name: "SMA Solar Technology AG",
      logo: require("../images/partners/partner-1.jpg"),
    },
    {
      name: "Solar Technologies, Inc.",
      logo: require("../images/partners/partner-2.png"),
    },
    {
      name: "KACO new energy GmbH",
      logo: require("../images/partners/partner-3.png"),
    },
    { name: "Jäspi Solar", logo: require("../images/partners/partner-4.png") },
    {
      name: "UAB Solet Technics",
      logo: require("../images/partners/partner-5.png"),
    },
    {
      name: "Stäubli International AG",
      logo: require("../images/partners/partner-6.png"),
    },
    {
      name: "Weidmüller Interface GmbH & Co. KG",
      logo: require("../images/partners/partner-7.png"),
    },
    {
      name: "ESSD (Energy Saving Solutions & Design)",
      logo: require("../images/partners/partner-8.png"),
    },
    {
      name: "ESSD (Energy Saving Solutions & Design)",
      logo: require("../images/partners/partner-9.jpeg"),
    },
    {
      name: "ESSD (Energy Saving Solutions & Design)",
      logo: require("../images/partners/partner-10.png"),
    },
    {
      name: "AEG",
      logo: Partner11,
    },
    {
      name: "ESSD (Energy Saving Solutions & Design)",
      logo: require("../images/partners/partner-12.png"),
    },
    {
      name: "ESSD (Energy Saving Solutions & Design)",
      logo: require("../images/partners/partner-13.png"),
    },
  ];

  const partnersNum = partners.length;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth, partnersNum]);

  return (
    <Container fluid className="py-3 px-0 d-flex flex-column align-items-center partners-container">
      <Row className="d-flex justify-content-between  partners-row-1">
        {partners.filter((el, ind) => ind < 6).map((part, i) => (
          <div
            key={i}
            className={`partners-col-container partners-col-container-${
              i + 1
            } px-0 rounded-0 align-content-center`}
          >
            <Card
              className={`position-relative partners-card rounded-0 border-0 card-${
                i + 1
              }`}
            >
              {part.name === "AEG" ? (
                <Card.Img
                  variant="top"
                  as={part.logo}
                  style={{ height: "200px" }}
                  className={`partners-card-img partners-card-img-${i + 1}`}
                />
              ) : (
                <Card.Img
                  variant="top"
                  src={part.logo}
                  className={`card-img card-img-${i + 1}`}
                />
              )}
              <Card.Body className="card-link-container px-0 py-0">
                <div className="card-inner-body">
                  <Card.Link className="partners-card-link" href="#">
                    {/* {part.name} */}
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>
      <Row className="d-flex justify-content-between">
        {partners.filter((el, ind) => ind >= 6).map((part, i) => (
          <div
            key={i}
            className={`partners-col-container partners-col-container-${
              i + 7
            } px-0 rounded-0 align-content-center`}
          >
            <Card
              className={`position-relative partners-card rounded-0 border-0 card-${
                i + 7
              }`}
            >
              {part.name === "AEG" ? (
                <Card.Img
                  variant="top"
                  as={part.logo}
                  style={{ height: "200px" }}
                  className={`partners-card-img partners-card-img-${i + 7}`}
                />
              ) : (
                <Card.Img
                  variant="top"
                  src={part.logo}
                  className={`card-img card-img-${i + 7}`}
                />
              )}
              <Card.Body className="card-link-container px-0 py-0">
                <div className="card-inner-body">
                  <Card.Link className="partners-card-link" href="#">
                    {/* {part.name} */}
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default Partners;
