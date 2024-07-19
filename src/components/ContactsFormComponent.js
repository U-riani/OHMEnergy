import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const ContactsFormComponent = () => {
  return (
    <div className="contact-page-forms-inner-container">
      <div className="contact-page-form-name-company-name-input-container">
        <Form.Floating className="mb-3 contact-page-from-input contact-page-from-name-input">
          <Form.Control
            id="floatingInputCustom"
            type="text"
            placeholder="name"
          />
          <label htmlFor="floatingInputCustom">name</label>
        </Form.Floating>
        <Form.Floating className="mb-3 contact-page-from-input contact-page-from-company-name-input">
          <Form.Control
            id="floatingInputCustom"
            type="text"
            placeholder="company name"
          />
          <label htmlFor="floatingInputCustom">company name</label>
        </Form.Floating>
      </div>
      <div className="contact-page-form-email-phone-number-input-container">
        <Form.Floating className="mb-3 contact-page-from-input contact-page-from-email-input">
          <Form.Control
            id="floatingInputCustom"
            type="email"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInputCustom">Email address</label>
        </Form.Floating>
        <div className="mb-3 form-floating-container contact-page-form-number-container">
          <Form.Floating className="contact-page-from-input contact-page-form-number-start-input-container">
            <Form.Select
              aria-label="Floating label select example"
              id="floatingInputCustom"
              className="contact-page-form-phone-number-start"
            >
              {/* <option>+995</option> */}
              <option value="1">+995</option>
              <option value="2">+324</option>
              <option value="3">+342</option>
            </Form.Select>
            <label htmlFor="floatingInputCustom">county code</label>
          </Form.Floating>
          <Form.Floating className="contact-page-from-input contact-page-form-number-input-container">
            <Form.Control
              id="floatingnumber"
              type="tel"
              placeholder="phone number"
              className="contact-page-from-input contact-page-form-number-input"
            />
            <label htmlFor="floatingnumber">phone number</label>
          </Form.Floating>
        </div>
      </div>
      <FloatingLabel
        controlId="floatingTextarea2"
        label="Comments"
        className="mb-3 contact-page-from-input contact-page-from-comment-input"
      >
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
        />
      </FloatingLabel>
    </div>
  );
};

export default ContactsFormComponent;
