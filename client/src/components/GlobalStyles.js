import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'Open Sans', sans-serif;
  font-weight:300;
}

h1{
   font-family: 'Montserrat', sans-serif;
   font-weight: 400; 
}
h2{
  color: #ffffff;
 
}
h3{
  color: #f7f7f7;
  
}
ul{

  list-style:none;
}

${'' /* Navbar */}
  .nav-menu {
    background-color: #272727;
    width: 250px;
    height : 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;  
    transition: 850ms

   
  }
  .nav-menu.active{
    left: 0;
    transition: 250ms;
  }
  .nav-text{
    justify-content: start;
    align-items: center;
    padding: 10px 0px 9px 16px;
    list-style: none;
    height: 60px;

    a{
     text-decoration: none;
     color: #f5f5f5;
     font-size: 20px;
     width: 95%;
     height: 100%;
     display: flex;
     align-items: center;
     padding: 0 16px;
     border-radius:4px;
     margin-top: 20px;

     &:hover{
       background-color: #1a83ff;
     }
    }
  }
  .nav-menu-items{
    width: 100%;
  }
  .navbar-toggle{
    background-color: #121212;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .nav-span{
    margin-left: 16px;
  }
  .menu-bars{
    font-size: 40px;
  }
  ${'' /* ///////////////////// */}
       ${'' /* Navbar End */}
${'' /* ///////////////////// */}


${'' /* Expense Style */}


:root {
  --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.inc-exp-container {
  background-color: #fff;
  box-shadow: var(--box-shadow);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.inc-exp-container > div {
  flex: 1;
  text-align: center;
}

.inc-exp-container > div:first-of-type {
  border-right: 1px solid #dedede;
}

.money {
  font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;
}

.money.plus {
  color: #2ecc71;
}

.money.minus {
  color: #c0392b;
}
.plus {
  color: #2ecc71;
}

.minus {
  color: #c0392b;
}




.list {

  padding: 0;
  margin-bottom: 40px;
}


 
.list li.plus {
  border-right: 5px solid #2ecc71;
}

.list li.minus {
  border-right: 5px solid #c0392b;
}




.list li:hover .delete-btn {
  opacity: 1;
}

`;

export default GlobalStyle;
