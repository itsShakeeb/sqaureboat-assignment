import React from "react";

import { Pagination } from "react-bootstrap";

const PaginationComponent = (props) => {
  const { metaData, currentPage } = props;

  return (
    <div>
      <Pagination className='pagination-main'>
        <Pagination.Prev
          className='mx-1 pagination-item'
          onClick={() => props.handlePagination(currentPage - 1)}
        />
        {Array.from({ length: Math.round(metaData?.count / 20) }).map(
          (_, index) => {
            return (
              <div key={index}>
                <Pagination.Item
                  className='mx-1 pagination-item'
                  active={currentPage == index + 1}
                  onClick={() => props.handlePagination(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              </div>
            );
          }
        )}
        <Pagination.Next
          className='mx-1 pagination-item'
          onClick={() => props.handlePagination(currentPage + 1)}
        />
      </Pagination>
    </div>
  );
};

export default React.memo(PaginationComponent);
