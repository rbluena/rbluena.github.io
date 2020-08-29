import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1224px;
  margin: 0 auto;

  svg#bg-wiggle {
    z-index: -10;
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    fill: ${props => props.theme.color.blue[100]};
    color: ${props => props.theme.color.blue[100]};
  }

  svg#illustration {
    display: none;
    padding: 0;
    height: 550px;
  }

  /* Tablet and greater */
  @media screen and (min-width: ${props => props.theme.mediaQuery.tablet}) {
    display: flex;
    justify-content: flex-end;
    padding: 0px ${props => props.theme.spacing["4xl"]}px;

    svg#bg-wiggle {
      max-width: 50vw;
      top: -${props => props.theme.spacing.medium}px;
      display: none;
    }

    svg#illustration {
      display: block;
    }
  }
`;

const Hero = ({ children }) => <Wrapper>{children}</Wrapper>;

Hero.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Hero;
