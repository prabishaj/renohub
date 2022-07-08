
import React, { useEffect, useState } from 'react';
import { api } from '../../../Services/api';
import approvedIcon from '../../../assets/images/landing/approved-icon.svg';
import { Row, Col, Button, Form, Modal, Feedback } from "react-bootstrap";

import PopupFormWrap from "./style";


export const PopupForm = ({ show, setShow }) => {

  const [validated, setValidated] = useState(false);
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted ] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   setValidated(true);
  // };


  /*************************** react state  intiaalize *******************/
  const [loading, setLoading] = useState(false);
  const [registerData, setRegisterData] = useState({});

  /******************************* Functions *******************************/
  const SubmitForm = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      console.log('hi');
      e.preventDefault();
      e.stopPropagation();
    }
    else {
      api.post('/trackingadmin/clients', registerData).then(function (response) {
        // console.log(response.data);
        setShow(false);
        setIsSuccessfullySubmitted(true);
      });
    }
    setValidated(true);
  };



  

  return (


<>
    <Modal show={show} onHide={e => setShow(false)} className="p-0 test" size="lg">
      <PopupFormWrap>
        <Modal.Header className="border-0" closeButton>
          <Modal.Title >Registration Form </Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={e => { SubmitForm(e); e.preventDefault(); }}>
          <Modal.Body>
            <Row>
              <Col sm="6" >
                <Form.Group className="mb-3" controlId="validationCustom01">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter company name" name="companyname" required onChange={e => setRegisterData(p => ({ ...p, [e.target.name]: e.target.value }))} />
                  <Form.Control.Feedback type="invalid">
                    Enter your company name
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm="6" >
                <Form.Group className="mb-3" controlId="validationCustom02">
                  <Form.Label>Person Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" name="personname" required onChange={e => setRegisterData(p => ({ ...p, [e.target.name]: e.target.value }))} />
                  <Form.Control.Feedback type="invalid">
                    Enter your name
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm="6" >
                <Form.Group className="mb-3" controlId="validationCustom03">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="email" required onChange={e => setRegisterData(p => ({ ...p, [e.target.name]: e.target.value }))} />
                  <Form.Control.Feedback type="invalid">
                    Enter your email
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm="6" >
                <Form.Group className="mb-3" controlId="validationCustom04">
                  <Form.Label>Mobile </Form.Label>
                  <Form.Control type="number" placeholder="Enter mobile" name="phonenumber" required onChange={e => setRegisterData(p => ({ ...p, [e.target.name]: e.target.value }))} />
                  <Form.Control.Feedback type="invalid">
                    Enter your mobile
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm="6" >
                <Form.Group className="mb-3" controlId="validationCustom04">
                  <Form.Label>Address </Form.Label>
                  <Form.Control type="text" placeholder="Enter address" name="address" required onChange={e => setRegisterData(p => ({ ...p, [e.target.name]: e.target.value }))} />
                  <Form.Control.Feedback type="invalid">
                    Enter your address
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm="6" >
                <Form.Label>Password</Form.Label>
                <Form.Group className="mb-3" controlId="validationCustom05">
                  <Form.Control className="mb-2" type="password" placeholder="Enter password" name="password" required onChange={e => setRegisterData(p => ({ ...p, [e.target.name]: e.target.value }))} />
                  <Form.Control.Feedback type="invalid">
                    Enter your password
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className="text-center d-block border-0">

            <Button onSubmit={SubmitForm} type="submit" className="submit-btn">
              Create
            </Button>
          </Modal.Footer>
        </Form>
      </PopupFormWrap>
    </Modal>
    <Modal show={isSuccessfullySubmitted} onHide={e => setIsSuccessfullySubmitted(false)} className="p-0" size="sm">
      <PopupFormWrap>
      <Modal.Body className="text-center thanksPopupBody">
      <img className='mb-3' src={approvedIcon} height={"50"} width={"50"}/><br/>
      <Modal.Title >Thank You! </Modal.Title>
        <p>Your submission has been sent.</p>
        <Button onClick={e =>  setIsSuccessfullySubmitted(false)} type="submit" className="submit-btn mb-0">Okay</Button>
        </Modal.Body>
      </PopupFormWrap>
    </Modal>

      </>

  )
}
