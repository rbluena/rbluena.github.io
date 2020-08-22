import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: ${props => props.theme.typography.size.h1};
  margin: 0;
  padding: 0;

  ${props =>
    props.weight &&
    `
    font-weight: ${props.theme.typography.weight[props.weight]}
  `}
`;

const H2 = styled.h2`
  font-size: ${props => props.theme.typography.size.h2};
  margin: 0;
  padding: 0;

  ${props =>
    props.weight &&
    `
    font-weight: ${props.theme.typography.weight[props.weight]}
  `}
`;

const H3 = styled.h3`
  font-size: ${props => props.theme.typography.size.h3};
  margin: 0;
  padding: 0;

  ${props =>
    props.weight &&
    `
    font-weight: ${props.theme.typography.weight[props.weight]}
  `}
`;

// const H4 = styled.h4`
//   font-size: ${props => props.theme.typography.size.h4};
// `;

// const H5 = styled.h5`
//   font-size: ${props => props.theme.typography.size.h5};
// `;

// const H6 = styled.h6`
//   font-size: ${props => props.theme.typography.size.h6};
// `;

const Large = styled.p`
  font-size: ${props => props.theme.typography.size.large};
  margin: 0;
  padding: 0;

  ${props =>
    props.weight &&
    `
    font-weight: ${props.theme.typography.weight[props.weight]}
  `}
`;

const Base = styled.p`
  font-size: ${props => props.theme.typography.size.base};
  margin: 0;
  padding: 0;
  ${props =>
    props.weight &&
    `
    font-weight: ${props.theme.typography.weight[props.weight]}
`}
`;

const Small = styled.p`
  font-size: ${props => props.theme.typography.size.sm};
  margin: 0;
  padding: 0;

  ${props =>
    props.weight &&
    `
    font-weight: ${props.theme.typography.weight[props.weight]}
  `}
`;

const ExtraSmall = styled.p`
  font-size: ${props => props.theme.typography.size.xs};
  margin: 0;
  padding: 0;

  ${props =>
    props.weight &&
    `
    font-weigth: ${props.theme.typography.weight[props.weight]}
  `}
`;

const Text = ({ children, size, weight }) => {
  if (size === "title") {
    return <H1 weight={weight}>{children}</H1>;
  }

  if (size === "heading") {
    return <H2 weight={weight}>{children}</H2>;
  }

  if (size === "subheading") {
    return <H3 weight={weight}>{children}</H3>;
  }

  if (size === "large") {
    return <Large weight={weight}>{children}</Large>;
  }

  if (size === "sm") {
    return <Small weight={weight}>{children}</Small>;
  }

  if (size === "xs") {
    return <ExtraSmall weight={weight}>{children}</ExtraSmall>;
  }

  return <Base weight={weight}>{children}</Base>;
};

Text.defaultProps = {
  size: "base",
  wight: "regular",
};

Text.propTypes = {
  children: PropTypes.node.isRequired,

  /** Text comes in different sizes. Base is the default size, but you are free to use any of the options. */
  size: PropTypes.oneOf([
    "xs",
    "sm",
    "base",
    "large",
    "xl",
    "xxl",
    "subheading",
    "heading",
    "title",
  ]),
  weight: PropTypes.oneOf(["thin", "regular", "medium", "semibold", "bold"]),
};

export default Text;
