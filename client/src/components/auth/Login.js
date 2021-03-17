import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { login } from '../../actions/authActions';

//  icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// Style
import styled from 'styled-components';

const Login = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChangeHandler = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <FormStyle>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <FontAwesomeIcon icon={faUser} />
        Sign Into Your Account
      </p>
      <form className='form' onSubmit={(e) => onSubmitHandler(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChangeHandler(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={password}
            onChange={(e) => onChangeHandler(e)}
            required
          />
        </div>

        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
    </FormStyle>
  );
};

const FormStyle = styled.div`
  height: 80%;
  width: 50vw;
  background: #ccc;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: column;
  padding: 3rem;

  .input {
    display: block;
    width: 60%;
    margin: 1rem 0;
    padding: 1rem 2rem;
  }
  button {
    padding: 1rem;
  }
`;

export default Login;
