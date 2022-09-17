import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useNavigate } from "react-router-dom";
import {UserAuth} from '../context/authcontext'
import ProtectedRoute from "../ProtectedRouet";
const Navbar = () => {
  const {logout,user} = UserAuth();
  const navigate = useNavigate();
  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4.8rem;
      li {
        list-style: none;
        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }
          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }

          
          }
        }
      }
    }
    .mobile-navbar-btn {
      display: none;
      .close-outline {
        display: none;
      }
    }
    .mobile-navbar-btn[name="close-outline"] {
      display: none;

      .close-outline {
        display: none;
      }
      .mobile-navbar-btn[name="close-outline"] {
        display: none;
      }
      @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .mobile-navbar-btn {
          display: inline-block;
          z-index: 999;
          border: ${({ theme }) => theme.colors.black};
          .mobile-nav-icon {
            font-size: 4.2rem;
            color: ${({ theme }) => theme.colors.black};
          }
        }
        /* hide the original nav menu  */
        .navbar-list {
          width: 100vw;
          height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          background-color: #fff;
          display: flex;
          justify-content: center;
          align-content: center;
          flex-direction: column;
          text-align: center;
          transform: translateX(100%);
          visibility: hidden;
          opacity: 0;
          li {
            .navbar-link {
              &:link,
              &:visited {
                font-size: 4.2rem;
              }
              &:hover,
              &:active {
                color: ${({ theme }) => theme.colors.helper};
              }
            }
          }
        }
      }
      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 3%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }
      .active .close-outline {
        display: inline-block;
      }
      .active .navbar-list {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
      }
    }
  `;

  const handleclicked = async () => {
    try {
      await logout();
      navigate('/signin')
      alert('you  want to logout ?')
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
   
    <Nav>
      <div className="menuIcon">
        <ul className="navbar-list " style={{ alignItems: "center" }}>
          {/* <li className="navbar-link">
            <h3>{user.email}</h3>
          </li> */}
           
          <li>
            <NavLink className="navbar-link" to="/"></NavLink>
          </li>
         
          <ProtectedRoute>
          <li>
            <NavLink className="navbar-link" to="/home">
              Home
            </NavLink>
          </li>
          </ProtectedRoute>
          <li>
            <NavLink className="navbar-link" to="/about">
              About
            </NavLink>
          </li>

          <li>
            <NavLink className="navbar-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/news">
              News
            </NavLink>
          </li>
          <li>
            <Button
              style={{
                borderRadius: "50px",
                fontSize: "1.5rem",
                backgroundColor: "#6254f3",
                border: "none",
                padding: "8px 12px",
                color: "#fff",
              }}
              onClick={handleclicked}
            >
              Logout
            </Button>
          </li>
        </ul>
      </div>
    </Nav>
   
  );
};

export default Navbar;
