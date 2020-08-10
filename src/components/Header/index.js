import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  width: 100%;
  height: 200px;
`;

const Logo = styled.div`
  font-size: 28px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: "Fredoka One";
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo>Luena</Logo>
    </Wrapper>
  );
};

export default Header;
