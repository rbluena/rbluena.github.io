import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: ${props => props.theme.typography.weight.bold};
  /* font-family: "Fredoka One"; */
  color: ${props => props.theme.color.blue[200]};
`;

export default () => <Wrapper>Luena</Wrapper>;
