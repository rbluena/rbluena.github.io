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
    css`
      background-color: ${props.theme.color.blue[100]};
      color: ${props.theme.color.monochrome[800]};
    `}

  /* Primary Outline */
  ${props =>
    props.primary &&
    props.outline &&
    css`
      background: transparent;
      color: ${props.theme.color.monochrome[100]};
      border: 2px solid ${props.theme.color.blue[100]};
    `}

  /* Secondary Button */
  ${props =>
    props.secondary &&
    css`
      background-color: ${props.theme.color.red[100]};
      color: ${props.theme.color.monochrome[800]};
    `}

  /* Secondary Outline */
  ${props =>
    props.secondary &&
    props.outline &&
    css`
      background: transparent;
      color: ${props.theme.color.monochrome[100]};
      border: 2px solid ${props.theme.color.red[200]};
    `}

    /* Dark */
  ${props =>
    props.dark &&
    `
    background: ${props.theme.color.monochrome[200]};
    color: white;
    font-weight: bold;
  `}

  /* Small Button */
  ${props =>
    props.size === "sm" &&
    css`
      padding-top: ${props.theme.spacing.xxs}px 0;
      font-size: ${props.theme.typography.size.sm}px;
    `}

    /* Large button */
    ${props =>
      props.size === "large" &&
      `
      padding: ${props.theme.spacing.sm}px;
      min-width: 100px;
      font-size: ${props.theme.typography.size.large}px;
    `}

    /* Wide button */
    ${props =>
      props.size === "wide" &&
      `
      padding: ${props.theme.spacing.sm}px;
      width: 100%;
    `}
`;

const Button = ({ children, link, size, ...rest }) => {
  if (link) {
    return (
      <StyledButton size={size} as="a" {...rest}>
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton size={size} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  /** Specifying either button is a link button */
  link: PropTypes.bool,

  /** Props is passed if primary button is created. */
  primary: PropTypes.bool,

  /** Props is passed if secondary button is created. */
  secondary: PropTypes.bool,

  /** Props is passed if outline button is created. */
  outline: PropTypes.bool,

  /** Content in between the button component, mostly is text of the button */
  children: PropTypes.node.isRequired,

  /** Size of the button. */
  size: PropTypes.oneOf(["sm", "large", "wide"]),
};

Button.defaultProps = {
  primary: false,
  secondary: false,
  outline: false,
  link: false,
  size: null,
};

export default Button;
