import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: ${props => props.theme.typography.weight.bold};
  color: ${props => props.theme.color.blue[100]};
`;

export default () => <Wrapper>Luena</Wrapper>;
