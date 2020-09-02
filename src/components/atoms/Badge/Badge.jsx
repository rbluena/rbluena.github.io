import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Text } from "@app-components";

const Wrapper = styled.span`
  display: inline-block;
  background-color: ${props => props.theme.color.monochrome[400]};
  color: ${props => props.theme.color.monochrome[900]};
  padding: ${props =>
    `${props.theme.spacing.xs}px ${props.theme.spacing.xs}px`};
  border-radius: ${props => props.theme.border.radius.medium};

  ${props =>
    props.size === "sm" &&
    `
      padding: ${props.theme.spacing.xxs}px;
      font-size: ${props.theme.typography.xs}px;
    `};

  ${props =>
    props.primary &&
    `
    background-color: ${props.theme.color.blue[200]};
    color: ${props.theme.color.monochrome[800]};
  `}

  ${props =>
    props.secondary &&
    `
    background-color: ${props.theme.color.monochrome[200]};
    color: ${props.theme.color.monochrome[900]};
  `}
`;

const Badge = ({ label, size, primary, secondary }) => {
  return (
    <Wrapper size={size} primary={primary} secondary={secondary}>
      {label}
    </Wrapper>
  );
};

Badge.defaultProps = {
  size: "medium",
  primary: false,
  secondary: false,
};

Badge.propTypes = {
  /** Text label of the badge. */
  label: PropTypes.string.isRequired,

  /** Size of the badge, can either be small, medium or large. But medium is default one.  */
  size: PropTypes.oneOf(["sm", "medium"]),

  /** Used to set appearance of the badge to primary */
  primary: PropTypes.bool,

  /** Used to set appearance of the badge to secondary */
  secondary: PropTypes.bool,
};

export default Badge;
