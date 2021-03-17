import React, { useState } from 'react';
// Router

import { Link } from 'react-router-dom';
// React icons
import { IconContext } from 'react-icons';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io5';
import * as FaIcons from 'react-icons/fa';
// Actions
import { logout } from '../../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
// Styles and Animations
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  const authLinks = (
    <>
      <li className='nav-text'>
        <Link to='/'>
          <AiIcons.AiFillHome />
          <span className='nav-span'> Home</span>
        </Link>
      </li>
      <li className='nav-text'>
        <Link to='/todo'>
          <RiIcons.RiCalendarTodoLine />
          <span className='nav-span'> Todo List</span>
        </Link>
      </li>
      <li className='nav-text'>
        <Link to='/expense'>
          <FaIcons.FaMoneyCheckAlt />
          <span className='nav-span'>Expense Tracker</span>
        </Link>
      </li>
      <li className='nav-text'>
        <Link to='/fitness'>
          <IoIcons.IoFitnessOutline />
          <span className='nav-span'>Fitness Zone</span>
        </Link>
      </li>

      <li className='nav-text'>
        <Link onClick={logoutHandler} to='!#'>
          <AiIcons.AiOutlineLogout />
          <span className='nav-span'>Logout</span>
        </Link>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li className='nav-text'>
        <Link to='/register'>
          <AiIcons.AiOutlineLogin />
          <span className='nav-span'>Register</span>
        </Link>
      </li>
      <li className='nav-text'>
        <Link to='/login'>
          <AiIcons.AiOutlineLogin />
          <span className='nav-span'>Login</span>
        </Link>
      </li>
    </>
  );
  const [sidebar, setSidebar] = useState(false);

  // functions
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Navbar>
          <Link to='#' className='menu-bars main'>
            <BiIcons.BiMenuAltLeft onClick={showSidebar} />
          </Link>
          <div className='logo'>
            <h1>Cubicle</h1>
          </div>
        </Navbar>
        <NavMenu className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul onClick={showSidebar} className='nav-menu-items'>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
          </ul>
        </NavMenu>
      </IconContext.Provider>
    </>
  );
};

const Navbar = styled(motion.div)`
  background-color: #121212;
  color: #fff;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu-bars.main {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
  }
  .logo {
    margin-right: 45%;
  }
`;

const NavMenu = styled(motion.nav)`
  .menu-bars {
    margin-left: 20px;
  }
  z-index: 100;
`;

export default Nav;
