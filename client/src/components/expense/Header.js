import React from 'react';
import { useSelector } from 'react-redux';
// Style
import styled from 'styled-components';

export const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return (
    <HeaderStyle>
      {isAuthenticated && (
        <>
          <h2>Hello {user.data.name},</h2>
          <h3>Here's your spending dashboard!</h3>
        </>
      )}
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  margin-top: 5vh;

  font-size: 1.3rem;
  h2 {
    letter-spacing: 1px;
    margin: 0;
    color: #000;
  }
`;
