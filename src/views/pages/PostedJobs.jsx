import React, { useEffect, useContext, useState } from "react";

import { Container, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { AppContext } from "../../Context/Context";
import NotItemFound from "../../reusable/NoItemFound";
import PostedJobCard from "../../reusable/PostedJobCard";
import PaginationComponent from "../../reusable/PaginationComponent";
import writing from "../../assets/writing.png";
import homeImage from "../../assets/Iconhome.png";

const PostedJobs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();
  const contextValue = useContext(AppContext);

  const { fetchPostedJobs, postedJobs, metaData } = contextValue;

  useEffect(() => {
    fetchPostedJobs(currentPage);
  }, [currentPage]);

  const handlePagination = (pageNumber) => {
    if (pageNumber <= Math.round(metaData?.count / 20) && pageNumber) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <Container fluid className=''>
      <Row className=''>
        <Col lg={12} md={12} sm={12} xs={12} className='mb-3'>
          <span className='text-white mb-3'>
            <b>Jobs posted by you</b>
          </span>
        </Col>
        <Col lg={12} md={12} sm={12} xs={12} className='mb-3'>
          <div role='button' onClick={() => history.push("/home")}>
            <img src={homeImage} alt='homeImage' />
            <span className='my-text small-font-size mx-2'>
              <b>Home</b>
            </span>
          </div>
        </Col>
        <Col lg={12} md={12} sm={12} xs={12}>
          <Row>
            {postedJobs ? (
              postedJobs.length <= 0 ? (
                <div
                  className='text-center d-flex justify-content-center align-items-center '
                  style={{ marginTop: "250px" }}
                >
                  <NotItemFound
                    image={writing}
                    text='Your posted jobs will show here!'
                  />
                </div>
              ) : (
                postedJobs.map((job, index) => {
                  return (
                    <Col lg={3} md={3} sm={12} xs={12} key={index} key={index}>
                      <PostedJobCard
                        isViewingApplication={true}
                        title={job.title}
                        description={job.description}
                        location={job.location}
                        createdAt={job.createdAt}
                        updatedAt={job.updatedAt}
                        id={job.id}
                      />
                    </Col>
                  );
                })
              )
            ) : null}
          </Row>
          {metaData.count && (
            <Col lg={12} md={12} sm={12} xs={12} className=''>
              <div className='d-flex justify-content-center'>
                <PaginationComponent
                  metaData={metaData}
                  handlePagination={handlePagination}
                  currentPage={currentPage}
                />
              </div>
            </Col>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PostedJobs;
