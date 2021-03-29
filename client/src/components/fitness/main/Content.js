import React from "react";
import styled from "styled-components";

import Card from "../workout/Card";

export const Content = () => {
  return (
    <Main>
      <Fade>
        <Head>
          THE ULTIMATE PERSONAL FITNESS <span>TRAINING</span> PLANS
        </Head>

        <Head2>
          The <span>plans</span> that will help you to stay fit and healthy
        </Head2>
        <Card />
      </Fade>
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80")
    no-repeat center center/cover;
`;
const Fade = styled.div`
  position: relative;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  padding-top: 30px;
`;
const Head = styled.h3`
  max-width: 100%;

  color: white;
  text-align: center;
  font-size: 55px;
  span {
    color: #ff3d3d;
  }
`;
const Head2 = styled.h3`
  margin: auto;
  max-width: 60%;
  font-size: 36px;
  text-align: center;
  margin-top: 15px;
  color: #acacac;
  span {
    color: #ff3d3d;
  }
`;
