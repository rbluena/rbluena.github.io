import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

const StyledLink = styled.a`
  color: ${props => props.theme.color.red[200]};
  display: inline-block;
  padding: ${props => props.theme.spacing.sm}px;
  text-decoration: none;
  cursor: pointer;
`;

const StyledGatsbyLink = styled(StyledLink)``;

const Link = ({ children, to, external, className, ...rest }) => {
  if (external) {
    return (
      <StyledLink href={to} as="a" className={className} {...rest}>
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledGatsbyLink to={to} className={className} {...rest}>
      {children}
    </StyledGatsbyLink>
  );
};

Link.defaultProps = {
  external: false,
  className: "",
};

Link.propTypes = {
  /** Relative or absolute URL of the link. */
  to: PropTypes.string.isRequired,

  /** Identifies if link takes user to a external page. */
  external: PropTypes.bool,

  /** Label of the link */
  children: PropTypes.node.isRequired,

  /** Used by styled-component to update style of the component. */
  className: PropTypes.string,
};

export default Link;
