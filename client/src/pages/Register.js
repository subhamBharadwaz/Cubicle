import React from 'react';
// Components
import Register from '../components/auth/Register';

// Style
import styled from 'styled-components';

const RegisterPage = () => {
  return (
    <RegisterStyle>
      <Register />
    </RegisterStyle>
  );
};

const RegisterStyle = styled.div``;

export default RegisterPage;
