import React, { useContext, useEffect, useState, memo } from "react";

import { Button, Row, Col } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";

import { AppContext } from "../Context/Context";
import IconCaretDown from "../assets/IconCaretDown.png";

const Header = () => {
  const [popup, setPopup] = useState(false);

  const history = useHistory();
  const location = useLocation();
  const contextValue = useContext(AppContext);

  useEffect(() => {
    if (
      JSON.parse(sessionStorage.getItem("isLoggedIn")) &&
      JSON.parse(sessionStorage.getItem("token"))
    ) {
      contextValue.settingLoggedIn();
    }
  }, []);

  return (
    <header className='header px-5'>
      <Row className='py-2 align-items-center border-bottom'>
        <Col>
          <div>
            <b>
              <span className='my-text'> My</span>
              <span className='job-text'>Job</span>
            </b>
          </div>
        </Col>
        <Col className='text-end'>
          {!contextValue?.isLoggedIn && location.pathname !== "/login" ? (
            <Button
              variant='outline-info'
              onClick={() =>
                history.push({ pathname: "/login", state: location.pathname })
              }
            >
              Login/SignUp
            </Button>
          ) : location.pathname === "/login" ? null : (
            <div className='d-flex align-items-center justify-content-end '>
              <div className='avatar-container mx-1 '>
                <span className='my-text'>
                  {contextValue.username() ? contextValue.username()[0] : "U"}
                </span>
              </div>
              <div
                className='mx-1 header-caret'
                role='button'
                onClick={() => setPopup((prevState) => !prevState)}
              >
                <img src={IconCaretDown} alt='IconCaretDown' />
                {popup && (
                  <div className='logout-popup'>
                    <div
                      role='button'
                      onClick={() => contextValue.handleLogout(location)}
                    >
                      Logout
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </Col>
      </Row>
    </header>
  );
};

export default memo(Header);
