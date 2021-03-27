import React from "react";
import { useSelector } from "react-redux";
// Style
import styled from "styled-components";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <HeaderStyle>
      {user && <h1>What's up, {Capitalize(user.data.name)} !</h1>}
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  h1 {
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
  }
`;

export default Header;
