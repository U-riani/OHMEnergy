import React from "react";
import { Container, Row } from "react-bootstrap";
import MultiItemCarousel from "./MultiItemCarousel";

const CommentComponent = () => {
  const commentData = [
    {
      name: "gela",
      text: "my first comm, production top !!!! safsa ssadsad sadsad",
    },
    {
      name: "sndr",
      text: "my first comm, production top !!!! safsa ssadsad sadsad",
    },
    {
      name: "tom",
      text: "on top !!!! safsa ssadsad sadsad",
    },
    {
      name: "newUser",
      text: "my first comm, dsc dscdscdscdscdsc dcdscc. production top !!!! safsa ssadsad sadsad",
    },
    {
      name: "gela",
      text: "my first comm, producti scscdsc dcdscdcdc on top !!!! safsa ssadsad sadsad",
    },
  ];

  return (
    <Container fluid className="comments-component">
      <Row className=" pb-5 comments-component-row">
        <div className="d-flex justify-content-center w-100 py-0 comments-title-container">
          <h5 className="text-center d-inline px-5 pt-4 pb-3 comments-main-title">
            COSTUMERS COMMENTS
          </h5>
        </div>
        <MultiItemCarousel commentData={commentData} />
      </Row>
    </Container>
  );
};

export default CommentComponent;
