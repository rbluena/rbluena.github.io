import React from "react";
import styled from "styled-components";
import { defaultTheme as theme } from "@app-utils/themes";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpaceContainer = styled.div`
  margin: ${props => props.theme.spacing.large}px;
  color: ${props => props.theme.color.blue[100]};
`;

const SpaceComponent = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${props => props.theme.color.blue[200]};
`;

const Spacing = () => {
  return (
    <Wrapper>
      {Object.keys(theme.spacing)
        .reverse()
        .map(key => {
          let value;

          if (key !== "button") {
            value = theme.spacing[key];
          }

          if (value === undefined) return null;

          return (
            <SpaceContainer key={key}>
              <SpaceComponent size={value} />
              <p>{`${key}: ${value}`}</p>
            </SpaceContainer>
          );
        })}
    </Wrapper>
  );
};

export default Spacing;
