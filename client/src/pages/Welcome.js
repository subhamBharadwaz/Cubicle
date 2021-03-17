import React from 'react';
import { Link } from 'react-router-dom';
// Style
import styled from 'styled-components';
const Welcome = () => {
  return (
    <WelcomeStyle className='landing-page'>
      <div className='wrapper'>
        <div className='header'>
          <div className='content'>
            <h1>
              Welcome to Cubicle <br />
              <span className='heading-secondary'>A step toward future</span>
            </h1>
            <div className='buttons'>
              <Link className='button register' to='/register'>
                Register
              </Link>
              <Link className='button login' to='/login'>
                Login
              </Link>
            </div>
          </div>
          <img
            className='logo'
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/626071/line-logo.svg'
            alt='svg'
          />
          <img
            className='curve'
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/626071/bottom-curve_copy.svg'
            alt='svg'
          />
          <img
            className='waves'
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/626071/waves_copy.svg'
            alt='svg'
          />
        </div>
      </div>
      <div className='background'></div>
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
    width: 50px;
    height: auto;
    position: absolute;
    top: 50px;
    left: 100px;
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
