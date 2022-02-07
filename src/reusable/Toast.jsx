import React, { useContext, memo } from "react";

import { Toast, ToastContainer } from "react-bootstrap";

import { AppContext } from "../Context/Context";

const ToastComponent = () => {
  const contextValue = useContext(AppContext);

  const { show, headerMsg, bodyMsg } = contextValue.toast;

  return (
    <>
      <ToastContainer position='top-end' className='mt-5 pt-3'>
        <Toast
          onClose={() => contextValue.closeToast()}
          show={show}
          delay={3000}
          autohide={true}
          animation={true}
        >
          <Toast.Header>
            <strong className='me-auto'>{headerMsg}</strong>
          </Toast.Header>
          <Toast.Body>{bodyMsg}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default memo(ToastComponent);
