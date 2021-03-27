import React from "react";
import { Link } from "react-router-dom";
// Style
import styled from "styled-components";
const Welcome = () => {
  const logoSrc = "../img/LOGO white.svg";
  return (
    <WelcomeStyle className="landing-page">
      <div className="wrapper">
        <div className="header">
          <div className="content">
            <h1>
              Welcome to Cubicle <br />
              <span className="heading-secondary">A step toward future</span>
            </h1>
            <div className="buttons">
              <Link className="button register" to="/register">
                Register
              </Link>
              <Link className="button login" to="/login">
                Login
              </Link>
            </div>
          </div>

          <svg
            className="logo"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 2834.65 2834.65"
            style={{ enableBackground: "new 0 0 2834.65 2834.65" }}
            xmlSpace="preserve"
          >
            {/* <style type='text/css'> .st0{{ fill: '#FFFFFF' }} </style> */}
            <path
              className="st0"
              d="M1704,1500.21c-39.73,74.61-93.5,132.62-161.31,174.03c-67.81,41.41-144.82,62.85-230.99,64.34
	c-122.16,1.5-226.89-42.16-314.19-131s-130.95-194.83-130.95-318.01c0-126.89,43.83-232.51,131.53-316.87
	c85.42-83.6,189.96-125.04,313.62-124.29c86.17,0.75,164.49,22.75,234.93,66c67.44,42.51,119.9,99.56,157.37,171.15h-97.84
	c-71.99-103.77-172.47-154.91-301.44-153.42c-95.98,0-178.65,34.49-248,103.47c-69.36,68.97-105.17,151.93-107.41,248.87
	c-2.26,100.67,32.43,187.73,104.04,261.17c71.6,73.45,157.64,110.17,258.12,110.17c58.49,0,115.48-15.19,170.97-45.58
	c53.23-28.9,94.84-65.57,124.83-110.04H1704z"
            />
            <path
              className="st0"
              d="M2047.78,1490.27c-3.89-106.39-52.05-181.32-144.48-224.82c68.31-44.27,102.48-106.4,102.48-186.4
	c0-67.56-27.64-123.46-82.89-167.75c-52.16-41.93-114.01-62.9-185.61-62.9h-195.64c7.44,4.08,14.8,8.35,22.08,12.82l0.52,0.33
	c32.62,20.56,62.34,44.22,89.03,70.85h81.89c49.98,0,91.78,12.8,125.37,38.39c37.5,27.16,56.25,64.76,56.25,112.86
	c0,43.44-17.78,78.92-53.33,106.45c-31.54,24.43-67.55,38.03-108.02,40.78c-5.12,0.35-10.32,0.52-15.59,0.52h-164.06v-95.06h-5.17
	l-15.67-22.59c-21.44-30.91-45.43-56.49-72.16-76.83v522.09c29.76-21.23,54.2-45.91,72.94-73.69l15.61-23.14h4.45V1313.4h159.02
	c8.71,0,17.18,0.24,25.41,0.74c52.17,3.09,94.77,16,127.76,38.73c42.09,29.42,64.69,72.39,67.81,128.89
	c3.11,53.4-14.83,96.37-53.8,128.87c-38.96,32.52-93.14,48.77-162.51,48.77h-79.44c-29.92,31.29-63.48,58.34-100.51,80.96
	c-2.8,1.71-5.62,3.39-8.45,5.04h217.71c75.49,0,141.44-24.66,197.86-73.97C2023.06,1622.12,2050.11,1561.73,2047.78,1490.27z"
            />
          </svg>

          <img
            className="curve"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/626071/bottom-curve_copy.svg"
            alt="svg"
          />
          <img
            className="waves"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/626071/waves_copy.svg"
            alt="svg"
          />
        </div>
      </div>
      <div className="background"></div>
    </WelcomeStyle>
  );
};

const WelcomeStyle = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  font-weight: 400;
  .background {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    background: #a741ff;
    background: -moz-linear-gradient(top, #a741ff 0%, #5480fd 100%);
    background: -webkit-linear-gradient(top, #a741ff 0%, #5480fd 100%);
    background: linear-gradient(to bottom, #a741ff 0%, #5480fd 100%);
  }
  .wrapper {
    width: 80%;
    height: 80%;
    min-height: 800px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 2vh;
    margin: 60px 0;
    transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -webkit-box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.15);
  }
  .wrapper .header {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #81a2ff;
    background: -moz-linear-gradient(top, #81a2ff 0%, #c1e1ff 100%);
    background: -webkit-linear-gradient(top, #81a2ff 0%, #c1e1ff 100%);
    background: linear-gradient(to bottom, #81a2ff 0%, #c1e1ff 100%);
    overflow: hidden;
  }
  .wrapper .header .logo {
    width: 10rem;
    height: auto;
    position: absolute;
    top: 50px;
    left: 100px;
    .st0 {
      fill: #ffff;
    }
  }
  .wrapper .header .menu {
    list-style: none;
    margin: 0;
    padding: 0;
    line-height: 33px;
    position: absolute;
    top: 50px;
    right: 100px;
    text-align: right;
    width: auto;
  }
  .wrapper .header .menu li {
    display: inline-block;
    margin: 0 10px;
    color: #fff;
  }
  .wrapper .header .content {
    margin-top: 3rem;
    position: absolute;
    width: 100%;
    height: auto;
    max-width: 800px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -85%);
  }
  .wrapper .header .content h1 {
    color: #fff;
    margin: 0;
    font-size: 3em;
    line-height: 1.2em;
    width: 100%;
    text-align: center;
    .heading-secondary {
      font-size: 2.2rem;
      letter-spacing: 4px;
      word-spacing: 3px;
    }
  }
  .wrapper .header .content .buttons {
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 0;
  }
  .wrapper .header .content .button {
    display: inline-block;
    width: 150px;
    height: 50px;
    padding-left: 20px;
    background: #000;
    color: #fff;
    font-size: 1.3em;
    text-decoration: none;
    text-align: center;
    line-height: 50px;
    margin: 40px 5px 0;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: 0px 12px 20px -10px rgba(0, 0, 0, 0.65);
    -moz-box-shadow: 0px 12px 20px -10px rgba(0, 0, 0, 0.65);
    box-shadow: 0px 12px 20px -10px rgba(0, 0, 0, 0.65);
    transition: box-shadow 0.5s;
  }
  .wrapper .header .content .button:hover {
    -webkit-box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.65);
    -moz-box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.65);
    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.65);
    transition: box-shadow 0.5s;
  }
  /* .wrapper .header .content .button {
    background-size: 20px auto;

    background-position: 20px center;
  } */

  .wrapper .header .waves {
    width: calc(100% + 10px);
    height: auto;
    position: absolute;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    z-index: 0;
  }
  .wrapper .header .curve {
    display: none;
    width: calc(100% + 10px);
    height: auto;
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    z-index: 1;
  }
`;

export default Welcome;
