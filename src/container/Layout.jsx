import React from "react";

import Header from "./Header";
import Content from "./Content";
import ToastComponent from "../reusable/Toast";

const Layout = () => {
  return (
    <div className=''>
      <div className='header-container'>
        <Header />
      </div>
      <div className='content-container'>
        <div className='content-top'></div>
        <div className='content'>
          <Content />
        </div>
        <ToastComponent />
      </div>
    </div>
  );
};

export default Layout;
