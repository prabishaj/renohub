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
        
      <div className='mx-auto mb-1 mt-1 text-center box-img'>
        <img className="img-fluid" src={logo} alt="" /></div>
            
            </Col>
          
            <Col sm="8" className='mx-auto text-center text-black'>
              <h2 classname="subhead text-right">Auckland Wide - Pokeno to Puhoi  Call us on: 1234567879</h2>
              <h2 className="section-subhead text-right">For all your renovation, maintenance, home staging, real estate sales and marketing needs Finance available - no deposit, no payments finance available to cover the complete project</h2>
            </Col>
          </Row>
          {/* banner-headig end */}

          <div sm="12" className='text-center mt-5 mb-5'>
            <Row>
                <Col classname="home1" type="submit">
                  <div class="frame">
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={home} alt="" type="submit"/></div>
                </div>
                <div class="home">
                <h3 className='home mb-0'>HOME</h3></div>
              </Col>
              {/* 1st box end */}
              <Col className="about" type="submit">
                <div class="frame">
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={about} alt="" type="submit"/></div>
                </div>
                <h3 className='mb-0 text-center'>ABOUT</h3>
              </Col>
              {/* 2nd box end */}
              <Col className='renovations' type="submit">
              <div class="frame">
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={renovation} alt="" type="submit"/></div>
                </div>
                <h3 className='mb-0 text-center'>RENOVATIONS</h3>
              </Col>
              {/* 3rd box end */}
              <Col className='home stage' type="submit">
              <div class="frame">
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={homestaging} alt="" type="submit"/></div>
                </div>
                <h3 className='mb-0 text-center'>HOME STAGING</h3>
              </Col>
              {/* 4th box end */}
              <Col className='marketing fees' type="submit">
              <div class="frame">
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={market} alt="" type="submit"/></div>
                </div>
                <h3 className='mb-0 text-center'>MARKETING FEES</h3>
              </Col>
              {/* 5th box end */}
              <Col className='finance' type="submit">
              <div class="frame">
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={finance} alt="" /></div>
                </div>
                <h3 className='mb-0 text-center'>FINANCE & APPLICATION</h3>
              </Col>
              {/* 6th box end */}
              <Col className='gallery' type="submit">
              <div class="frame">
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={gallery} alt=""  type="submit" /></div>
                </div>
                <h3 className='mb-0 text-center'>GALLERY</h3>
              </Col>
              {/* 7th box end */}
              <Col className='contact' type="submit">
              <div class="frame">
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={contacts} alt=""  type="submit" /></div>
                </div>
                <h3 className='mb-0 text-center'>CONTACT</h3>
              </Col>
              {/* 8th box end */}
              </Row>
              </div>
          <Row>
          <div class="image1">
          <div class=" text-left  bg-img">
          
              <img  src={img1} alt="" className="img-fluid" />
              <div class="text-block">
                <h1>RENOHUB IS ALL YOU NEED FOR YOUR KITCHEN, BATHROOM AND FULL HOME RENOVATION</h1>
                <p>Whether you are looking to update your kitchen, revitalise your outdoor area, or a complete house makeover we provide comprehensive renovation services from Pokeno to Puhoi. And if you are one of the many renovating to sell we also offer no deposit finance options to fund any upgrades or costs associated with listing, including home-staging, real estate sales marketing fees and valuations.</p>
                <button variant="secondary" class="btn">Read more</button>
              </div>
              </div>
            </div>
            </Row>
         <br></br>
           <Row>
           <div class="services">
           <Col md-12 classname="head">
            <h1>OUR SERVICES</h1>
            <p>We are your one-step shop for home renovations,maintanace and home-staging - finanace available. </p>
            
           </Col>
           </div>
           </Row><br></br>
           <Row>
           <Col classname="concrete" type="submit">
           <div class="frame1">
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={concrete} alt="" type="submit"/></div>
                </div>
                <h3 className='mb-0 text-center'>Concrete,tiling and paving</h3>
            </Col>
            <Col classname="carpet" type="submit">
            <div class="frame1">
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={carpet} alt="" type="submit"/></div>
                </div>
                <h3 className='mb-0 text-center'>Carpet and flooring</h3>
            </Col>
            <Col classname="reno" type="submit">
            <div class="frame1">
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={reno} alt="" type="submit"/></div>
                </div>
                <h3 className='mb-0 text-center'>Renovation and maintenance</h3>
            </Col>
            <Col classname="kitchen" type="submit">
            <div class="frame1">
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={kitchen} alt="" type="submit"/></div>
                </div>
                <h3 className='mb-0 text-center'>Kitchen renovation</h3>
            </Col>
            <Col classname="elect" type="submit">
            <div class="frame1">
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={elect} alt="" type="submit"/></div>
                </div>
                <h3 className='mb-0 text-center'>Electricals</h3>
            </Col>
           </Row><br></br>
           <Row>
           <Col classname="bathroom" type="submit">
           <div class="frame1">
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={bathroom} alt="" type="submit"/></div>
                </div>
                <h3 className='mb-0 text-center'>Bathroom renovation</h3>
            </Col>
            <Col classname="house" type="submit">
            <div class="frame1">
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={house} alt="" type="submit"/></div>
                </div>
                <h3 className='mb-0 text-center'>House washing</h3>
            </Col>
            <Col classname="painting" type="submit">
            <div class="frame1">
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={painting} alt="" type="submit"/></div>
                </div>
                <h3 className='mb-0 text-center'>House painting</h3>
            </Col>
            <Col classname="roof" type="submit">
            <div class="frame1">
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={roof} alt="" type="submit"/></div>
                </div>
                <h3 className='mb-0 text-center'>Roof painting and treatments</h3>
            </Col>
            <Col classname="curtains" type="submit">
            <div class="frame1">
                <div className='mx-auto mb-1 mt-1 text-center box-img'><img className="img-fluid" src={curtains} alt="" type="submit"/></div>
                </div>
                <h3 className='mb-0 text-center'>Curtains and blinds</h3>
            </Col>
           </Row>
           <br></br>
           <Row>
            <br></br>
           <Col classname="garden" type="submit">
           <div class="frame3">
                <div className='mx-auto mb-1 mt-1 text-center box-img1'><img className="img-fluid" src={garden} alt="" type="submit"/></div>
                </div>
                <h3 className='mb-0 text-center'>Gardens and landscaping</h3>
            </Col>
            <Col classname="staging" type="submit">
            <div class="frame3">
                <div className='mx-auto mb-1 mt-1 text-center box-img1'><img className="img-fluid" src={staging} alt="" type="submit"/></div>
                </div>
                <h3 className='mb-0 text-center'>House staging</h3>
            </Col>
            <Col classname="fencing" type="submit">
            <div class="frame3">
                <div className='mx-auto mb-1 mt-1 text-center box-img1'><img className="img-fluid" src={fencing} alt="" type="submit"/></div>
                </div>
                <h3 className='mb-0 text-center'>Fencing and gates</h3>
            </Col>
            <Col classname="Finance1" type="submit">
            <div class="frame3">
                <div class='box-img1'><img className="img-fluid" src={Finance1} alt="" type="submit"/></div>
                </div>
                <h3 className='mb-0 text-center'>Finance</h3>
            </Col>
            
           </Row>
           
            <br></br>
            
          {/* banner-img end */}
       
      {/* projects-productivity end */}
      <div class="border-top" display="inline-block" >
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
       <img  src={img2} alt="width:100%" className="img-fluid" />
       <div class="text-block1">
       <form action="/action_page.php" class="Form">
           <Row>
            <Col sm={12} md={12} lg={12} xl={12}>
              <h1>SEND US A MESSAGE</h1>
               <p>Fill up this form and we'll be in touch to discuss your requirements</p>
           </Col>
           <Col>
              <div class="name" color="white">
                  <input type="text" class="name" placeholder="First name*" name="fname" required/><br></br>
                  <input type="text" class="name" placeholder="Last name*" name="lname" required/>
                  <input type="number" class="name" placeholder="Contact number*" name="number" required/>
                  <input type="text" class="name" placeholder="Email ID*" name="email" required/>
                  <input type="text" class="name" placeholder="Location of job*" name="location" required/>
                  <button type="submit" class="btn1">Send message</button>
               </div>
           </Col>
           <Col classname="detail">
                 <input class="detail" type="text" placeholder="details*" name="details" required/>
          </Col>
         </Row>
       </form>
       <div class="pri">
       <p> Privacy Policy | This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</p>
       </div>
       </div>
       </div>
       </Row>
       
       <br></br>   
       
          
          {/* boards-section end */}
          
          <footer classname="footer-section">
            
          <div class="footer">
          <Row className="sect">
            
              <Col classname="home" type="submit">
              
              <h3 className='mb-2 first'>HOME</h3>
              </Col>
              <Col classname="home" type="submit">
              
              <h3 className='mb-2 text-center '>ABOUT</h3>
              </Col>
              <Col classname="home" type="submit">
              
              <h3 className='mb-2 text-center'>RENOVATIONS</h3>
              </Col>
              <Col classname="home" type="submit">
              
              <h3 className='mb-2 text-center'>HOMESTAGING</h3>
              </Col>
              <Col classname="home" type="submit">
              
              <h3 className='mb-2 text-center'>MARKETING FEES</h3>
              </Col>
              <Col classname="home" type="submit">
              
              <h3 className='mb-2 text-center'>GALLERY</h3>
              </Col>  
              <Col classname="home" type="submit">
              
              <h3 className='mb-2 text-center'>CONTACT</h3>
              </Col> 
              <Col classname="home" type="submit">
              
              <h3 className='mb-2 text-center'>FINANCE &APPLICATIONS</h3>
              </Col> 
                 
            
            
            </Row>
            <br></br>
            <div class="footer" display="inline-block">
            <Row>
              
              <Col sm="6" align="center" class="contact" display="inline-block">
                
              <img  src={call} alt="width:80%" className="img-fluid1" display="inline-block" />
              
              <span class="class" >
              
               <span class="span2">Contact number</span><br></br>
               
             <span class="span4">123456789</span>
             </span>
              </Col>
              <Col sm="6" align="center" class="clock" display="inline">
              <img  src={clock} alt="width:80%" className="img-fluid1" />
              
              <span class="class"/>
              
              <span class="span2">Hours of operations</span><br></br>
              
              <span class="span3">7am-7pm from Mon to Sat</span>
              
              </Col>
              
            </Row>
            
            <br></br>
            </div>
            
            <Row>
              <Col sm="9" align="center" class="end">
                <p>2015 - 2022 Renohub. +64212223344. Powered by Web Genius. Page: Home Staging Auckland | Staging a House for Sale West Auckland - Last updated: 18th January, 2022 Site Map | Links to other quality businesses.</p>
              </Col>
            <Col  sm="3" align="center" className='social-media'>
            <img  src={facebook} alt="width:100%" className="img-fluid" />
            <img  src={twitter} alt="width:100%" className="img-fluid" />
            <img  src={youtube} alt="width:100%" className="img-fluid" />
            <img  src={linkedin} alt="width:100%" className="img-fluid" />
            </Col>
            
          </Row>
          
        </div>
</footer>

      
        </div>
      </div>
</Container>
    </LandingWrap>
  )
}
