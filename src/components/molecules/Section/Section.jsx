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
  }
`;

const Section = ({ children, as, className, ...rest }) => {
  return (
    <Wrapper className={className} forwardedAs={as} {...rest}>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {};

export default Section;
