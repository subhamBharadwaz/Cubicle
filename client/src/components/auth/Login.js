import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { login } from '../../actions/authActions';

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
    return <Redirect to='/home' />;
  }

  return (
    <FormStyle className='container'>
      <form className='login' onSubmit={onSubmitHandler}>
        <h1 className='large text-primary'>Sign In</h1>
        <input
          type='email'
          placeholder='Email Address'
          name='email'
          value={email}
          onChange={(e) => onChangeHandler(e)}
          autocomplete='off'
          required
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          minLength='6'
          value={password}
          onChange={(e) => onChangeHandler(e)}
          required
        />
        <button type='submit' className='btn btn-primary' value='Login'>
          Login
        </button>
        <div className='sign-up'>
          <p className='my-1'>New Here?</p>
          <Link to='/register'>
            <button class='btn-sign-up'>Sign Up</button>
          </Link>
        </div>
      </form>
    </FormStyle>
  );
};

const FormStyle = styled.div`
  .container {
  }

  .login {
    overflow: hidden;
    background-color: white;
    padding: 40px 30px 30px 30px;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    min-height: 50vh;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: -webkit-transform 300ms, box-shadow 300ms;
    -moz-transition: -moz-transform 300ms, box-shadow 300ms;
    transition: transform 300ms, box-shadow 300ms;
    box-shadow: 5px 10px 10px rgba(2, 128, 144, 0.2);
  }
  .login::before,
  .login::after {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    border-top-left-radius: 40%;
    border-top-right-radius: 45%;
    border-bottom-left-radius: 35%;
    border-bottom-right-radius: 40%;
    z-index: -1;
  }
  .login::before {
    left: 40%;
    bottom: -130%;
    background-color: rgba(69, 105, 144, 0.15);
    -webkit-animation: wawes 6s infinite linear;
    -moz-animation: wawes 6s infinite linear;
    animation: wawes 6s infinite linear;
  }
  .login::after {
    left: 35%;
    bottom: -125%;
    background-color: rgba(2, 128, 144, 0.2);
    -webkit-animation: wawes 7s infinite;
    -moz-animation: wawes 7s infinite;
    animation: wawes 7s infinite;
  }
  .login > input {
    font-family: 'Asap', sans-serif;
    display: block;
    border-radius: 5px;
    font-size: 16px;
    background: white;
    width: 100%;
    border: none;
    cursor: pointer;
    padding: 10px 10px;
    margin: 15px -10px;
    outline: none;
    transition: all 0.5s ease-in;
    &:focus {
      border-bottom: 2px solid red;
    }
  }
  button {
    font-family: 'Asap', sans-serif;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    width: 80px;
    border: 0;
    padding: 10px 0;
    margin-top: 10px;
    margin-left: -5px;
    border-radius: 5px;
    background-color: #f45b69;
    -webkit-transition: background-color 300ms;
    -moz-transition: background-color 300ms;
    transition: background-color 300ms;

    cursor: pointer;
  }
  button:hover {
    background-color: #f24353;
  }

  @-webkit-keyframes wawes {
    from {
      -webkit-transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-moz-keyframes wawes {
    from {
      -moz-transform: rotate(0);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }
  @keyframes wawes {
    from {
      -webkit-transform: rotate(0);
      -moz-transform: rotate(0);
      -ms-transform: rotate(0);
      -o-transform: rotate(0);
      transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .sign-up {
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 35%;
    margin-top: 2rem;
    p {
      font-size: 1.2rem;
    }
  }
  .btn-sign-up {
    margin-left: 0.5rem;
  }
`;

export default Login;
