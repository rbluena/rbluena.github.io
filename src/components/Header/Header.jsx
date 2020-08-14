import React from "react";
import styled from "styled-components";
import Nav from "@app-components/Nav";
import PersonalDetails from "./PersonalDetails";

const Wrapper = styled.header`
  padding: 15px;
  position: relative;
`;

const Logo = styled.div`
  font-size: 28px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: "Fredoka One";
  color: grey;
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo>Luena</Logo>
      <Nav />
      <PersonalDetails />
    </Wrapper>
  );
};

export default Header;
