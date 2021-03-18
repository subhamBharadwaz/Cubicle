import React from 'react';
import { useSelector } from 'react-redux';
// Style
import styled from 'styled-components';

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <HeaderStyle>{user && <h1>What's up, {user.data.name}!</h1>}</HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
`;

export default Header;
