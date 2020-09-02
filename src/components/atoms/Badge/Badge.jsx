import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.span`
  display: inline-block;
  background-color: ${props => props.theme.color.monochrome[400]};
  color: ${props => props.theme.color.monochrome[900]};
  line-height: 1;
  vertical-align: baseline;
  text-align: center;
  font-size: 80%;
  border-radius: ${props => props.theme.border.radius.medium};
  padding: ${props => `${props.theme.spacing.xs}px`};

  ${props =>
    props.size === "sm" &&
    `
      padding: ${props.theme.spacing.xxs}px;
      font-size: 75%;
    `};

  ${props =>
    props.size === "large" &&
    `
      padding: ${props.theme.spacing.xm}px;
      font-size: 100%;
    `};

  ${props =>
    props.primary &&
    `
    background-color: ${props.theme.color.blue[100]};
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
