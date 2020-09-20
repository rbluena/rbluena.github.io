import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

const StyledLink = styled.a`
  color: ${props => props.theme.color.blue[100]};
  display: inline-block;
  padding: ${props => props.theme.spacing.sm}px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    font-weight: ${props => props.theme.typography.weight.bold};
  }
`;

const StyledGatsbyLink = styled(GatsbyLink)`
  color: ${props => props.theme.color.blue[100]};
  display: inline-block;
  padding: ${props => props.theme.spacing.sm}px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    font-weight: ${props => props.theme.typography.weight.bold};
  }
`;

const Link = ({ children, to, external, className, ...rest }) => {
  if (external) {
    return (
      <StyledLink
        href={to}
        as="a"
        className={className}
        target="_blank"
        rel="noreferrer noopener"
        {...rest}
      >
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
  /** Relative or absolute URL. */
  to: PropTypes.string.isRequired,

  /** Identifying if link is an external link. */
  external: PropTypes.bool,

  /** Label for the link */
  children: PropTypes.node.isRequired,

  /** Used by styled-component to update style of the component. */
  className: PropTypes.string,
};

export default Link;
