import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Navigation = styled.nav`
  width: 100%;
  left: 0px;
  background-color: white;

  ul {
    list-style: none;
    margin: 0;
    margin-top: 20px;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  ul > li {
    font-size: 1.45rem;
    padding: 1%;
  }

  ul a {
    text-decoration: none;
    text-transform: uppercase;
  }

  a:visited,
  a:active {
  }
`;

const Nav = () => {
  return (
    <Navigation>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>&#8226;</li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        {/* <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/calendly">Calendly</Link>
        </li> */}
      </ul>
    </Navigation>
  );
};

export default Nav;
