import React from "react";

import { Card, Row, Col } from "react-bootstrap";

const ApplicationsCard = (props) => {
  const { item } = props;

  return (
    <div>
      <Card className='mb-3'>
        <Card.Body>
          <Row className='align-items-center'>
            <Col lg={3} md={3} sm={3} xs={3}>
              <div className='avatar-container'>{item.name[0]}</div>
            </Col>
            <Col className=''>
              <div className='avatar-name'>{item.name}</div>
              <div className='avatar-email'>{item.email}</div>
            </Col>
            <Col lg={12} sm={12} xs={12} md={12} className='my-2'>
              <span className='skill-text'>
                <b>{item.skills}</b>
              </span>
            </Col>
            <Col className='text-end'></Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ApplicationsCard;
