import React from "react";

import { Modal, Row, Col } from "react-bootstrap";

import ApplicationsCard from "../../reusable/ApplicationsCard";
import NotItemFound from "../../reusable/NoItemFound";
import curriculum from "../../assets/curriculum.png";

const ViewApplicationModal = (props) => {
  const { show, onHide, appliedCandidates } = props;

  return (
    <Modal
      show={show}
      onHide={onHide}
      contentClassName='view-application-modal-content'
    >
      <Modal.Header closeButton className='mx-3 mb-0'>
        <Modal.Title className='small-font-size'>
          Application for this job
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='px-4'>
        <Row className='application-modal-body'>
          <Col lg={12} md={12} sm={12} xs={12} className='mb-2'>
            <span className='small-font-size'>
              {appliedCandidates.length <= 0
                ? "0 application"
                : `Total ${appliedCandidates.length} applications`}
            </span>
          </Col>
          {appliedCandidates.length <= 0 ? (
            <div className='application-card-container text-center d-flex justify-content-center align-items-center'>
              <NotItemFound
                image={curriculum}
                text='No application available!'
              />
            </div>
          ) : (
            <Col
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className='application-card-container'
            >
              <Row>
                {appliedCandidates.map((item, index) => {
                  return (
                    <Col key={index} lg={6} md={6} sm={12} xs={12}>
                      <ApplicationsCard item={item} />
                    </Col>
                  );
                })}
              </Row>
            </Col>
          )}
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ViewApplicationModal;
