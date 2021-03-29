import React from "react";
import { cards } from "../main/cardData";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Card = () => {
  return (
    <Cards>
      {cards.map((card) => (
        <>
          <Container>
            <img key={card.image} src={card.image} alt="" />
            <h3>{card.title}</h3>
            <p>{card.info}</p>
            <Link to={card.path}>
              <h5>Know More</h5>
            </Link>
          </Container>
        </>
      ))}
    </Cards>
  );
};
const Cards = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  font-family: "Poppins", sans-serif;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  width: 30rem;
  height: 34rem;
  border: none;
  font-size: 1.5rem;
  padding: 0.5rem;
  margin: 0 3rem;

  flex-wrap: wrap;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(24, 24, 24, 0.39);
  }
  img {
    width: 100%;
    border-radius: 5px 5px 0 0;
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
  h5 {
    font-size: 0.8rem;
    color: lightgreen;
    text-align: right;
    margin: 0.5rem;
  }
`;

export default Card;
