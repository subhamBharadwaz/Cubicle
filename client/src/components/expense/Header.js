import React from "react";
import { useSelector } from "react-redux";
// Style
import styled from "styled-components";

export const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <HeaderStyle>
      {isAuthenticated && (
        <>
          <h3>Hello {Capitalize(user.data.name)},</h3>
          <h3>Here's your spending <span>wallet!!</span></h3>
        </>
      )}
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  margin-top: 5vh;
  color: #fff;
  font-size: 1.5rem;
  h3 {
    letter-spacing: 1px;
    margin: 0;
    span{
      color: #ffc917;
    }
  }
`;
