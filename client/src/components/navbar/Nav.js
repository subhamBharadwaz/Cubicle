// import React, { useState } from 'react';
// // Router

// import { Link } from 'react-router-dom';
// // React icons
// import { IconContext } from 'react-icons';
// import * as BiIcons from 'react-icons/bi';
// import * as AiIcons from 'react-icons/ai';
// import * as RiIcons from 'react-icons/ri';
// import * as IoIcons from 'react-icons/io5';
// import * as FaIcons from 'react-icons/fa';
// // Actions
// import { logout } from '../../actions/authActions';
// import { useDispatch, useSelector } from 'react-redux';
// // Styles and Animations
// import styled from 'styled-components';
// import { motion } from 'framer-motion';

// const Nav = () => {
//   const { isAuthenticated, loading } = useSelector((state) => state.auth);

//   const dispatch = useDispatch();
//   const logoutHandler = () => {
//     dispatch(logout());
//   };

//   const authLinks = (
//     <>
//       <li className='nav-text'>
//         <Link to='/home'>
//           <AiIcons.AiFillHome />
//           <span className='nav-span'> Home</span>
//         </Link>
//       </li>
//       <li className='nav-text'>
//         <Link to='/todo'>
//           <RiIcons.RiCalendarTodoLine />
//           <span className='nav-span'> Todo List</span>
//         </Link>
//       </li>
//       <li className='nav-text'>
//         <Link to='/expense'>
//           <FaIcons.FaMoneyCheckAlt />
//           <span className='nav-span'>Expense Tracker</span>
//         </Link>
//       </li>
//       <li className='nav-text'>
//         <Link to='/fitness'>
//           <IoIcons.IoFitnessOutline />
//           <span className='nav-span'>Fitness Zone</span>
//         </Link>
//       </li>

//       <li className='nav-text'>
//         <Link onClick={logoutHandler} to='/'>
//           <AiIcons.AiOutlineLogout />
//           <span className='nav-span'>Logout</span>
//         </Link>
//       </li>
//     </>
//   );

//   const guestLinks = (
//     <>
//       <li className='nav-text'>
//         <Link to='/register'>
//           <AiIcons.AiOutlineLogin />
//           <span className='nav-span'>Register</span>
//         </Link>
//       </li>
//       <li className='nav-text'>
//         <Link to='/login'>
//           <AiIcons.AiOutlineLogin />
//           <span className='nav-span'>Login</span>
//         </Link>
//       </li>
//     </>
//   );
//   const [sidebar, setSidebar] = useState(false);

//   // functions
//   const showSidebar = () => {
//     setSidebar(!sidebar);
//   };
//   // const logoSrc = "/client/src/img/LOGOwhite.svg";
//   return (
//     <>
//       <IconContext.Provider value={{ color: '#fff' }}>
//         <Navbar>
//           <Link to='#' className='menu-bars main'>
//             <BiIcons.BiMenuAltLeft onClick={showSidebar} />
//           </Link>
//           <div className='logo'>
//           <svg
//             className="logo"
//             version="1.1"
//             id="Layer_1"
//             xmlns="http://www.w3.org/2000/svg"
//             xmlnsXlink="http://www.w3.org/1999/xlink"
//             x="0px"
//             y="0px"
//             viewBox="0 0 2834.65 2834.65"
//             style={{ enableBackground: "new 0 0 2834.65 2834.65" }}
//             xmlSpace="preserve"
//           >
//             {/* <style type='text/css'> .st0{{ fill: '#FFFFFF' }} </style>
//             */} <path
//               className="st0"
//               d="M1704,1500.21c-39.73,74.61-93.5,132.62-161.31,174.03c-67.81,41.41-144.82,62.85-230.99,64.34
// 	c-122.16,1.5-226.89-42.16-314.19-131s-130.95-194.83-130.95-318.01c0-126.89,43.83-232.51,131.53-316.87
// 	c85.42-83.6,189.96-125.04,313.62-124.29c86.17,0.75,164.49,22.75,234.93,66c67.44,42.51,119.9,99.56,157.37,171.15h-97.84
// 	c-71.99-103.77-172.47-154.91-301.44-153.42c-95.98,0-178.65,34.49-248,103.47c-69.36,68.97-105.17,151.93-107.41,248.87
// 	c-2.26,100.67,32.43,187.73,104.04,261.17c71.6,73.45,157.64,110.17,258.12,110.17c58.49,0,115.48-15.19,170.97-45.58
// 	c53.23-28.9,94.84-65.57,124.83-110.04H1704z"
//             />
//             <path
//               className="st0"
//               d="M2047.78,1490.27c-3.89-106.39-52.05-181.32-144.48-224.82c68.31-44.27,102.48-106.4,102.48-186.4
// 	c0-67.56-27.64-123.46-82.89-167.75c-52.16-41.93-114.01-62.9-185.61-62.9h-195.64c7.44,4.08,14.8,8.35,22.08,12.82l0.52,0.33
// 	c32.62,20.56,62.34,44.22,89.03,70.85h81.89c49.98,0,91.78,12.8,125.37,38.39c37.5,27.16,56.25,64.76,56.25,112.86
// 	c0,43.44-17.78,78.92-53.33,106.45c-31.54,24.43-67.55,38.03-108.02,40.78c-5.12,0.35-10.32,0.52-15.59,0.52h-164.06v-95.06h-5.17
// 	l-15.67-22.59c-21.44-30.91-45.43-56.49-72.16-76.83v522.09c29.76-21.23,54.2-45.91,72.94-73.69l15.61-23.14h4.45V1313.4h159.02
// 	c8.71,0,17.18,0.24,25.41,0.74c52.17,3.09,94.77,16,127.76,38.73c42.09,29.42,64.69,72.39,67.81,128.89
// 	c3.11,53.4-14.83,96.37-53.8,128.87c-38.96,32.52-93.14,48.77-162.51,48.77h-79.44c-29.92,31.29-63.48,58.34-100.51,80.96
// 	c-2.8,1.71-5.62,3.39-8.45,5.04h217.71c75.49,0,141.44-24.66,197.86-73.97C2023.06,1622.12,2050.11,1561.73,2047.78,1490.27z"
//             />
//           </svg>
//           </div>
//         </Navbar>
//         <NavMenu className={sidebar ? 'nav-menu active' : 'nav-menu'}>
//           <ul onClick={showSidebar} className='nav-menu-items'>
//             <li className='navbar-toggle'>
//               <Link to='#' className='menu-bars'>
//                 <AiIcons.AiOutlineClose />
//               </Link>
//             </li>
//             {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
//           </ul>
//         </NavMenu>
//       </IconContext.Provider>
//     </>
//   );
// };

// const Navbar = styled(motion.div)`
//   background-color: #121212;
//   color: #fff;
//   min-height: 8vh;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   .menu-bars.main {
//     margin-left: 2rem;
//     font-size: 2rem;
//     background: none;
//   }
//   .logo {
//     margin-right: 45%;
//     height: 7rem;
//   }
//   .st0{
//     fill: #fff;
//   }
// `;

// const NavMenu = styled(motion.nav)`
//   .menu-bars {
//     margin-left: 20px;
//   }
//   z-index: 100;
// `;

// export default Nav;

import {motion} from "framer-motion";
import React, {useState} from "react";
// React icons
import {IconContext} from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";
import {useDispatch, useSelector} from "react-redux";
// Router

import {Link} from "react-router-dom";
// Styles and Animations
import styled from "styled-components";

// Actions
import {logout} from "../../actions/authActions";

const Nav = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  const authLinks = (
    <>
      <li className="nav-text">
        <Link to="/home">
          <AiIcons.AiFillHome />
          <span className="nav-span"> Home</span>
        </Link>
      </li>
      <li className="nav-text">
        <Link to="/todo">
          <RiIcons.RiCalendarTodoLine />
          <span className="nav-span"> Todo List</span>
        </Link>
      </li>
      <li className="nav-text">
        <Link to="/expense">
          <FaIcons.FaMoneyCheckAlt />
          <span className="nav-span">Expense Tracker</span>
        </Link>
      </li>
      <li className="nav-text">
        <Link to="/fitness">
          <IoIcons.IoFitnessOutline />
          <span className="nav-span">Fitness Zone</span>
        </Link>
      </li>

      <li className="nav-text">
        <Link onClick={logoutHandler} to="/">
          <AiIcons.AiOutlineLogout />
          <span className="nav-span">Logout</span>
        </Link>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li className="nav-text">
        <Link to="/register">
          <AiIcons.AiOutlineLogin />
          <span className="nav-span">Register</span>
        </Link>
      </li>
      <li className="nav-text">
        <Link to="/login">
          <AiIcons.AiOutlineLogin />
          <span className="nav-span">Login</span>
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
      <IconContext.Provider value={{ color: "#fff" }}>
        <Navbar>
          <Link to="#" className="menu-bars main">
            <BiIcons.BiMenuAltLeft onClick={showSidebar} />
          </Link>

          <svg
            className="logo"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 2834.65 2834.65"
            style={{ enableBackground: "new 0 0 2834.65 2834.65" }}
            xmlSpace="preserve"
          >
            {/* <style type='text/css'> .st0{{ fill: '#FFFFFF' }} </style> */}
            <path
              className="st0"
              d="M1704,1500.21c-39.73,74.61-93.5,132.62-161.31,174.03c-67.81,41.41-144.82,62.85-230.99,64.34
	c-122.16,1.5-226.89-42.16-314.19-131s-130.95-194.83-130.95-318.01c0-126.89,43.83-232.51,131.53-316.87
	c85.42-83.6,189.96-125.04,313.62-124.29c86.17,0.75,164.49,22.75,234.93,66c67.44,42.51,119.9,99.56,157.37,171.15h-97.84
	c-71.99-103.77-172.47-154.91-301.44-153.42c-95.98,0-178.65,34.49-248,103.47c-69.36,68.97-105.17,151.93-107.41,248.87
	c-2.26,100.67,32.43,187.73,104.04,261.17c71.6,73.45,157.64,110.17,258.12,110.17c58.49,0,115.48-15.19,170.97-45.58
	c53.23-28.9,94.84-65.57,124.83-110.04H1704z"
            />
            <path
              className="st0"
              d="M2047.78,1490.27c-3.89-106.39-52.05-181.32-144.48-224.82c68.31-44.27,102.48-106.4,102.48-186.4
	c0-67.56-27.64-123.46-82.89-167.75c-52.16-41.93-114.01-62.9-185.61-62.9h-195.64c7.44,4.08,14.8,8.35,22.08,12.82l0.52,0.33
	c32.62,20.56,62.34,44.22,89.03,70.85h81.89c49.98,0,91.78,12.8,125.37,38.39c37.5,27.16,56.25,64.76,56.25,112.86
	c0,43.44-17.78,78.92-53.33,106.45c-31.54,24.43-67.55,38.03-108.02,40.78c-5.12,0.35-10.32,0.52-15.59,0.52h-164.06v-95.06h-5.17
	l-15.67-22.59c-21.44-30.91-45.43-56.49-72.16-76.83v522.09c29.76-21.23,54.2-45.91,72.94-73.69l15.61-23.14h4.45V1313.4h159.02
	c8.71,0,17.18,0.24,25.41,0.74c52.17,3.09,94.77,16,127.76,38.73c42.09,29.42,64.69,72.39,67.81,128.89
	c3.11,53.4-14.83,96.37-53.8,128.87c-38.96,32.52-93.14,48.77-162.51,48.77h-79.44c-29.92,31.29-63.48,58.34-100.51,80.96
	c-2.8,1.71-5.62,3.39-8.45,5.04h217.71c75.49,0,141.44-24.66,197.86-73.97C2023.06,1622.12,2050.11,1561.73,2047.78,1490.27z"
            />
          </svg>
        </Navbar>
        <NavMenu className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul onClick={showSidebar} className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
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
  max-height: 8vh;
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
    height: 7rem;

    .st0 {
      fill: #ffff;
    }
  }
`;

const NavMenu = styled(motion.nav)`
  .menu-bars {
    margin-left: 20px;
  }
  z-index: 100;
`;

export default Nav;