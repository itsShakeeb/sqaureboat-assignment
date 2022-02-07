import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../Context/Context";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

const Login = () => {
  const history = useHistory();
  const contextValue = useContext(AppContext);
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState({ error: false, errorMsg: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (email && password) {
      contextValue.login(email, password, (response, msg) => {
        if (response === true && msg) {
          if (!history.location.state || history.location.state === "/login") {
            history.push("/home");
          } else {
            history.push(history.location.state);
          }
        } else {
          setError((prevState) => ({
            ...prevState,
            error: true,
            errorMsg: msg,
          }));
        }
      });
    } else {
      setError((prevState) => ({
        ...prevState,
        error: true,
        errorMsg: "Please enter email address and password",
      }));
    }
  };

  return (
    <>
      <Container fluid className='login-container'>
        <Row className='login'>
          <Col lg={12} md={12} sm={12} xs={12} className='mt-3'>
            <p>
              <b>Login</b>
            </p>
          </Col>
          <Form noValidate onSubmit={handleSubmit}>
            <Col lg={12} md={12} sm={12} xs={12}>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  name='email'
                  placeholder='Enter email'
                  size='sm'
                  value={user.email}
                  onChange={handleChange}
                  required
                  className={`${error.error ? "is-invalid" : ""}`}
                />
              </Form.Group>
            </Col>
            <Col className='text-end forgot-password'>
              <span>
                <a href='#'>Forgot password?</a>
              </span>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <Form.Group className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  name='password'
                  value={user.password}
                  placeholder='Password'
                  size='sm'
                  onChange={handleChange}
                  required
                  className={`${error.error ? "is-invalid" : ""}`}
                />
                <Form.Control.Feedback
                  type='invalid'
                  className='text-end small-font-size'
                >
                  {error.errorMsg}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12} className='text-center mb-5'>
              <Button variant='primary' type='submit' className='login-btn'>
                Submit
              </Button>
            </Col>
          </Form>
          <Col
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className='create-an-account text-center'
          >
            <span className='mr-1'>New to my jobs?</span>
            <span className='job-text'>
              <b>
                <a href='#'>Create an account</a>
              </b>
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
