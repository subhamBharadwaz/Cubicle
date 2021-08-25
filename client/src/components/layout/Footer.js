import React from "react";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";

export const Footer = () => {
  return (
    <MainFooter>
      <p>
        copyright &copy;2021 Cubicle. designed by <span>SwissEncoders</span>
      </p>

      <AiIcons.AiFillInstagram />
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
  padding: 2em 5em;
  flex-wrap: wrap;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  right: 0;
  @media (max-width: 48rem) {
    p {
      margin-bottom: 2rem;
    }
  }
`;

export default Footer;
