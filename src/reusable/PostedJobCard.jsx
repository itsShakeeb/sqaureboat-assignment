import React, { useState, useContext, memo } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

import { AppContext } from "../Context/Context";
import IconLocation from "../assets/Iconlocation.png";
import ViewApplicationModal from "../views/pages/ViewApplicationModal";

const PostedJobCard = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const contextValue = useContext(AppContext);
  const { appliedCandidates, fetchAppliedCandidates } = contextValue;

  const handleModal = (text, id) => {
    if (text === "open" && id) {
      fetchAppliedCandidates(id, () => {
        setOpenModal(true);
      });
    } else if (text === "close") {
      setOpenModal(false);
    }
  };

  const { title, description, location, id } = props;

  return (
    <div>
      <Card className='mb-3'>
        <Card.Body>
          <Card.Title className=''>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Row className='align-items-center'>
            <Col>
              <span>
                <img src={IconLocation} alt='IconLocation' className='' />
                <span className='small-font-size mx-1'>{location}</span>
              </span>
            </Col>
            <Col className='text-end'>
              {props?.isViewingApplication ? (
                <Button
                  variant=''
                  className='apply-btn small-font-size'
                  size='sm'
                  onClick={() => handleModal("open", id)}
                >
                  View Application
                </Button>
              ) : null}
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {openModal && (
        <ViewApplicationModal
          show={openModal}
          onHide={() => handleModal("close")}
          appliedCandidates={appliedCandidates}
        />
      )}
    </div>
  );
};

export default memo(PostedJobCard);
