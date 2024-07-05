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

  return (
    <Container fluid className=" py-5 calculator-page-container page-container">
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
                "py-3 text-dark rounded-0 border-1 calculator-active-button"
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
      <Row className="border  pt-4">
        <h2 className="py-2 fw-bold">Monthly cost:</h2>
        <p className="py-2">
          Enter how much you pay for electricity every month, in {`GEL`}
        </p>
        <Col sm={10} md={10} className="ps-0 ">
          <InputGroup className="d-flex flex-column flex-sm-row ">
            <Form.Control
              placeholder="GEL"
              aria-label="GEL"
              aria-describedby="basic-addon2"
              className="calculator-input px-1 rounded-0  w-100 form-control-responsive"
            />
          </InputGroup>
        </Col>
        <Col sm={2} md={2} className="pe-0">
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
        <CalcComponent />
      </Row>
    </Container>
  );
};

export default Calculator;
