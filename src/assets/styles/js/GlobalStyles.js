import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
       
        body {
          font-family: ${({ theme }) => theme["font-stack"]}!important;  
          
        }

        h1, h2, h3, h4, h5, h6, 
        .h1, .h2, .h3, .h4, .h5, .h6
        {
            font-family: ${({ theme }) => theme["font-stack"]}!important;
            color: ${({ theme }) => theme["heading"]};
        }

        * {
            &:focus {
                outline: inherit;
            }
            box-sizing: border-box;
        }

        .font-bold
        {
          font-weight:bold
        }
     
        .form-select:focus {
          border-color: #ced4da;
          outline: 0;
          box-shadow: inherit;
      }
      .loginformbody .text-center .btn 
      {
        width: 170px;
      }
      .loginSubmitBtn
      {
        position:relative;
      }
      .loginSubmitBtn .spinner-grow
      {
        position: absolute;
        left: 10%;
        top: 50%;
        margin-top: -7px;
      }
        
        .btn 
        {
            &.btn-orange {
                color: #fff;
                background-color: ${({ theme }) => theme["orange-color"]};
                border-color: ${({ theme }) => theme["orange-color"]};
                margin: 0 auto;
                font-size: 16px;
                &:hover {
                    color: #fff;
                    background-color: ${({ theme }) => theme["orange-hover"]};
                border-color:${({ theme }) => theme["orange-hover"]};
                }
            }
        }

        a {
            color: ${({ theme }) => theme["orange-color"]};
            text-decoration: none;
            &:hover {
                color: ${({ theme }) => theme["orange-hover"]};
                text-decoration: none;
            }
        }

        .btn-close {
            &:focus {
                box-shadow: inherit !important;
            }
        }

        .modal {
            .modal-content {
                border-radius: 10px;
            }
        }

        .cursor
        {
          cursor : pointer;
        }

        .form-control {
            &:focus {
                box-shadow: none !important;
            }
        }

        .btn-check {
            &:focus {
                + {
                    .btn {
                        box-shadow: none !important;
                        outline: 0;
                        box-shadow: none;
                    }
                }
            }
        }

        .btn {
            &:focus {
                box-shadow: none !important;
                outline: 0;
                box-shadow: none;
            }
            // background-color: #ddd;
        }
        
        button:focus {
            outline: inherit;
        }
        
        *{
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        a {
            &:active,
            &:hover,
            &:focus {
            text-decoration: none;
            color: ${({ theme }) => theme["body-text"]};
            }
        }
        
        button,
        html,
        input,
        select,
        textarea {
            font-family: ${({ theme }) => theme["font-stack"]}!important;
        }
        
        input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
        
        input::-ms-clear,
        input::-ms-reveal {
            display: none;
        }
        
        input[type="text"]::-ms-clear {
            display: none;
        }
        
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        
        input[type="number"] {
            -moz-appearance: textfield;
        }
        
        li {
            list-style: none;
        }
        
        ul {
            padding: 0px;
            margin: 0px;
        }
        
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        
        .form-control input::-webkit-input-placeholder {
            /* Chrome/Opera/Safari */
            color: ${({ theme }) => theme["gray-color"]};
        }
        
        .form-control input::-moz-placeholder {
            /* Firefox 19+ */
            color: ${({ theme }) => theme["gray-color"]};
        }
        
        .form-control input:-ms-input-placeholder {
            /* IE 10+ */
            color: ${({ theme }) => theme["gray-color"]};
        }
        
        .form-control input:-moz-placeholder {
            /* Firefox 18- */
            color: ${({ theme }) => theme["gray-color"]};
        }
        
        input:focus {
            outline: inherit;
        }
        
        select:focus {
            outline: inherit;
        }

        .btn.focus, .btn:focus {
            outline: inherit;
            box-shadow: inherit;
        }

        .form-control:focus {
          border-color: #ced4da;
        }
        .navbar-dark {

            .top-menu-links {
              color: ${({ theme }) => theme["orange-color"]};
            }

            .navbar-nav {
                .nav-link {
                  color: ${({ theme }) => theme["darkMode-lightColor"]} ;
                  &:active,
                  &:hover,
                  &:focus {
                    color: ${({ theme }) => theme["darkMode-lightColor"]};
                  }
                }
            }

            .dropdown-menu
            {
              padding: 0;
              
              .dropdown-item {
                  padding: 5px 20px;
                  .top-menu-links {
                      color: #212529;
                  }
                  &.active,&:active {
                      background-color: ${({ theme }) => theme["orange-color"]};
                      .top-menu-links {
                          color: ${({ theme }) => theme["darkMode-lightColor"]};
                          background-color: ${({ theme }) =>
                            theme["orange-color"]};
                          &.active {
                            color: ${({ theme }) =>
                              theme["darkMode-lightColor"]};
                          }
                      }
                  }
              }
            }
          }

          .navbar-light {
            .top-menu-links {
              color: ${({ theme }) => theme["orange-color"]};
            }
            .navbar-nav {
              .nav-link {
                color: #000;
                &:active,
                &:hover,
                &:focus {
                  color: #000;
                }
              }
            }
            .dropdown-menu
            {
              padding: 0;
            .dropdown-item {
              padding: 5px 20px;
              .top-menu-links {
                color: #212529;
              }
              &.active,
              &:active {
                background-color: ${({ theme }) => theme["orange-color"]};
                .top-menu-links {
                  color: ${({ theme }) => theme["darkMode-lightColor"]};
                  background-color: ${({ theme }) => theme["orange-color"]};
                  &.active {
                    color: ${({ theme }) => theme["darkMode-lightColor"]};
                  }
                }
              }
            }
          }
          }
          // header end
          // sidebar start
          .darkmode {

            .sidebar {
              
              .nav {
                .dropmenuitems {
                  .nav-link {
                    color: ${({ theme }) => theme["darkMode-lightColor"]};
                  }
                }
              }
              .backtoMainSideBar {
                background: #000000;
                .backLinkMain {
                  .backlink {
                    color: ${({ theme }) => theme["darkMode-lightColor"]};
                    svg {
                      path {
                        fill: ${({ theme }) => theme["darkMode-lightColor"]};
                      }
                    }
                    .backTxt {
                      // color: ${({ theme }) => theme["darkMode-lightColor"]};
                    }
                    &:hover {
                      color: ${({ theme }) => theme["orange-color"]};
                      background-color: transparent;
                      svg {
                        path {
                          fill: ${({ theme }) => theme["orange-color"]};
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          
          // sidebar end
          .nav-tabs {
            border-bottom: inherit;
            .nav-link {
              color: ${({ theme }) => theme["tabLink"]};
              background-color: ${({ theme }) => theme["tabBg"]};
              border-color: transparent transparent ${({ theme }) => theme["tabLink"]} ;
              &.active {
                 color:  ${({ theme }) => theme["tabLink"]};
                 background-color: ${({ theme }) => theme["tabBg"]};
                 border-color: ${({ theme }) => theme["tabLink"]} ${({ theme }) => theme["tabLink"]} transparent;
              }
            }
          }
          .tab-content .tab-pane.active
          {
            color:  ${({ theme }) => theme["panel-heading"]};
          }
          .alert-success{
            background-color : #008000;
            border: 1px solid #008000;
            color : #fff;
          }

 

`;
