import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  /* Default button */
  user-select: none;
  text-decoration: none;
  border: 0;
  outline: none;
  padding: ${props => props.theme.spacing.xs}px
    ${props => props.theme.spacing.sm}px;
  font-size: ${props => props.theme.typography.size.base}px;
  font-weight: ${props => props.theme.typography.weight.bold};
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
    background-color: ${props.theme.color.blue[200]};
    color: ${props.theme.color.monochrome[800]};
  `}

  /* Secondary Button */
  ${props =>
    props.secondary &&
    `
    background-color: ${props.theme.color.red[200]};
    color: ${props.theme.color.monochrome[800]};
  `}
`;

const Button = ({ children, ...config }) => (
  <StyledButton {...config}>{children}</StyledButton>
);

Button.defaultProps = {};

Button.propTypes = {};

export default Button;
