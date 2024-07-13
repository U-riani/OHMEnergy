import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
// import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import CalcComponent from "./CalcComponent";

const Calculator = () => {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "For a Person", value: "1" },
    { name: "For a Company", value: "2" },
  ];

  // const regionRadios = [
  //   { name: "on ground", value: "1" },
  //   { name: "on roof", value: "2" },
  // ];

  // console.log(radioValue)

  return (
    <Container
      fluid
      className=" mt-5 py-4 calculator-page-container page-container"
    >
      <h2>Solar Power Plant Calculator</h2>
      <Row className="pt-4">
        <p>
          Use our calculator to discover the required system capacity, cost and
          other details you need. Simply input your monthly electricity
          expenditure in Georgian Lari (GEL), and the calculator will handle all
          the necessary computations for you.
        </p>
      </Row>
      <Row className="px-0 pt-4">
        <ButtonGroup className="d-flex flex-column flex-md-row px-0">
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              // variant={idx % 2 ? "outline-success" : "outline-danger"}
              variant={"outline-warning"}
              name="radio"
              className={
                "py-3 text-dark rounded-0 border-1 calculator-active-button calculator-person-company-button"
              }
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Row>
      <Row className="region-panel-row">
        <Col lg={6} className="select-region-col regions-panels-col">
          <Form className="region-form regions-panels-form">
            <div className="region-title-container regions-panels-title-container">
              <p className="region-title regions-panels-title mb-0">
                select your region
              </p>
            </div>
            <div className="region-select-container regions-panels-intup-container">
              <Form.Select
                aria-label="Floating label select example"
                className="regions-container regions-select-container "
              >
                {/* <option>Open this select menu</option> */}
                <option value="1">Tbilisi</option>
                <option value="2">Adjara</option>
                <option value="3">Kakheti</option>
                <option value="4">Imereti</option>
                <option value="5">Racha</option>
              </Form.Select>
            </div>
          </Form>
        </Col>
        <Col lg={6} className="panels-col regions-panels-col">
          <Form className="panel-form regions-panels-form">
            <div className="panel-location-title-container regions-panels-title-container">
              <p className="panel-location-title regions-panels-title mb-0">
                select place for panels
              </p>
            </div>
            <div className="panel-location-radio-container regions-panels-intup-container">
              <Form.Check
                inline
                label="on ground"
                name="group1"
                type="radio"
                id={`inline-radio-1`}
                defaultChecked
              />
              <Form.Check
                inline
                label="sloping roof"
                name="group1"
                type="radio"
                id={`inline-radio-2`}
              />
              <Form.Check
                inline
                label="straight roof"
                name="group1"
                type="radio"
                id={`inline-radio-3`}
              />
            </div>
          </Form>
        </Col>
      </Row>
      <Row className="pt-4">
        <h2 className="py-2 fw-bold">Monthly cost:</h2>
        <p className="py-2">
          Enter how much you pay for electricity every month, in {`GEL`}
        </p>
        <Col sm={10} md={10} className="ps-0 px-0 pe-sm-1">
          <InputGroup className="d-flex flex-column flex-sm-row ">
            <Form.Control
              placeholder="GEL"
              aria-label="GEL"
              aria-describedby="basic-addon2"
              className="calculator-input px-1 rounded-0  w-100 form-control-responsive"
            />
          </InputGroup>
        </Col>
        <Col sm={2} md={2} className="px-0 ps-sm-1">
          <Button
            className="w-100 w-md-25 px-0 p rounded-0 calculator-submit-button "
            variant=""
            id="button-addon2"
          >
            Calculate
          </Button>
        </Col>
      </Row>
      <Row className="">
        <hr className="calculator-hr mt-5" />
        <h2 className="py-4 mb-0 fw-bold">Calculation:</h2>
        <CalcComponent radioValue={radioValue} />
      </Row>
    </Container>
  );
};

export default Calculator;
