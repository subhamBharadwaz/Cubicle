import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { workout } from "./content";

export const Workout = () => {
  return (
    <Cards>
      {workout.map((info) => (
        <>
          <Container>
            <img key={info.img} src={info.img} alt="" />
            <h3>{info.title}</h3>
            <p>{info.content}</p>
            <Link to={info.path}>
              <Button>LETS START</Button>
            </Link>
          </Container>
        </>
      ))}
    </Cards>
  );
};
const Cards = styled.div`
  padding: 10px 16px;
  background-image: url(https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1080);
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  width: 50rem;
  height: 40rem;
  border: none;
  font-size: 1.5rem;
  padding: 0.8rem;
  margin: 0 2rem;
  font-family: "Poppins", sans-serif;
  flex-wrap: wrap;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
  }
  img {
    width: 100%;
    border-radius: 5px;
    height: 60%;
    object-fit: cover;
  }
  h3 {
    padding: 0.5rem;
    text-align: center;
    color: #fff;
    margin-bottom: 0.5rem;
  }
  p {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    color: #c0c0c0;
  }
`;

const Button = styled.button`
  margin: auto;
  margin-top: 20px;
  display: block;
  text-decoration: none;
  max-width: 35%;
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
`;
export default Workout;
