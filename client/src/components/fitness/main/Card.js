import React from "react";
import { cards } from "./cardData";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Card = () => {
  return (
    <Cards>
      {cards.map((card) => (
        <Container key={card.id}>
          <img src={card.image} alt="" />
          <h3>{card.title}</h3>
          <p>{card.info}</p>
          <Link to={card.path}>
            <h4>Know More</h4>
          </Link>
        </Container>
      ))}
    </Cards>
  );
};
const Cards = styled.div`
  margin-top: 25px;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;
const Container = styled.div`
  font-family: "Poppins", sans-serif;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.616);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  width: 30rem;
  height: 32rem;
  border: none;
  font-size: 1.5rem;
  padding: 1rem;
  margin: 0 3rem;

  flex-wrap: wrap;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(24, 24, 24, 0.39);
  }
  img {
    width: 100%;
    height: 45%;
    border-radius: 5px 5px 0 0;
  }
  h3 {
    padding: 0.5rem;
    font-size: 1.2rem;
    text-align: center;
    color: #fff;
    margin-bottom: 0.5rem;
  }
  p {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    color: #c0c0c0;
  }
  h4 {
    font-size: 1.1rem;
    color: lightgreen;
    text-align: right;
    padding-top: 2rem;
  }
  @media (max-width: 48rem) {
    margin: 0.3rem;
    margin-bottom: 6.5rem;
    padding: 3rem;
    background: rgb(0, 0, 0);

    p {
      font-size: 1.2rem;
    }
    h4 {
      font-size: 1.1rem;
    }
  }
`;

export default Card;
