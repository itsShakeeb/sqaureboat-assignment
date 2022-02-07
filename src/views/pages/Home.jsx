import React from "react";

import { Button, Row, Col, Container, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import WelcomeImage from "../../assets/WelcomeImage.png";
import { company_image } from "../../reusable/CompanyImages";

const Home = () => {
  const history = useHistory();

  const cardArray = [
    {
      id: 1,
      title: "Get More Visibility",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eveniet illum odit earum obcaecati! Corrupti illo, officia velit repellat magni ea qui porro blanditiis quibusdam mollitia, commodi, optio repellendus eligendi.",
    },
    {
      id: 2,
      title: "Organize your canditates",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eveniet illum odit earum obcaecati! Corrupti illo, officia velit repellat magni ea qui porro blanditiis quibusdam mollitia, commodi, optio repellendus eligendi.",
    },
    {
      id: 3,
      title: "Verify their ability",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eveniet illum odit earum obcaecati! Corrupti illo, officia velit repellat magni ea qui porro blanditiis quibusdam mollitia, commodi, optio repellendus eligendi.",
    },
  ];

  return (
    <Container fluid>
      <Row>
        <Col
          className=' d-flex justify-content-center mt-5'
          lg={6}
          md={6}
          sm={12}
        >
          <div className='welcome-message-text'>
            <div>
              <b>
                Welcome to
                <p>
                  <span className='my-text'> My</span>
                  <span className='job-text'>Job</span>
                </p>
              </b>
            </div>

            <div>
              <Button
                variant='primary'
                onClick={() => history.push("/posted-jobs")}
              >
                Get Started
              </Button>
            </div>
          </div>
        </Col>
        <Col className='welcome-image-container' lg={6} md={6} sm={12}>
          <img
            src={WelcomeImage}
            alt='WelcomeImage'
            className='welcome-image'
          />
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <p>
            <b>Why us</b>
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <Row>
            {cardArray.map((c, index) => {
              return (
                <Col lg={4} md={4} sm={12} xs={12} key={index}>
                  <Card className='mb-3'>
                    <Card.Body>
                      <Card.Title className='my-card-title mb-4'>
                        {c.title}
                      </Card.Title>
                      <Card.Text>{c.detail}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col className='my-3' lg={12} md={12} sm={12} xs={12}>
          <p>
            <b>Company Who Trust Us</b>
          </p>
        </Col>
        <div className='d-flex flex-wrap justify-content-center'>
          {company_image.map((i, index) => {
            return (
              <div key={index} className='p-md-4'>
                <img src={i.img} alt={index} />
              </div>
            );
          })}
        </div>
      </Row>
    </Container>
  );
};

export default Home;
