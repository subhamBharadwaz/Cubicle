import React from 'react';
// Components
import Login from '../components/auth/Login';

// Style
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <LoginStyle>
      <Login />
    </LoginStyle>
  );
};

const LoginStyle = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; */
`;

export default LoginPage;
