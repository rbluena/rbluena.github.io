import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: ${props => props.theme.typography.size.h1};
  line-height: ${props => props.theme.typography.size.h1 * 0.8}px;
  letter-spacing: 2px;
  margin: 0;
  font-weight: ${props => props.theme.typography.weight["bold"]};
`;

const H2 = styled.h2`
  font-size: ${props => props.theme.typography.size.h2};
  font-weight: ${props => props.theme.typography.weight.thin};
  line-height: ${props => props.theme.typography.size.h2 * 0.8}px;
  margin: 0;

  ${props =>
    props.weight &&
    `
    font-weight: ${props.theme.typography.weight[props.weight]}
  `}
`;

const H3 = styled.h3`
  font-size: ${props => props.theme.typography.size.h3};
  line-height: ${props => props.theme.typography.size.h3 * 0.8}px;
  margin: 0;

  ${props =>
    props.weight &&
    `
    font-weight: ${props.theme.typography.weight[props.weight]}
  `}
`;

const XL = styled.p`
  font-size: ${props => props.theme.typography.size["xl"]}px;
  line-height: ${props => props.theme.typography.size.xl * 1.5}px;
  margin: 0;

  ${props =>
    props.weight &&
    `
    font-weight: ${props.theme.typography.weight[props.weight]}
  `}
`;

const Large = styled.p`
  font-size: ${props => props.theme.typography.size.large}px;
  line-height: ${props => props.theme.typography.size.large * 1.5}px;
  margin: 0;

  ${props =>
    props.weight &&
    `
    font-weight: ${props.theme.typography.weight[props.weight]}
  `}
`;

const Base = styled.p`
  font-size: ${props => props.theme.typography.size.base}px;
  line-height: ${props => props.theme.typography.size.base * 1.5}px;
  margin: 0;

  ${props =>
    props.weight &&
    `
    font-weight: ${props.theme.typography.weight[props.weight]}
`}
`;

const Small = styled.span`
  font-size: ${props => props.theme.typography.size.sm}px;
  line-height: ${props => props.theme.typography.size.sm * 1.5}px;

  ${props =>
    props.weight &&
    `
    font-weight: ${props.theme.typography.weight[props.weight]}
  `}
`;

const ExtraSmall = styled.span`
  font-size: ${props => props.theme.typography.size.xs}px;
  line-height: ${props => props.theme.typography.size.xs * 1.5}px;
  margin: 0;
  padding: 0;

  ${props =>
    props.weight &&
    `
    font-weigth: ${props.theme.typography.weight[props.weight]}
  `}
`;

const Text = ({ children, size, weight, className }) => {
  if (size === "title") {
    return (
      <H1 weight={weight} className={className}>
        {children}
      </H1>
    );
  }

  if (size === "heading") {
    return (
      <H2 weight={weight} className={className}>
        {children}
      </H2>
    );
  }

  if (size === "subheading") {
    return (
      <H3 weight={weight} className={className}>
        {children}
      </H3>
    );
  }

  if (size === "xl") {
    return (
      <XL weight={weight} className={className}>
        {children}
      </XL>
    );
  }

  if (size === "large") {
    return (
      <Large weight={weight} className={className}>
        {children}
      </Large>
    );
  }

  if (size === "sm") {
    return (
      <Small weight={weight} className={className}>
        {children}
      </Small>
    );
  }

  if (size === "xs") {
    return (
      <ExtraSmall weight={weight} className={className}>
        {children}
      </ExtraSmall>
    );
  }

  return (
    <Base weight={weight} className={className}>
      {children}
    </Base>
  );
};

Text.defaultProps = {
  size: "base",
  wight: "regular",
  className: "",
};

Text.propTypes = {
  /** Content of the text.*/
  children: PropTypes.node.isRequired,

  /** Text comes in different sizes. Base is the default size, but you are free to use any of the options available. */
  size: PropTypes.oneOf([
    "xs",
    "sm",
    "base",
    "large",
    "xl",
    "subheading",
    "heading",
    "title",
  ]),

  /** Font weight, default is medium */
  weight: PropTypes.oneOf(["thin", "regular", "medium", "bold", "xbold"]),

  /** These are classes used by storybook to override the style. */
  className: PropTypes.string,
};

export default Text;
