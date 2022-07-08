import Styled from "styled-components";

// import codeTesting from "../../../assets/images/login/codeTesting.svg";

const LandingWrap = Styled.div`

body,
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  color: #2d2d2d;
}


.box-part .form-check-input[type=checkbox] {
  border-radius: 2px;
  border: 1px solid #54557A;
  background-color: transparent;
}
.box-part .form-check-input:focus {
  border-color:#54557A;
  outline: inherit;
  box-shadow: inherit;
}



.bg-blue {
  background-color: #05053c;
}
.blue-btn {
  color: #fff;
  background-color: #05053c;
  border-color: #05053c;
  &:hover
  {
      color: #05053c;
      background-color: #fff;
      border-color: #05053c;
  }
}
.orange-btn {
  color: #000;
  background-color: #ff9b15;
  border-color: #ff9b15;
  &:hover
  {
      color: #ff8a23;
      background-color: #fff;
      border-color: #ff8a23;
  }
}
.text-blue {
  color: #05053c;
}
.text-orange {
  color: #ff9b15;
}
.card {
  border: 0px solid rgb(222, 222, 222);
  box-shadow: rgb(0 0 0 / 16%) 0px 2px 6px;
}
.section-head {
  color: #141414;
  font-size: 30px;
  line-height: normal;
}
.section-subhead {
    color:#131313;
    font-size:20px;
    line-height: normal;
}
.btn {
    padding: 15px 40px;
    font-weight: 700;
    line-height: normal;
    font-size: 20px;
}


.siteLogoImg {
  height: 40px;
}


.header-navbar {
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #fff;
  -webkit-box-shadow: 0 -3px 8px 0 rgb(5 5 60);
  -moz-box-shadow: 0 -3px 8px 0 rgb(5 5 60);
  box-shadow: 0 -3px 8px 0 rgb(5 5 60);

  .navbar-brand {
    padding: 0;
    margin-right: 0px;
  }
  .navbar-nav 
  {
    .nav-link {
        color: #191919;
        margin-right: 25px;
      }
      .header-btn {
        color: #fff !important;
        background-color: #05053c;
        border: 1px solid #05053c;
        padding: 10px 20px !important;
        text-transform: uppercase;
        font-weight: bold;
        line-height: normal;
        margin: 0;
        text-align: center;
        font-size: 14px;
          &:hover 
          {
            color: #05053c !important;
            background-color: #fff;
            border: 1px solid #05053c;
          }
      }
      
  }
  
}


.triangle-shape {
  position: relative;
}
.triangle-shape:before {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #05053c;
  transform: skewY(-175deg);
  content: "";
  width: 100%;
  height: 280px;
  z-index: -1;
}
.projects-productivity {
  position: relative;
  top: 145px;
  padding-bottom: 10px;
}
.projects-productivity .section-subhead {
  opacity: 0.8;
}
.banner-section {
  padding: 70px 0px 30px;
  margin-bottom: 120px;
  position: relative;
  h2 {
    color: #fff;
    font-size: 58px;
    font-weight: 600;
  }
  h3 {
    color: #fff;
    font-size: 23px;
    margin-top: 17px;
    
  }
}
.box-part {
//   width: 130px;
//   height: 130px;
//   display: inline-table;
margin: 5px;
border: 2px solid #54557A;

  input {
    cursor: pointer;
  }
  .box-img {
    height: 40px;
    width: 40px;
    img {
      height: 30px;
    }
  }
  h4 {
    color: #fff;
    font-size: 14px;
    line-height: normal;
  }
}
.banner-img {
  position: relative;
  top: 75px;
  img {
    // width: 100%;
  }
}
.workflow-section {
    margin-top: 400px;
    h2.section-head {
          margin-bottom: 15px;
      }
      .icon-part
      {
          margin-top: 50px;
          .card-body 
          {
              padding: 25px;
          }
          img 
          {
              width: 50px;
              height: 50px;
          }
          p 
          {
              color: #858585;
              font-size: 18px;
              margin-top: 10px;
              line-height: normal;
          }
      }
  }
  .boards-section {
    margin-top: 110px;
    .right-contnt {
        padding: 50px 15px 50px 50px;
        h2.section-head {
            color: #0B0C42;
            }
            h3.section-subhead {
                color: #151515;
                opacity: 0.7;
            }
    }
    
}
.study-task-section
{
    h3 
    {
        margin-bottom:30px;
    }
}
.studyTaskImg-part {
    margin: 80px 0;
}
.left-contnt {
//   padding: 50px;
  h2.section-head {
    margin-top: 25px;
        margin-bottom: 20px;
        line-height: 40px;
    }
h3.section-subhead {
    margin: 0;
    line-height: 30px;
}
}
.right-contnt {
  padding: 50px 15px;
  h2.section-head {
    margin-bottom: 20px;
    line-height: 40px;
    
    }
    h3.section-subhead {
        margin: 0;
        line-height: 30px;
    }

}
.productivity-section {
margin-bottom: 70px;
}
.report-section
{
    margin-top: 120px;  
    margin-bottom: 70px;
}

.goals-section
{
    margin-top: 140px;   
    // margin-bottom: 120px;
    
}
.testimonial-section {
//   margin: 50px 0;
h5 
{
  font-size: 14px;
  line-height: 25px;
  opacity: 0.7;
}
  img 
  {
    width: 125px;
    height: 125px;
  }
}
.projects-section {
    margin-top: 120px;   
    margin-bottom: 120px;
    .title
    {
        font-size: 60px;
        margin-bottom: 100px;
    }
    img {
        height: 400px;
      }
    .right-contnt
    {
        padding: 70px 15px 20px;
        h2.section-head {
            font-size: 50px;
          }
          h3.section-subhead
          {
            font-size: 30px;
            line-height: normal;
            margin: 30px 0 !important;
          }
          
    }
 
}
.drive-impact-section
{
    .left-contnt {
        padding: 90px 15px 15px 15px;
         h2.section-head {
            font-size: 40px;
            line-height: normal;
        }
    }
    .right-content {
        position: relative;
        .box-section
        {
          background-color: #ff9b15;
          padding: 7%;
          color: #fff;
          min-height: 355px;
          border-radius: 16px;
        }
        h2 {
          color: #fff;
        }
        img {
            position: absolute;
            top: 200px;
            border-radius: 16px;
            width: 250px;
            height: 250px;
        }
      }
}

.supporting-section {
  margin-top: 200px;
  margin-bottom: 100px;

  .right-contnt {
    padding-left: 60px;
    padding-top: 10px;
    h2.section-head {
        font-size: 35px;
        line-height: 45px;
    }
}
  .support-time {
    margin: 25px 0 35px;
    img {
      height: 25px;
    }
    h4 {
      font-weight: 700;
      font-size: 20px;
    }
    h5 {
      font-size: 15px;
      opacity: 0.8;
      font-weight: 500;
    }
  }
  .bottom-links {

    .btn 
    {
      margin-right: 20px;
    }
    a.visit-suport-link {
        font-size: 20px;
        color: #2D2D2D !important;
        display: inline-block;
    }
  }
}

.award-section {
    .star-rating
    {
        img 
        {
          height: 40px;
        }
    }

    h2.section-head {
        margin: 30px 0 20px;
    font-size: 40px;
  }
  h3.section-subhead {
    font-size: 25px;
  }

  .award-imgs
  {
    margin-top: 75px;
  }
  .card {
    width: 265px;
    height: 450px;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    img {
      height: 190px;
      margin-top: 20px;
    }
    h5 {
    font-size: 15px;
    opacity: 0.8;
    margin-top: 20px;
    }
    h3 {
        margin-top: 20px;
    font-size: 16px;
    min-height: 110px;
    }
  }
}

.award-triangle-shape.triangle-shape:before {
    position: absolute;
    top: -90px;
    height: 180px;
}
.deliver-section {
  padding: 0 15px 60px;

  h2.section-head {
    color: #fff;
    font-size: 40px;
  }
  h3.section-subhead {
    color: #fff;
    margin: 20px 0 40px;
    font-size: 25px;
  }
}
.footer-section {
  padding: 60px 0px;

  .nav-link {
    font-size: 13px;
    font-weight: 500;
    color: #000;
    line-height: normal;
    // opacity: 0.8;
    cursor:pointer;
    &:hover
    {
      color:#ff9b15;
    }
  }
  .foot-top-nav {
    h5 {
      font-size: 15px;
      font-weight: bold;
    }
    .nav-link {
      padding: 5px 0;
    }
  }

  .foot-bottom-nav {
    border-top: 1px solid #ddd;
    margin-top: 40px;
    padding-top: 20px;
  }
  .social-links {
    .nav-link {
      padding: 0 5px;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
}


.trekr-landing-page .container-fluid {
  padding:0 30px;
}



@media (min-width: 1400px)
{
  .supporting-section {
    margin-bottom: 200px;
  }
  .trekr-landing-page .banner-section .container-fluid
{
  padding: 0 100px;
}
}

@media (max-width: 1399px)
{

.trekr-landing-page .banner-section .container-fluid
{
  padding: 0 70px;
}

}


@media (max-width: 1199px)
{


  .trekr-landing-page .banner-section .container-fluid
  {
    padding: 0 50px;
  }
    .container {
        max-width: 100%;
    }
    .footer-logo {
      text-align: center;
      margin-bottom: 40px;
    }
    .foot-top-nav
    {
      text-align: center;
    }
    .footer-section .nav-link {
      // font-size: 14px;
      // padding: 11px;
    }
    .footer-section .foot-bottom-nav {
      margin-top: 30px;
      padding-top: 15px;
  }
    .footer-section .social-links .nav-link img {
        width: 30px;
        height: 30px;
    }
    .award-section h2.section-head {
       
        font-size: 35px;
    }
    .supporting-section .right-contnt h2.section-head {
        font-size: 30px;
        line-height: 40px;
    }
    .section-subhead {
        font-size: 18px;
    }
    .supporting-section .support-time h4 {
      font-size: 18px;
  }
    .supporting-section .support-time h5 {
        font-size: 14px;
    }
    .supporting-section .right-contnt {
        padding-left: 15px;
    }
    .supporting-section {
      margin-bottom: 90px;
  }
    .btn {
        padding: 12px 30px;
        font-size: 18px;
    }
    .supporting-section .bottom-links a.visit-suport-link {
        font-size: 17px;
    }
    .drive-impact-section .left-contnt {
      padding: 70px 15px 15px 15px;
  }
    .drive-impact-section .left-contnt h2.section-head {
      font-size: 35px;
  }
    .drive-impact-section .right-content img {
        top: 175px;
        width: 200px;
        height: 200px;
    }
    .drive-impact-section .right-content .box-section {
        min-height: 300px;
    }
    .section-head {
        font-size: 25px;
    }
    .workflow-section .icon-part img {
      width: 30px;
      height: 30px;
  }
  .workflow-section {
    margin-top: 350px;
}
  .workflow-section .icon-part p {
    font-size: 15px;
  }
  .boards-section {
    margin-top: 60px;
}
.projects-section .title {
  font-size: 45px;
  margin-bottom: 60px;
}
.projects-section {
  margin-top: 50px;
  margin-bottom: 100px;
}
.projects-section .right-contnt h2.section-head {
  font-size: 35px;
}
.projects-section .right-contnt h3.section-subhead {
  font-size: 23px;
  margin: 20px 0 25px !important;
}
.projects-section img {
  height: 300px;
}
.box-part {
  margin: 15px;
  flex: 25%;
}
}
@media (max-width: 991px)
{
  .header-navbar .navbar-nav
  {
    display: inline-block;
  }
 
    .header-navbar .navbar-nav .nav-link {
        margin-right: 0px;
        padding: 10px;
    }
   
    .header-navbar .navbar-nav .header-btn {
        margin: 10px 0;
    }
    .header-navbar .navbar-toggler:focus {
        box-shadow: inherit;
    }
    .header-navbar .dropdown-menu
    {
      border:inherit;
    }
    .header-navbar .navbar-collapse {
      margin-top: 15px;
  }


    .banner-section h2 {
      font-size: 50px;
      line-height: normal;
  }
  .banner-section h3 {
    font-size: 20px;
    line-height: normal;
  }
  .box-part {
    margin: 15px;
    flex: 25%;
}
.section-head {
  font-size: 20px;
  line-height: 32px;
}
.section-subhead {
  font-size: 16px;
  line-height: 23px;
}
.section-head br, .section-subhead br
{
  display:none;
}
.left-contnt h2.section-head {
  line-height: 35px;
  font-size: 22px;
}
.testimonial-section img {
  width: 100px;
  height: 100px;
}
.projects-productivity .testimonial-section {
  // margin: 100px 0 0;
}
.goals-section {
  margin-top: 100px;
  margin-bottom: 40px;
}

.report-section {
  margin-top: 100px;
}
.btn {
  padding: 10px 25px;
  font-size: 15px;
}
.workflow-triangle-shape.triangle-shape:before {
  top: 105px;
}
.workflow-section {
  margin-top: 290px;
}
.workflow-section h2.section-head {
  font-size: 25px;
}
.workflow-section .section-subhead {
  font-size: 18px;
}
.workflow-section .icon-part {
  margin-top: 25px;
}
.study-task-section h3 {
  margin-bottom: 15px;
}
.triangle-shape:before {
  height: 120px;
  top: 70px;
}
.studyTaskImg-part {
  margin: 80px 0 0;
}
.banner-section {
  margin-bottom: 100px;
}
.drive-impact-section .left-contnt {
  padding: 50px 15px 15px 15px;
}
.boards-section .right-contnt {
  padding: 15px 15px 15px 15px;
}
.boards-section .right-contnt h2.section-head {
  margin-bottom: 0px;
}
.projects-section .title {
  font-size: 40px;
}
.projects-section .right-contnt h2.section-head {
  font-size: 30px;
  margin-bottom: 10px;
}
.projects-section .right-contnt h3.section-subhead {
  font-size: 21px;
  margin: 0 0 25px !important;
}
.projects-section .right-contnt {
  padding: 40px 15px 15px;
}
.projects-section .title {
  margin-bottom: 30px;
}
.projects-section {
  margin-top: 30px;
}
.supporting-section {
  margin-top: 150px;
  margin-bottom: 95px;
}
.award-section .card {
  width: 200px;
  padding: 15px;
}
.award-triangle-shape.triangle-shape:before {
  top: -50px;
  height: 100px;
}
.award-section h2.section-head {
  font-size: 28px;
}
.award-section h3.section-subhead {
  font-size: 22px;
}
.award-section .award-imgs {
  margin-top: 50px;
}
.deliver-section {
  padding: 30px 15px 50px;
}
.deliver-section h2.section-head {
  font-size: 30px;
  line-height: normal;
}
.deliver-section h3.section-subhead {
  font-size: 20px;
  line-height: normal;
}
.footer-section {
  padding: 30px 15px 30px;
}
.foot-bottom-listing ul, .social-links ul {
  justify-content: center !important;
  margin-bottom: 15px;
}


}

@media (max-width: 767px)
{

  .left-contnt {
    margin-bottom: 20px;
    text-align: center;
  }
  .icon-part .col {
    flex: 25%;
    margin: 15px;
}
.supporting-section .right-contnt h2.section-head {
  font-size: 25px;
  line-height: normal;
}
.supporting-section .right-contnt h3.section-subhead
{
  font-size: 16px;
  line-height: normal;
}


  .right-contnt {
    text-align: center;
}
.supporting-section .right-contnt {
  text-align: left;
}
.supporting-section .bottom-links a.visit-suport-link {
  font-size: 15px;
}
.supporting-section .bottom-links .btn {
  margin-bottom: 15px;
}

  .testimonial-contnt {
      display: block !important;
  }
  .testimonial-contnt .ms-4
  {
    margin-left: 0!important;
  }
  .testimonial-section img {
    margin-bottom: 20px;
  }
  .productivity-section {
    margin-top: 40px;
}
.report-section{
  margin-top: 40px;
  margin-bottom: 40px;
}
.goals-section{
  margin-top: 60px;
  margin-bottom: 40px;
}

.award-section .card {
  margin-top: 20px;
  width: 300px;
}
.drive-impact-section .right-content img {
  right: 0;
  margin-right: 35px;
}

  .foot-top-list:nth-last-child(3), .foot-top-list:nth-last-child(4) {
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
  } 

  .triangle-shape:before {
   
    top: 107px;
}


}


@media (max-width: 575px)
{

  .trekr-landing-page .container-fluid {
    padding:0 15px;
  }
  .trekr-landing-page .banner-section .container-fluid
  {
    padding: 0 15px;
  }
  .banner-section h2 {
    font-size: 40px;
  }
  .banner-section h3 {
    font-size: 18px;
  }
  .testimonial-section h5 br 
  {
    display:none;
  }
.support-time-single
{
  margin-bottom: 20px;
}
.support-time-single:last-child
{
  margin-bottom: 0px;
}
.support-time-single h5 br
{
  display:none;
}
.support-time-single h5
{
  font-size: 15px;
}
.award-section h2.section-head {
  line-height: normal;
}
.drive-impact-section .right-content img {
  right: 50%;
  margin-right: -76px;
  top: inherit;
  width: 150px;
  height: 150px;
  bottom: -70px;
}
.drive-impact-section .right-content h2 {
  text-align: center !important;
  line-height: normal;
}
.projects-section {
  margin-bottom: 0;
}
  .foot-top-list {
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
  } 
  .foot-top-list:last-child {
    margin-bottom: 0px;
    border-bottom: inherit;
    padding-bottom: 0px;
  } 
}


@media (max-width: 480px)
{
//   .header-navbar .navbar-brand {
//     text-align: center;
//     width: 100%;
//   }
//   .header-navbar.navbar-expand .navbar-nav {
//     flex-direction: column;
//     text-align: center;
//     width: auto;
//     margin: 0 auto;
//     justify-content: center !important;
// }
// .header-navbar .navbar-nav .nav-link {
//   margin-right: 0;
// }
// .header-navbar.navbar-expand {
//   flex-wrap: wrap;
//   padding: 15px 0;
// }


}

`;

export default LandingWrap;
