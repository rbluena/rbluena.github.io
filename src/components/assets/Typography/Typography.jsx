import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: ${props => props.theme.typography.size.h1};
`;

const H2 = styled.h2`
  font-size: ${props => props.theme.typography.size.h2};
`;

const H3 = styled.h3`
  font-size: ${props => props.theme.typography.size.h3};
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
`;

const Base = styled.p`
  font-size: ${props => props.theme.typography.size.base};
`;

const Small = styled.p`
  font-size: ${props => props.theme.typography.size.sm};
`;

const ExtraSmall = styled.p`
  font-size: ${props => props.theme.typography.size.xs};
`;

const Text = ({ children, size }) => {
  if (size === "title") {
    return <H1>{children}</H1>;
  }

  if (size === "heading") {
    return <H2>{children}</H2>;
  }

  if (size === "subheading") {
    return <H3>{children}</H3>;
  }

  if (size === "large") {
    return <Large>{children}</Large>;
  }

  if (size === "sm") {
    return <Small>{children}</Small>;
  }
  if (size === "xs") {
    return <ExtraSmall>{children}</ExtraSmall>;
  }

  return <Base>{children}</Base>;
};

Text.defaultProps = {
  size: undefined,
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
};

export default Text;
