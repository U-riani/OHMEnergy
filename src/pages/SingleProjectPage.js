import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

const SingleProjectPage = () => {
  const {projectId} = useParams()
  const project = useSelector(state => state.projects.find(proj => proj.name == projectId));
  console.log(projectId)
  return (
    <Container fluid>
      <Row>
      {project ? (
        <Col>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        </Col>
      ) : <div>not found</div>
        }
        </Row>
    </Container>
  )
}

export default SingleProjectPage