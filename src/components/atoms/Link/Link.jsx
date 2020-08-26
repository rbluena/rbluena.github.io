import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

const StyledLink = styled(GatsbyLink)`
  color: ${props => props.theme.color.red[200]};
  display: inline-block;
  padding: ${props => props.theme.spacing.sm}px;
  text-decoration: none;
`;

const Link = ({ children, data, className, ...rest }) => {
  if (data.as && data.as.length) {
    return (
      <StyledLink href={data.url} {...rest} as={data.as} className={className}>
        {children}
      </StyledLink>
    );
  }

  return <StyledLink to={data.url}>{children}</StyledLink>;
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.shape({
    url: PropTypes.string.isRequired,
    as: PropTypes.string,
  }),
};

export default Link;
