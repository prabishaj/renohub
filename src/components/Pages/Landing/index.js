
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Row, Col, Button, Form, Card, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faStar } from '@fortawesome/pro-solid-svg-icons';
import LandingWrap from "./style";
import trekrLightModeLogo from "../../../assets/images/logo/trekr-light-mode-logo.svg";
// import trekrDarkModeLogo from "../../../assets/images/logo/trekr-dark-mode-logo.svg";
import icon1 from "../../../assets/images/landing/icon1.svg";
import icon2 from "../../../assets/images/landing/icon2.svg";
import icon3 from "../../../assets/images/landing/icon3.svg";
import icon4 from "../../../assets/images/landing/icon4.svg";
import icon5 from "../../../assets/images/landing/icon5.svg";
import icon6 from "../../../assets/images/landing/icon6.svg";
import icon7 from "../../../assets/images/landing/icon7.svg";
import icon8 from "../../../assets/images/landing/icon8.svg";
import icon9 from "../../../assets/images/landing/icon9.svg";
import bannerImg from "../../../assets/images/landing/banner-img.png";
import studyTaskImg from "../../../assets/images/landing/study-task-img.png";
import productivityImg from "../../../assets/images/landing/productivity-img.png";
import reportImg from "../../../assets/images/landing/report-img.png";
import userImg from "../../../assets/images/landing/user-img.jpg";
import userImg1 from "../../../assets/images/landing/user-img1.jpg";
import userImg2 from "../../../assets/images/landing/user-img2.jpg";
import goalsImg from "../../../assets/images/landing/goals-img.png";
import workflowIcon1 from "../../../assets/images/landing/workflow-icon1.svg";
import workflowIcon2 from "../../../assets/images/landing/workflow-icon2.svg";
import workflowIcon3 from "../../../assets/images/landing/workflow-icon3.svg";
import workflowIcon4 from "../../../assets/images/landing/workflow-icon4.svg";
import workflowIcon5 from "../../../assets/images/landing/workflow-icon5.svg";
import workflowIcon6 from "../../../assets/images/landing/workflow-icon6.svg";
import workflowIcon7 from "../../../assets/images/landing/workflow-icon7.svg";
import boardImg from "../../../assets/images/landing/board-img.png";
import trekrImg from "../../../assets/images/landing/trekr-img.svg";
import clientImg from "../../../assets/images/landing/client-img.png";
import reviewsImg from "../../../assets/images/landing/reviews-img.svg";
import callIcon from "../../../assets/images/landing/call-icon.svg";
import heartIcon from "../../../assets/images/landing/heart-icon.svg";
import clockicon from "../../../assets/images/landing/clock-icon.svg";
import radiusImg from "../../../assets/images/landing/radius-img.svg";
import forresterImg from "../../../assets/images/landing/forrester-img.svg";
import leaderImg from "../../../assets/images/landing/leader-img.svg";
import instagram from "../../../assets/images/landing/instagram.png";
import facebook from "../../../assets/images/landing/facebook.png";
import linkedin from "../../../assets/images/landing/linkedin.png";
import twitter from "../../../assets/images/landing/twitter.png";
import stars from "../../../assets/images/landing/stars.svg";
import { PopupForm } from '../PopupForm';

export const Landing = () => {

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [modalShow, setModalShow] = React.useState(false);


  return (
    <LandingWrap>
      <div className="trekr-landing-page">
      <Navbar collapseOnSelect sticky="top" expand="lg" bg="" variant="light" className="header-navbar">
      <Container fluid>
          <Navbar.Brand href="https://www.trekr.com.au">
            <img
              className="img-fluid mx-auto siteLogoImg"
              src={trekrLightModeLogo}
              alt="trekr logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="https://www.trekr.com.au/login">Login</Nav.Link>
              <Button className="rounded-pill header-btn" onMouseOver={() => setModalShow(true)}>Get Started</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Navbar end */}

      <div className='banner-section bg-blue'>
      <Container fluid>
          <Row>
            <Col sm="12" className='mx-auto text-center'>
              <h2 className="section-head">
                A platform built for a <br /> new way of working
              </h2>
              <h3 className="section-subhead">what would you like to manage with&nbsp;<a className="text-white site-link" href="https://www.trekr.com.au">trekr.com.au</a>&nbsp;
                {/* &nbsp;<Link className="text-white site-link" to="https://www.trekr.com.au/">trekr.com.au</Link>&nbsp; */}
                work OS?</h3>
            </Col>
          </Row>
          {/* banner-headig end */}

          <div sm="12" className='text-center mt-5 mb-5'>
            <Row>
              <Col className='box-part  p-2 rounded'>
                <Form className="text-start">
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                      />
                    </div>
                  ))}
                </Form>
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={icon1} alt="" /></div>
                <h4 className='mb-0 text-center'>Creative & <br /> design</h4>
              </Col>
              {/* 1st box end */}
              <Col className='box-part  p-2 rounded'>
                <Form className="text-start">
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                      />
                    </div>
                  ))}
                </Form>
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={icon2} alt="" /></div>
                <h4 className='mb-0 text-center'>IT</h4>
              </Col>
              {/* 2nd box end */}
              <Col className='box-part  p-2 rounded'>
                <Form className="text-start">
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                      />
                    </div>
                  ))}
                </Form>
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={icon3} alt="" /></div>
                <h4 className='mb-0 text-center'>Software <br /> development</h4>
              </Col>
              {/* 3rd box end */}
              <Col className='box-part  p-2 rounded'>
                <Form className="text-start">
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                      />
                    </div>
                  ))}
                </Form>
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={icon4} alt="" /></div>
                <h4 className='mb-0 text-center'>Marketing</h4>
              </Col>
              {/* 4th box end */}
              <Col className='box-part  p-2 rounded'>
                <Form className="text-start">
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                      />
                    </div>
                  ))}
                </Form>
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={icon5} alt="" /></div>
                <h4 className='mb-0 text-center'>Project management</h4>
              </Col>
              {/* 5th box end */}
              <Col className='box-part  p-2 rounded'>
                <Form className="text-start">
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                      />
                    </div>
                  ))}
                </Form>
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={icon6} alt="" /></div>
                <h4 className='mb-0 text-center'>Sales and CRM</h4>
              </Col>
              {/* 6th box end */}
              <Col className='box-part  p-2 rounded'>
                <Form className="text-start">
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                      />
                    </div>
                  ))}
                </Form>
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={icon7} alt="" /></div>
                <h4 className='mb-0 text-center'>Task management</h4>
              </Col>
              {/* 7th box end */}
              <Col className='box-part  p-2 rounded'>
                <Form className="text-start">
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                      />
                    </div>
                  ))}
                </Form>
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={icon8} alt="" /></div>
                <h4 className='mb-0 text-center'>HR</h4>
              </Col>
              {/* 8th box end */}
              <Col className='box-part  p-2 rounded'>
                <Form className="text-start">
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                      />
                    </div>
                  ))}
                </Form>
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={icon9} alt="" /></div>
                <h4 className='mb-0 text-center'>Operations</h4>
              </Col>
              {/* 9th box end */}
            </Row>
          </div>

          <Row>
            <Col sm="8" className='mx-auto text-center'>
              <Button className="rounded-pill orange-btn" onMouseOver={() => setModalShow(true)}>Get Started</Button>
            </Col>
          </Row>
          {/* Get Started link end */}
          <Row>
            <Col sm="12" className='text-center mx-auto banner-img'>
              <img className="img-fluid" src={bannerImg} alt="" />
            </Col>
          </Row>
          {/* banner-img end */}
        </Container>
      </div>
      {/* banner-section end */}

      <div className='study-task-section'>
        <Container>
          <Row>
            <Col sm="6" className='mx-auto'>
              <h2 className="section-head">
                The broker dashboard that lets <br /> you study your tasks and prioritize <br /> them, on <strong>
                  <nobr>your own.</nobr></strong>
              </h2>
            </Col>
            <Col sm="6" className='mx-auto'>
              <h3 className="section-subhead">
                Save your time and boost your efficiency as <br /> well as productivity by prioritizing your <br /> everyday tasks
              </h3>
              <Button className="rounded-pill blue-btn mt-2" onMouseOver={() => setModalShow(true)}>Get Started</Button>
            </Col>

            <Col sm="7" className='mx-auto text-center studyTaskImg-part'>
              <img className="img-fluid" src={studyTaskImg} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      {/* study-task-section end */}
      <div className='triangle-shape'></div>
      <div className='projects-productivity bg-blue'>
        <Container>

          <Row className='productivity-section'>
            <Col md="6" sm="12" className='left-contnt'>
              <h2 className='text-white section-head'>
                Streamline your tasks for <br /> <strong>maximum productivity</strong>
              </h2>
              <h3 className='text-white section-subhead'>Centralize all your tasks and edit them <br /> to your convenience in order to
                <br /> maximize productivity and efficiency.</h3>

            </Col>
            <Col md="6" sm="12">
              <img className="img-fluid" src={productivityImg} alt="" />
            </Col>

          </Row>
          {/* productivity-section end */}
          <Row className="testimonial-section">
            <Col lg="6" md="12" className='left-contnt'>
              <div className="d-flex align-items-center testimonial-contnt">
                <div className="flex-shrink-0">
                  <img className="img-fluid rounded-circle" src={userImg} alt="" />
                </div>
                <div className="flex-grow-1 ms-4">
                  <h5 className="text-white">"We use&nbsp;<a className="text-white site-link" href="https://www.trekr.com.au">trekr.com.au</a>&nbsp;to add our day-to-day tasks. We can also segregate them according to how much task is completed."
                  </h5>
                  <h5 className="text-white mt-4 mb-0">Ms. Anna Thomas</h5>
                </div>
              </div>
            </Col>
          </Row>
          {/* testimonial-section end */}



          <Row className="report-section">
            <Col md="6" sm="12" className='left-contnt'>
              <h2 className='text-white section-head'>
                Get a detailed report of the <br /> assigned tasks
              </h2>
              <h3 className='text-white section-subhead'>
                Collaborate effectively with the makers <br /> widely and have a detailed report about <br /> the assigned tasks.
              </h3>

            </Col>
            <Col md="6" sm="12">
              <img className="img-fluid" src={reportImg} alt="" />
            </Col>
          </Row>
          {/* report-section end */}
          <Row className="testimonial-section">
            <Col lg="6" md="12" className='left-contnt'>
              <div className="d-flex align-items-center testimonial-contnt">
                <div className="flex-shrink-0">
                  <img className="img-fluid rounded-circle" src={userImg1} alt="" />
                </div>
                <div className="flex-grow-1 ms-4">
                  <h5 className="text-white">"Since adopting&nbsp;<a className="text-white site-link" href="https://www.trekr.com.au">trekr.com.au</a>&nbsp;, our team hash made more than 50% improvement."
                  </h5>
                  <h5 className="text-white mt-4 mb-0">Matt</h5>
                </div>
              </div>
            </Col>
          </Row>
          {/* testimonial-section end */}



          <Row className="goals-section">
            <Col md="6" sm="12" className='left-contnt'>
              <h2 className='text-white section-head'>
                Easy add new tasks and stay <br /> <strong>on top of your goals.</strong>
              </h2>

            </Col>
            <Col md="6" sm="12">
              <img className="img-fluid" src={goalsImg} alt="" />
            </Col>
          </Row>
          {/* goals-section end */}

          <Row className="testimonial-section">
            <Col lg="6" md="12" className='left-contnt'>
              <div className="d-flex align-items-center testimonial-contnt">
                <div className="flex-shrink-0">
                  <img className="img-fluid rounded-circle" src={userImg2} alt="" />
                </div>
                <div className="flex-grow-1 ms-4">
                  <h5 className="text-white">"&nbsp;<a className="text-white site-link" href="https://www.trekr.com.au">trekr.com.au</a>&nbsp;allows you to efficiency add new tasks and prioritize them according to our urgency."
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
          {/* testimonial-section end */}

        </Container>
      </div>
      {/* projects-productivity end */}


      <div className='triangle-shape workflow-triangle-shape'></div>
      <div className='workflow-section'>
        <Container>
          <Row>
            <Col sm="12" className='heading-part text-center'>
              <h2 className='section-head'>
                <strong>Everything</strong> you need for <strong>any workflow</strong>
              </h2>
              <h3 className='section-subhead'> Easily build your ideal workflow with&nbsp;<a className="text-black site-link" href="https://www.trekr.com.au">trekr.com.au</a>&nbsp;building blocks.</h3>
            </Col>
          </Row>
          <Row>
            <Col lg="10" md="12" sm="12" className='icon-part text-center mx-auto'>
              <Card className="border-0 mb-3">
                <Card.Body>
                  <Row>
                    <Col>
                      <img className="img-fluid" src={workflowIcon1} alt="" />
                      <p className="mb-0">Boards</p>
                    </Col>
                    <Col>
                      <img className="img-fluid" src={workflowIcon2} alt="" />
                      <p className="mb-0">View</p>
                    </Col>
                    <Col>
                      <img className="img-fluid" src={workflowIcon3} alt="" />
                      <p className="mb-0">Dashboard</p>
                    </Col>
                    <Col>
                      <img className="img-fluid" src={workflowIcon4} alt="" />
                      <p className="mb-0">Integrations</p>
                    </Col>
                    <Col>
                      <img className="img-fluid" src={workflowIcon5} alt="" />
                      <p className="mb-0">Automations</p>
                    </Col>
                    <Col>
                      <img className="img-fluid" src={workflowIcon6} alt="" />
                      <p className="mb-0">Automations</p>
                    </Col>
                    <Col>
                      <img className="img-fluid" src={workflowIcon7} alt="" />
                      <p className="mb-0">Docs</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="boards-section">
            <Col md="6" sm="12" className="text-center">
              <img className="img-fluid" src={boardImg} alt="" />
            </Col>
            <Col md="6" sm="12" className='right-contnt'>
              <h2 className='text-blue section-head'>
                <strong>Boards</strong>
              </h2>
              <h3 className='section-subhead'>
                Everything starts with a home page the core of <br /> &nbsp;<a className="text-black site-link" href="https://www.trekr.com.au">trekr.com.au</a>&nbsp;. Add new team members and manage
                your tasks as well.
              </h3>
            </Col>
          </Row>
          {/* boards-section end */}

          <Row className="projects-section ">
            <Col md="12" sm="12" className="text-center mb-5 mt-5">
              <h2 className='title'><span className="text-orange"><strong>trekr</strong></span> projects</h2>
            </Col>
            <Col md="6" sm="12" className="text-center">
              <img className="img-fluid" src={trekrImg} alt="" />
            </Col>
            <Col md="6" sm="12" className='right-contnt'>
              <h2 className='text-blue section-head'>
                <strong>trekr</strong> projects
              </h2>
              <h3 className='mt-3 mb-4 section-subhead'>
                Create, edit and manage your <br /> tasks on your own.
              </h3>
              <Button className="rounded-pill blue-btn" onMouseOver={() => setModalShow(true)}>Get Started</Button>
            </Col>
          </Row>
          {/* products-section end */}

          <Row className="drive-impact-section mt-5 mb-5">
            <Col md="5" sm="12" className='left-contnt'>
              <h2 className='section-head'>
                See how <br /> our customers  <br />
                <nobr><strong> drive impact</strong></nobr>
              </h2>
              <Link className="text-black" to="#">
                <span>Read more success stories </span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </Col>
            <Col md="7" sm="12" className="text-center right-content">
              <div className="box-section">
                <h2 className="m-0 text-start section-head">
                  “Since adopting &nbsp;<a className="text-white site-link" href="https://www.trekr.com.au">trekr.com.au</a>&nbsp;, our <br /> team has made more than 50% <br /> improvement.”
                </h2>
              </div>
              <img className="img-fluid" src={clientImg} alt="" />
            </Col>
          </Row>
          {/* drive-impact-section end */}

          <Row className="supporting-section">
            <Col lg="5" className="text-center">
              <img className="img-fluid" src={reviewsImg} alt="" />
            </Col>
            <Col lg="7" className='right-contnt'>
              <h2 className='section-head'>
                <strong>Supporting</strong>  your growth <br /> every step of the way
              </h2>
              <h3 className='mt-3 mb-4 section-subhead'>
                Our support superheroes are a click away to help you <br /> get the most out of &nbsp;<a className="text-black site-link" href="https://www.trekr.com.au">trekr.com.au</a>&nbsp;, so you can focus <br />
                on working without limits
              </h3>
              <Row className=" support-time">
                <Col sm="4" className="support-time-single">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <img className="img-fluid rounded-circle" src={callIcon} alt="" />
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <h4 className="">24/7</h4>
                      <h5 className="mt-2 mb-0">Support anytime, anywhere</h5>
                    </div>
                  </div>
                </Col>
                <Col sm="4" className="support-time-single">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <img className="img-fluid rounded-circle" src={heartIcon} alt="" />
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <h4 className="">Voted #1</h4>
                      <h5 className="mt-2 mb-0">Most loved by customers on G2</h5>
                    </div>
                  </div>
                </Col>
                <Col sm="4" className="support-time-single">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <img className="img-fluid rounded-circle" src={clockicon} alt="" />
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <h4 className="">2 hour</h4>
                      <h5 className="mt-2 mb-0">Average <br />response time</h5>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="bottom-links">
                <Button className="rounded-pill blue-btn" onMouseOver={() => setModalShow(true)}>Get Started</Button>
                <Link className="visit-suport-link" to="#">
                  <span> Visit our support care </span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>

            </Col>
          </Row>
          {/* supporting-section end */}

        </Container>
      </div>
      {/* workflow-section end */}
      <div className='triangle-shape award-triangle-shape'></div>
      <div className='deliver-section bg-blue'>
        <Container>
          <Row>
            <Col sm="12" className='mx-auto text-center'>
              <h2 className="section-head">
                Deliver your best work <strong>with &nbsp;<a className="text-white site-link" href="https://www.trekr.com.au">trekr.com.au</a>&nbsp;</strong>
              </h2>
              <h3 className="section-subhead">7-days free trial &nbsp;|&nbsp; No credit card needed</h3>
              <Button className="rounded-pill orange-btn" onMouseOver={() => setModalShow(true)}>Get Started</Button>
            </Col>
          </Row>
          {/* deliver-section end */}
        </Container>
      </div>

      <footer className="footer-section">
      <Container>
          <Row className="foot-top-nav">
            <Col xl="4" lg="12" md="12" sm="12" className='footer-logo'>
              <a className="" href="https://www.trekr.com.au">
                <img
                  className="img-fluid mx-auto siteLogoImg"
                  src={trekrLightModeLogo}
                  alt="trekr logo"
                />
              </a>
            </Col>
            <Col xl="2" lg="3" md="3" sm="6" className='foot-top-list'>
              <Nav defaultActiveKey="/home" className="flex-column">
                <h5>Product</h5>
                <Nav.Link href="#">Product overview</Nav.Link>
                <Nav.Link href="#">Pricing</Nav.Link>
                <Nav.Link href="#">Enterprise </Nav.Link>
                <Nav.Link href="#">Small-medium business </Nav.Link>
                <Nav.Link href="#">Docs  </Nav.Link>
                <Nav.Link href="#">Templates  </Nav.Link>
                <Nav.Link href="#">Apps marketplace </Nav.Link>
                <Nav.Link href="#">Integrations  </Nav.Link>
                <Nav.Link href="#">Developers  </Nav.Link>
                <Nav.Link href="#">Work OS </Nav.Link>
                <Nav.Link href="#">Nonprofits </Nav.Link>
              </Nav>
            </Col>
            <Col xl="2" lg="3" md="3" sm="6" className='foot-top-list'>
              <Nav defaultActiveKey="/home" className="flex-column">
                <h5>Company</h5>
                <Nav.Link href="#">About us</Nav.Link>
                <Nav.Link href="#">Contact us</Nav.Link>
                <Nav.Link href="#">Careers </Nav.Link>
                <Nav.Link href="#">Find a partner</Nav.Link>
                <Nav.Link href="#">Become a partner</Nav.Link>
                <Nav.Link href="#">Affiliates </Nav.Link>
                <Nav.Link href="#">Press room</Nav.Link>
                <Nav.Link href="#">Investor relations</Nav.Link>
                <Nav.Link href="#">Contact sales</Nav.Link>
              </Nav>
            </Col>
            <Col xl="2" lg="3" md="3" sm="6" className='foot-top-list'>
              <Nav defaultActiveKey="/home" className="flex-column">
                <h5>Solutions </h5>
                <Nav.Link href="#">Marketing </Nav.Link>
                <Nav.Link href="#">Sales and CRM</Nav.Link>
                <Nav.Link href="#">IT </Nav.Link>
                <Nav.Link href="#">Software development</Nav.Link>
                <Nav.Link href="#">HR</Nav.Link>
                <Nav.Link href="#">Operations </Nav.Link>
                <Nav.Link href="#">Project management </Nav.Link>
                <Nav.Link href="#">Education </Nav.Link>
                <Nav.Link href="#">Inventory tracking</Nav.Link>
                <Nav.Link href="#">Remote work</Nav.Link>
              </Nav>
            </Col>
            <Col xl="2" lg="3" md="3" sm="6" className='foot-top-list'>
              <Nav defaultActiveKey="/home" className="flex-column">
                <h5>Resources </h5>
                <Nav.Link href="#">Support  </Nav.Link>
                <Nav.Link href="#">Daily webinars</Nav.Link>
                <Nav.Link href="#">Video tutorials </Nav.Link>
                <Nav.Link href="#">Community </Nav.Link>
                <Nav.Link href="#">Global events</Nav.Link>
                <Nav.Link href="#">Customer stories </Nav.Link>
                <Nav.Link href="#">Reviews  </Nav.Link>
                <Nav.Link href="#">Marketplace partners</Nav.Link>
                <Nav.Link href="#">Blog </Nav.Link>
                <Nav.Link href="#">Startup for startup </Nav.Link>
              </Nav>
            </Col>
          </Row>
          <Row className="foot-bottom-nav">
            <Col lg="9" md="12" className='mx-auto foot-bottom-listing'>
              <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                  <Nav.Link href="#">Status</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#">Security</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#">Terms and conditions</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#">Privacy policy</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#">Accessibility statement</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#">English</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col lg="3" md="12" className='mx-auto social-links'>
              <Nav className="justify-content-end" defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                  <Nav.Link href="#"><img className="img-fluid" src={instagram} alt="" /></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#"><img className="img-fluid" src={linkedin} alt="" /></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#"><img className="img-fluid" src={facebook} alt="" /></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#"><img className="img-fluid" src={twitter} alt="" /></Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>

        </Container>

      </footer>
      {/* footer-section end */}

      {/* registration modal start   */}
    
     <PopupForm
     show={modalShow}
     setShow={setModalShow}
     />
      {/* registration modal end   */}


</div>
{/* trekr-landing-page end */}
    </LandingWrap>
  )
}
