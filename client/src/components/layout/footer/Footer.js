import React from "react";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";

import { IconContext } from "react-icons";

export const Footer = () => {
  return (
    <MainFooter>
      <p>
        Copyright &copy;2021 Cubicle. Designed by <span>SwissEncoders</span>
      </p>

      <Icons>
        <IconContext.Provider value={{ color: "#fff", size: 30 }}>
          <a href="https://www.instagram.com/swiss_encoders/?hl=en">
            <AiIcons.AiOutlineInstagram />
          </a>
          <SiIcons.SiGmail />
          <a href="https://github.com/subhamBharadwaz/Cubicle">
            <AiIcons.AiFillGithub />
          </a>
        </IconContext.Provider>
      </Icons>
    </MainFooter>
  );
};
const MainFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: black;
  min-height: 10vh;
  padding-top: 1.5rem;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  right: 0;
  flex-wrap: wrap;
  flex-direction: column;
  span {
    font-family: "Open Sans", sans-serif;
    opacity: 0.5;
    font-weight: 300;
  }
  @media (max-width: 48rem) {
    p {
      margin-bottom: 1rem;
    }
  }
`;

const Icons = styled.div`
  padding-bottom: 0.5rem;
  display: flex;
  a {
    margin-right: 20px;
    margin-left: 20px;
  }
`;

export default Footer;