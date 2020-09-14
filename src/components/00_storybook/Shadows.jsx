import React from "react";
import styled from "styled-components";
import { defaultTheme as theme } from "@app-utils/themes";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShadowContainer = styled.div`
  margin: ${props => props.theme.spacing.large}px;
  color: ${props => props.theme.color.blue[100]};
`;

const ShadowComponent = styled.div`
  width: ${props => props.theme.spacing["4xl"]}px;
  height: ${props => props.theme.spacing["4xl"]}px;
  background-color: ${props => props.theme.color.monochrome[900]};
  border-radius: 4px;
  /* border: 1px solid; */
  box-shadow: ${props => props.shadowValue};
`;

const Shadows = () => {
  return (
    <Wrapper>
      {Object.keys(theme.shadow).map(key => {
        const value = theme.shadow[key];

        return (
          <ShadowContainer key={key}>
            <ShadowComponent shadowValue={value} />
            <p>{`${key}`}</p>
          </ShadowContainer>
        );
      })}
    </Wrapper>
  );
};

export default Shadows;
