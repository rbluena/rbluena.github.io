import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.section`
  margin: 0 auto;
  padding: ${props => props.theme.spacing["xl"]}px
    ${props => props.theme.spacing.large}px;

  /* For large devices content should not be wider than 1224px */
  @media ${props => props.theme.devices.tablet} {
    max-width: 1224px;
    padding: ${props => props.theme.spacing["xl"] * 2}px
      ${props => props.theme.spacing.large}px;
  }
`;

const Section = ({ children, as, className, ...rest }) => {
  return (
    <Wrapper className={className} forwardedAs={as} {...rest}>
      {children}
    </Wrapper>
  );
};

Section.defaultProps = {
  as: undefined,
  className: "",
};

Section.propTypes = {
  /** Content inside component. */
  children: PropTypes.node.isRequired,

  /** Alias tag can be used to chenge original tag. Can be div, footer or any container. */
  as: PropTypes.string,

  /**  Used by styled-components' to modify classes. */
  className: PropTypes.string,
};

export default Section;
