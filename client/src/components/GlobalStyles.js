import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
   &::-webkit-scrollbar{
        width:0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgrey;
    }
    &::-webkit-scrollbar-track{
        background-color: #fff;
    }
}

body{
  font-family: 'Open Sans', sans-serif;
  font-weight:300;
  overflow-x:hidden;
  position: relative;
}

h1{
   font-family: 'Montserrat', sans-serif;
   font-weight: 400; 
}

ul{

  list-style:none;
}
a{
  text-decoration:none;
}

${"" /* Navbar */}
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
  ${"" /* ///////////////////// */}
       ${"" /* Navbar End */}
${"" /* ///////////////////// */}


${"" /* Alert */}
.alert{
  padding:0.8rem;
  margin:1rem 0;
  opacity:0.9;
  background:#f4f4f4;
  color:#333;
}
.alert-primary{
  background:#17a2b8;
  color:#fff;
}
.alert-light{
  background:#f4f4f4;
  color:#333;
}
.alert-dark{
  background:#343a40;
  color:#fff;

}
.alert-danger{
  background:#dc3545;
  color:#fff;
}
.alert-success{
  background:#28a745;
  color:#fff;
}



${"" /* Expense Style */}


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

.loading{
  margin: auto;
  width: 30%;
}

/* select */
.select
{
    position: relative;
    height: 16px;
    padding: 15px 14px;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
}



`;

export default GlobalStyle;
