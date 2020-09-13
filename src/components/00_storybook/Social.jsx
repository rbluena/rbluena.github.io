import React from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import styled from "styled-components";

const Social = styled.ul`
  list-style: none;
  font-size: 150%;
  padding: 0;

  li {
    display: inline-block;
    padding: 7px;
  }
`;

export default () => {
  return (
    <>
      <Social>
        <li>
          <a href="https://linkedin.com/in/rbluena">
            <FiLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/rbluena">
            <FiGithub />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/rbluena">
            <FiTwitter />
          </a>
        </li>
      </Social>
    </>
  );
};
