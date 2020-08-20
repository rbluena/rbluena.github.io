import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  /* Default button */
  user-select: none;
  text-decoration: none;
  border: 0;
  outline: none;
  border-radius: 4px;
  padding: ${props => props.theme.spacing.xs}px
    ${props => props.theme.spacing.sm}px;
  font-size: ${props => props.theme.typography.size.base}px;
  background-color: ${props => props.theme.color.monochrome[800]};
  color: ${props => props.theme.color.monochrome[300]};
  box-shadow: ${props => props.theme.elevation.default};

  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: ${props => props.theme.elevation.elevated};
  }

  /* Primary Button */
  ${props =>
    props.primary &&
    `
    background-color: ${props.theme.color.blue[200]};
    color: ${props.theme.color.monochrome[800]};
  `}

  /* Primary Outline */
  ${props =>
    props.primary &&
    props.outline &&
    `
    background: transparent;
    color: ${props.theme.color.monochrome[100]};
    border: 2px solid ${props.theme.color.blue[200]}
  `}

  /* Secondary Button */
  ${props =>
    props.secondary &&
    `
    background-color: ${props.theme.color.red[200]};
    color: ${props.theme.color.monochrome[800]};
  `}

  /* Secondary Outline */
  ${props =>
    props.secondary &&
    props.outline &&
    `
    background: transparent;
    color: ${props.theme.color.monochrome[100]};
    border: 2px solid ${props.theme.color.red[200]}
  `}
`;

export const ButtonLink = styled.a`
  padding: ${props => props.theme.spacing.xs}px
    ${props => props.theme.spacing.sm}px;
  color: ${props => props.theme.color.red[200]};
  text-decoration: none;
  opacity: 80%;

  &:hover {
    cursor: pointer;
    outline: none;
    opacity: 100%;
  }
`;

const Button = ({ children, type, ...rest }) => {
  if (type === "link") {
    return <ButtonLink>{children}</ButtonLink>;
  }

  return <StyledButton {...rest}>{children}</StyledButton>;
};

Button.defaultProps = {
  primary: undefined,
  secondary: undefined,
  type: undefined,
};

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  outline: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
