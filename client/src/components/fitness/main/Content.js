import React from "react";
import styled from "styled-components";

import Card from "./Card";

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
        <Card className="card" />
      </Fade>
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  /* background: url("https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80")
    no-repeat center center/cover; */
  background-image: linear-gradient(black, white);
  @media (max-width: 48rem) {
    height: 100%;
  }
`;
const Fade = styled.div`
  position: relative;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  /* padding-top: 30px; */
`;
const Head = styled.h3`
  width: 90%;
  margin: auto;
  position: relative;
  color: white;
  text-align: center;
  font-size: 3rem;
  span {
    color: #ff3d3d;
  }
  @media (max-width: 48rem) {
    font-size: 5vw;
  }
`;
const Head2 = styled.h3`
  margin: auto;
  position: relative;
  max-width: 100%;
  font-size: 1.8rem;
  text-align: center;
  margin-top: 25px;
  color: #e9e9e9;
  letter-spacing: 0.3rem;
  span {
    color: #ff3d3d;
  }
  @media (max-width: 48rem) {
    font-size: 3vw;
  }
`;
