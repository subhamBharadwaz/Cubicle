import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alertActions';
import { register } from '../../actions/authActions';

//  icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// Style
import styled from 'styled-components';

const Register = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChangeHandler = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      dispatch(setAlert('Password don not match!', 'danger'));
    } else {
      dispatch(register({ name, email, password }));
    }
  };

  // Redirect to Home
  if (isAuthenticated) {
    return <Redirect to='/home' />;
  }

  return (
    <FormStyle>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <FontAwesomeIcon icon={faUser} />
        Create Your Account
      </p>
      <form className='form' onSubmit={(e) => onSubmitHandler(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChangeHandler(e)}
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
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            minLength='6'
            value={password2}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
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

export default Register;
