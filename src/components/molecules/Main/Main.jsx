import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 20em;
`;

const Main = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Main;
