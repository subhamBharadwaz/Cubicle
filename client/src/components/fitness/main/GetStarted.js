import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const GetStarted = () => {
  return (
    <Header>
      <Main>
        <h2>PUSH YOURSELF TO YOUR LIMITS</h2>

        <p>THE BEST PLACE FOR YOUR FITNESS</p>

        <Link to="/second">
          <button>GET STARTED</button>
        </Link>
      </Main>
    </Header>
  );
};

const Header = styled.header`
  height: 100vh;
  width: 100vw;
  background: url("https://images.unsplash.com/photo-1598632640487-6ea4a4e8b963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80")
    no-repeat center center/cover;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.445);
  }
`;
const Main = styled.main`
  height: 70%;
  padding: 10rem 1rem 0rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;

  h2 {
    font-size: 5rem;
    font-weight: bold;
    color: #ffffff;
  }
  p {
    font-size: 3rem;
    letter-spacing: 0.5rem;
    padding: 1rem 0rem;
  }
  button {
    margin: 4rem 0rem 2rem;
    padding: 1.5rem 3rem;
    font-size: 1.5rem;
    background: none;
    color: #fff;
    border: none;
    border: 2px solid #fff;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
      background: #fff;
      color: #000;
    }
  }
  @media (max-width: 48rem) {
    h2 {
      font-size: 10vw;
    }
    p {
      font-size: 6vw;
      letter-spacing: 0.3rem;
    }
    button {
      padding: 1rem 2rem;
    }
  }
`;
