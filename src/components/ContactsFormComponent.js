import React, { useState } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";

const ContactsFormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    countryCode: "+995",
    phoneNumber: "",
    comments: "",
  });
  console.log({ ...formData });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://backend-for-ohm-energy-test.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text()) // Expecting plain text
      .then((data) => {
        alert(data); // Alerting the response text
        if (data === "Email sent successfully") {
          setFormData({
            name: "",
            companyName: "",
            email: "",
            countryCode: "+995",
            phoneNumber: "",
            comments: "",
          });
        }
      })
      .catch((error) => {
        alert("Error sending email");
        console.error("Error:", error);
      });
  };

  return (
    <div className="contact-page-forms-inner-container">
      <Form onSubmit={handleSubmit} className="contact-page-form">
        {/* Form Fields */}
        <div className="contact-page-form-name-company-name-input-container">
          <Form.Floating className="mb-3 contact-page-from-input contact-page-from-name-input">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="floatingInputCustom">name</label>
          </Form.Floating>
          <Form.Floating className="mb-3 contact-page-from-input contact-page-from-company-name-input">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              name="companyName"
              placeholder="company name"
              value={formData.companyName}
              onChange={handleChange}
            />
            <label htmlFor="floatingInputCustom">company name</label>
          </Form.Floating>
        </div>
        <div className="contact-page-form-email-phone-number-input-container">
          <Form.Floating className="mb-3 contact-page-from-input contact-page-from-email-input">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="floatingInputCustom">Email address</label>
          </Form.Floating>
          <div className="mb-3 form-floating-container contact-page-form-number-container">
            <Form.Floating className="contact-page-from-input contact-page-form-number-start-input-container">
              <Form.Select
                aria-label="Floating label select example"
                id="floatingInputCustom"
                className="contact-page-form-phone-number-start"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
              >
                <option value="+995">+995</option>
                <option value="+324">+324</option>
                <option value="+342">+342</option>
              </Form.Select>
              <label htmlFor="floatingInputCustom">country code</label>
            </Form.Floating>
            <Form.Floating className="contact-page-from-input contact-page-form-number-input-container">
              <Form.Control
                id="floatingnumber"
                type="tel"
                name="phoneNumber"
                placeholder="phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
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
            name="comments"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            value={formData.comments}
            onChange={handleChange}
          />
        </FloatingLabel>
        <Button className="contact-page-submit-button" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactsFormComponent;