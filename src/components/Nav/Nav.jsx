import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Navigation = styled.nav``;

const Nav = () => {
  return (
    <Navigation>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </Navigation>
  );
};

export default Nav;
