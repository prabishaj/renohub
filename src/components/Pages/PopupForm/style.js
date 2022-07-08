import Styled from "styled-components";

// import codeTesting from "../../../assets/images/login/codeTesting.svg";

const PopupFormWrap = Styled.div`


.modal-title {
  font-weight: 600;
}
.form-label {
  margin-bottom: 3px;
  font-size: 14px;
  font-weight: bold;
}
.form-control {
  font-size: 15px;
}
.submit-btn
{
  color: rgb(255,255,255);
  background-color: rgb(245,103,53);
  border-color: rgb(245,103,53);
  width: 170px;
  font-size: 20px;
  line-height: normal;
  padding: 10px 20px;
  margin: 0 0 20px;
}

.thanksPopupBody
{
  padding:20px;
}


@media (max-width: 400px){
  .modal-footer .submit-btn
  {
    width: 100%;
  }
}

`;

export default PopupFormWrap;
