import React from 'react';
import { Container, Row, Col} from "react-bootstrap";
import LandingWrap from "./style";
import logo from "../../../assets/images/landing/logo.svg";
import home from "../../../assets/images/landing/home.svg";
import about from "../../../assets/images/landing/about.svg";
import renovation from "../../../assets/images/landing/renovation.svg";
import homestaging from "../../../assets/images/landing/homestaging.svg";
import market from "../../../assets/images/landing/market.svg";
import finance from "../../../assets/images/landing/finance.svg";
import gallery from "../../../assets/images/landing/gallery.svg";
import contacts from "../../../assets/images/landing/contacts.svg";
import concrete from "../../../assets/images/landing/concrete.svg";
import carpet from "../../../assets/images/landing/carpet.svg";
import reno from "../../../assets/images/landing/reno.svg";
import kitchen from "../../../assets/images/landing/kitchen.svg";
import elect from "../../../assets/images/landing/elect.svg";
import bathroom from "../../../assets/images/landing/bathroom.svg";
import house from "../../../assets/images/landing/house.svg";
import painting from "../../../assets/images/landing/painting.svg";
import roof from "../../../assets/images/landing/roof.svg";
import curtains from "../../../assets/images/landing/curtains.svg";
import garden from "../../../assets/images/landing/garden.svg";
import staging from "../../../assets/images/landing/staging.svg";
import fencing from "../../../assets/images/landing/fencing.svg";
import Finance1 from "../../../assets/images/landing/Finance1.svg";
import img1 from "../../../assets/images/landing/Image 1@2x.png";
import img2 from "../../../assets/images/landing/Image 2@2x.png";
import deposite from "../../../assets/images/landing/deposite.svg";
import call from "../../../assets/images/landing/call.svg";
import clock from "../../../assets/images/landing/clock.svg";
import linkedin from "../../../assets/images/landing/linked.png";
import facebook from "../../../assets/images/landing/fb@2x.png";
import youtube from "../../../assets/images/landing/youtube@2x.png";
import twitter from "../../../assets/images/landing/tweet@2x.png";

export const Landing = () => {

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <LandingWrap>
        <Container fluid>
           <div className="renohub-landing-page">
              <div className='banner-section bg-white float-center'>
                <Row> 
                     <Col sm="3" classname="logo">
                            <div className='mx-auto mb-1 mt-1 text-center'>
                            <img className="logo1" src={logo} alt="Renohub" /></div>
                     </Col>
                     <Col sm="8" className='mx-auto text-center text-black'>
                         <Row>
                              <Col sm="12" md="9" lg="9" className='call'>
                                  <p className='pokeno'>Auckland Wide - Pokeno to Puhoi </p> 
                              </Col>
                              <Col sm="12" md="3" lg="3" className='call'>
                                   <p className='pokeno1' > Call us on: 1234567879</p>
                              </Col>
                         </Row>
                         <br/>
                         <Row>
                              <Col lg="12" md="12" sm="12" className='call'>
                                    <p className='renovation'>For all your renovation, maintenance, home staging, real estate sales and marketing needs<br/> Finance available - no deposit, no payments finance available to cover the complete project</p>
                              </Col>
                         </Row>
                     </Col>
                </Row>

          {/* banner-headig end */}

          <div sm="12" className='text-center mt-5 mb-5'>
            <Row>
                 <Col lg="1" className='paint' ></Col>
                 <Col className='space' type="submit">
                       <div class="frame">
                           <div className='mx-auto mb-1 mt-1 text-center box-img'> 
                                  <img className="img-fluid" src={home} alt="Home" type="submit"/>
                           </div>
                       </div>
                       <div class="home">
                            <p className='home mb-0 orange'>HOME</p>
                       </div>
                  </Col>

              {/* 1st box end */}

              <Col className='space' type="submit">
                  <div class="frame">
                        <div className='mx-auto mb-1 mt-1 text-center box-img'>
                               <img className="img-fluid" src={about} alt="About" type="submit"/>
                        </div>
                  </div>
                            <p className='mb-0 text-center black'>ABOUT</p>
              </Col>

              {/* 2nd box end */}

              <Col className='renovations space' type="submit">
                    <div class="frame">
                          <div className='mx-auto mb-1 mt-1 text-center box-img'>
                                <img className="img-fluid" src={renovation} alt="Renovation" type="submit"/>
                          </div>
                    </div>
                               <p className='mb-0 text-center black'>RENOVATIONS</p>
              </Col>

              {/* 3rd box end */}

              <Col className='homestage space' type="submit">
                     <div class="frame">
                          <div className='mx-auto mb-1 mt-1 text-center box-img '>
                                <img className="img-fluid" src={homestaging} alt="Home Stage" type="submit"/>
                          </div>
                     </div>
                          <p className='mb-0 text-center black'>HOME STAGING</p>
             </Col>

              {/* 4th box end */}

              <Col className='marketingfees space' type="submit">
                  <div class="frame">
                       <div className='mx-auto mb-1 mt-1 text-center box-img'>
                               <img className="img-fluid" src={market} alt=" Marketing Fees" type="submit"/>
                      </div>
                 </div>
                          <p className='mb-0 text-center black'>MARKETING FEES</p>
             </Col>

              {/* 5th box end */}

              <Col  className='finance space' type="submit">
                   <div class="frame">
                         <div className='mx-auto mb-1 mt-1 text-center box-img'>
                             <img className="img-fluid" src={finance} alt=" Finance" />
                         </div>
                   </div>
                          <p className='mb-0 text-center black'>FINANCE & APPLICATION</p>
              </Col>

              {/* 6th box end */}

              <Col className='gallery space' type="submit">
                    <div class="frame">
                         <div className='mx-auto mb-1 mt-1 text-center box-img'>
                                 <img className="img-fluid" src={gallery} alt=""  type="submit" />
                         </div>
                    </div>
                               <p className='mb-0 text-center black'>GALLERY</p>
              </Col>

              {/* 7th box end */}

              <Col className='contact' type="submit">
                    <div class="frame">
                         <div className='mx-auto mb-1 mt-1 text-center box-img'>
                                  <img className="img-fluid" src={contacts} alt=""  type="submit" />
                        </div>
                   </div>
                               <p className='mb-0 text-center black'>CONTACT</p>
              </Col>
              <Col lg="1" className='paint'></Col>

              {/* 8th box end */}

              </Row>
          </div>
          <Row>
              <div class="image1">
             {/* <div class=" text-left  bg-img ">
         </div> */}
              {/* <img  src={img1} alt="" className="img-fluid" />  */}
                <div class="text-block" >
                   <div className='cent'>
                       <Row>
                             <Col sm="12" lg="12">
                                    <p className='hall'>RENOHUB IS ALL YOU NEED<br/> FOR YOUR KITCHEN, BATHROOM <br/> AND FULL HOME RENOVATION</p>
                             </Col>
                             <Col lg="12">
                                    <p className='kitchen'>Whether you are looking to update your kitchen, revitalise your outdoor<br/> area, or a complete house makeover we provide comprehensive renovation <br/> services from Pokeno to Puhoi. And if you are one of the many renovating <br/>to sell we also offer no deposit finance options to fund any upgrades or<br/> costs associated with listing, including home-staging, real estate sales<br/> marketing fees and valuations.</p>
                             </Col>
                       </Row>
                           <button variant="secondary" class="btn">Read more</button>
                  </div>
                </div>
            </div>
            </Row>
              <br></br>
              <Row>
                  <div class="services">
                      <Col md-12 classname="head">
                            <p className='service'>OUR SERVICES</p>
                            <p className='one-step'>We are your one-step shop for home renovations,maintanace and home-staging - finanace available. </p> 
                      </Col>
                  </div>
              </Row>
           <br></br>
              <Row>

                    <Col classname="concrete" type="submit">
                           <div class="frame1">
                                <div className='mx-auto mb-1 mt-1 text-center box-img'>
                                          <img className="img-fluid" src={concrete} alt="concrete" type="submit"/>
                                </div>
                           </div>
                                  <p className='mb-0 text-center concrete'>Concrete,tiling and paving</p>
                    </Col>

                    <Col type="submit">
                        <div class="carpet">
                              <div className='mx-auto mb-1 mt-1 text-center box-img'>
                                      <img className="img-fluid" src={carpet} alt=" carpet" type="submit"/>
                              </div>
                        </div>
                                 <p className='mb-0 text-center concrete'>Carpet and flooring</p>
                     </Col>


                    <Col classname="reno" type="submit">
                          <div class="frame1">
                                 <div className='mx-auto mb-1 mt-1 text-center box-img'>
                                       <img className="img-fluid" src={reno} alt=" Renovation" type="submit"/>
                                </div>
                          </div>
                                <p className='mb-0 text-center concrete'>Renovation and maintenance</p>
                     </Col>

                     <Col classname="kitchen" type="submit">
                           <div class="frame1">
                                   <div className='mx-auto mb-1 mt-1 text-center box-img'>
                                         <img className="img-fluid" src={kitchen} alt="" type="submit"/>
                                   </div>
                            </div>
                                  <p className='mb-0 text-center concrete'>Kitchen renovation</p>
                      </Col>

                      <Col classname="elect" type="submit">
                            <div class="frame1">
                                  <div className='mx-auto mb-1 mt-1 text-center box-img'>
                                         <img className="img-fluid" src={elect} alt="" type="submit"/>
                                  </div>
                             </div>
                                     <p className='mb-0 text-center concrete '>Electricals</p>
                       </Col>

              </Row>
              <br>
              </br>

              <Row>
                    <Col classname="bathroom" type="submit">
                         <div class="frame1">
                                  <div className='mx-auto mb-1 mt-1 text-center box-img'>
                                         <img className="img-fluid" src={bathroom} alt="" type="submit"/>
                                  </div>
                         </div>
                                      <p className='mb-0 text-center concrete'>Bathroom renovation</p>
                     </Col>

                     <Col classname="house" type="submit">
                           <div class="frame1">
                                  <div className='mx-auto mb-1 mt-1 text-center box-img'>
                                        <img className="img-fluid" src={house} alt="" type="submit"/>
                                  </div>
                           </div>
                                      <p className='mb-0 text-center concrete'>House washing</p>
                     </Col>

                     <Col classname="painting" type="submit">
                            <div class="frame1">
                                   <div className='mx-auto mb-1 mt-1 text-center box-img'>
                                            <img className="img-fluid" src={painting} alt="" type="submit"/>
                                   </div>
                             </div>
                                         <p className='mb-0 text-center concrete'>House painting</p>
                     </Col>

                     <Col classname="roof" type="submit">
                           <div class="frame1">
                                 <div className='mx-auto mb-1 mt-1 text-center box-img'>
                                        <img className="img-fluid" src={roof} alt="" type="submit"/>
                                 </div>
                           </div>
                                           <p className='mb-0 text-center concrete'>Roof painting and treatments</p>
                     </Col>

                     <Col classname="curtains" type="submit">
                           <div class="frame1">
                                    <div className='mx-auto mb-1 mt-1 text-center box-img'>
                                            <img className="img-fluid" src={curtains} alt="" type="submit"/>
                                    </div>
                           </div>
                                           <p className='mb-0 text-center concrete'>Curtains and blinds</p>
                     </Col>
           </Row>
           <br>
           </br>
           <Row>
            <br></br>
             
               <Col classname="garden" type="submit">
                    <div class="frame3">
                            <div className='mx-auto mb-1 mt-1 text-center box-img1'>
                                    <img className="img-fluid" src={garden} alt="" type="submit"/>
                            </div>
                     </div>
                                 <p className='mb-0 text-center concrete'>Gardens and landscaping</p>
               </Col>

               <Col classname="staging" type="submit">
                    <div class="frame3">
                         <div className='mx-auto mb-1 mt-1 text-center box-img1'>
                                  <img className="img-fluid" src={staging} alt="" type="submit"/>
                         </div>
                    </div>
                                  <p className='mb-0 text-center concrete'>House staging</p>
               </Col>

              <Col classname="fencing" type="submit">
                    <div class="frame3">
                           <div className='mx-auto mb-1 mt-1 text-center box-img1'>
                                  <img className="img-fluid" src={fencing} alt="" type="submit"/>
                           </div>
                    </div>
                                    <p className='mb-0 text-center concrete'>Fencing and gates</p>
             </Col>

             <Col classname="Finance1" type="submit">
                   <div class="frame3">
                         <div class='box-img1'>
                                <img className="img-fluid" src={Finance1} alt="" type="submit"/>
                        </div>
                  </div>
                                <p className='mb-0 text-center concrete'>Finance</p>
             </Col>
            
           </Row>
           
            <br></br>
            
          {/* banner-img end */}
       
      {/* projects-productivity end */}
      <div class="border-top" >
            <Row>
                 <Col sm='6' display="inline-block">
                    <div class=" text-center  bg-img3">
                        <img  src={deposite} alt="" className="img-fluid" />
                            <span>No deposite</span>
                    </div>
                 </Col>

                <Col sm='6' class="mar2" display="inline-block">
                      <div class=" text-left  bg-img3">
                            <img  src={deposite} alt="" className="img-fluid" />
                               <span>No payment untill settlement day</span>
                      </div>
                 </Col>

            </Row>
     </div>

          <Row>
              <div class="bg-img2 ">
                  {/* <img  src={img2} alt="width:100%" className="img-fluid"/> */}
                     <div class="text-block1">
                        <div className='cent'>
                             <Row>
                                  
                                   <form action="/action_page.php" class="Form">
                                  <Col>
                                  <Col sm={12} md={12} lg={12} xl={12}>
                                         <p className='send'>SEND US A MESSAGE</p>
                                         <p className='requirements'>Fill up this form and we'll be in touch to discuss your requirements</p>
                                   </Col>
                                    <div >
                                          <Row >
                                          <Col lg="3"sm="3" xs="3" md="3"  className='form-data'>
                                              <input type="text" class="name" placeholder="First name*" name="fname" required/><br></br>
                                              <input type="text" class="name" placeholder="Last name*" name="lname" required/>
                                              <input type="number" class="name" placeholder="Contact number*" name="number" required/>
                                              <input type="text" class="name" placeholder="Email ID*" name="email" required/>
                                              <input type="text" class="name" placeholder="Location of job*" name="location" required/>
                                          </Col>
                                          <Col classname="detail">
                                               <input class="detail" type="text" placeholder="details*" name="details" required/>
                                          </Col>
                                          </Row>
                                              <button type="submit" class="btn1">Send message</button>
                                      </div>
                                   </Col>

                                  
                                   </form>
                             </Row>
                        
                                 <div class="pri">
                                        <p> Privacy Policy | This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</p>
                                 </div>
                        </div>    
                     </div>
              </div>
       </Row>
       
       <br></br>   
       
          
          {/* boards-section end */}
          
          <footer classname="footer-section">
                   <div class="footer">
                        <Row className="sect">
                                     <Col lg="1" sm="6"  xs="6" classname="home" type="submit">
                                             <p className='mb-2 first'>HOME</p>
                                     </Col>
                                     <Col lg="1" sm="6" xs="6" classname="home" type="submit">
                                               <p className='mb-2 text-center '>ABOUT</p>
                                     </Col>
                                     <Col lg="2" sm="6" xs="6" classname="home" type="submit">
                                               <p className='mb-2 text-center'>RENOVATIONS</p>
                                     </Col>
                                     <Col lg="1" sm="6" xs="6" classname="home" type="submit">
                                               <p className='mb-2 text-center'>HOMESTAGING</p>
                                     </Col>
                                     <Col lg="2" sm="6" xs="6"classname="home" type="submit">
                                               <p className='mb-2 text-center'>MARKETING FEES</p>
                                     </Col>
                                     <Col lg="1" sm="6"  xs="6" classname="home" type="submit">
                                              <p className='mb-2 text-center'>GALLERY</p>
                                     </Col>  
                                     <Col lg="1" sm="6" xs="6" classname="home" type="submit">
                                               <p className='mb-2 text-center'>CONTACT</p>
                                     </Col> 
                                      <Col lg="2" sm="6" xs="6" classname="home" type="submit">
                                                  <p className='mb-2 text-center'>FINANCE&APPLICATIONS</p>
                                      </Col> 
                        </Row>
            <br></br>
                 <div class="footer" display="inline-block">
                    <Row>
                        <Col sm="6" align="center" class="contact" display="inline-block"> 
                               <img  src={call} alt="Call" className="img-fluid1" display="inline-block" />
                                   <span class="class" >
                                       <span class="span2">Contact number</span><br></br>
                                        <span class="span4">123456789</span>
                                  </span>
                       </Col>

                      <Col sm="6" align="center" class="clock" display="inline">
                              <img  src={clock} alt="Clock" className="img-fluid1" />
                              <span class="class"/>
                              <span class="span2">Hours of operations</span><br></br>
                              <span class="span3">7am-7pm from Mon to Sat</span>
                     </Col>

                 </Row>
            
            <br></br>
            </div>
            
                <Row><Col lg="4"></Col>
                         <Col sm="12" lg="5"class="end msg">              
                               <p className="ft-se">     <pre>                   2015-2022 Renohub.+64212223344.Powered by Web Genius.<br/> 
                                                               Page:Home Staging Auckland|Staging a House for Sale West Auckland-Last updated:18th January,2022  <br/>
                                                    <pre>                          Site Map|Links to other quality businesses.</pre>   </pre></p> 
                         </Col>

                         <Col  sm="12" lg="3" align="right" className='social-media'>
                                <img  src={facebook} alt="facebook" className="fb-img" />
                                <img  src={twitter} alt="twitter" className="fb-img" />
                                <img  src={youtube} alt="youtube" className="fb-img" />
                                <img  src={linkedin} alt="LinkedIn" className="fb-img" />
                         </Col>
            
               </Row> 
        </div>
</footer>
        </div>
      </div>
      <img1/>
</Container>
    </LandingWrap>
  )
}
