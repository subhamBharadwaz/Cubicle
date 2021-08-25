import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { workout } from "./content";

export const Workout = () => {
  return (
    <Cards>
      {workout.map((info) => (
        <Container key={info.id}>
          <img src={info.img} alt="" />
          <h3>{info.title}</h3>
          <p>{info.content}</p>
          <Link to={info.path}>
            <Button>LETS START</Button>
          </Link>
        </Container>
      ))}
    </Cards>
  );
};
const Cards = styled.div`
  padding: 10px 16px;
  /* background-image: url(https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1080); */
  /* background-image: linear-gradient(black,white); */
  /* background: linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%); */
  /* background-image: linear-gradient(#bdc3c7,#2c3e50); */
  /* background: linear-gradient(90deg, #1CB5E0 0%, #000851 100%); */
  background: linear-gradient(90deg, #efd5ff 0%, #515ada 100%);

  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;
const Container = styled.div`
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8); */
  transition: 0.5s;
  width: 45rem;
  height: 37rem;
  border: none;
  /* font-size: 1.5rem; */
  padding: 1rem;
  margin: 0 2rem;
  font-family: "Poppins", sans-serif;
  flex-wrap: wrap;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  }
  img {
    width: 100%;
    border-radius: 5px;
    height: 55%;
    /* height: 60%; */
    object-fit: cover;
  }
  h3 {
    font-size: 1.3rem;
    padding: 0.5rem;
    text-align: center;
    color: #fff;
    margin-bottom: 0.5rem;
  }
  p {
    font-family: "Poppins", sans-serif;
    font-size: 1.3rem;
    color: #c0c0c0;
  }
  @media (max-width: 48rem) {
    width: 25rem;
    margin: 1rem 2rem 0rem;
    background: rgb(0, 0, 0);
    img {
      height: 50%;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

const Button = styled.button`
  margin: auto;
  margin-top: 20px;
  display: block;
  text-decoration: none;
  width: 35%;
  padding: 12px;
  font-size: 20px;
  border: none;
  background: rgba(0, 0, 0, 1);
  border-radius: 10px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  &:hover {
    background: rgb(255, 255, 255);
    color: black;
    transition-duration: 0.9s;
    box-shadow: 0 0 40px #535353;
  }
  @media (max-width: 48rem) {
    width: 50%;
    padding: 10px;
  }
`;
export default Workout;
