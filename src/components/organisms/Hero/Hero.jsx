import React from "react";
import { Section } from "@app-components";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled(Section)`
  padding-top: ${props => props.theme.spacing.xxxl}px;

  svg#illustration {
    display: none;
    height: 550px;
  }

  /* Tablet and greater */
  @media ${props => props.theme.devices.tablet} {
    height: 650px;
    display: flex;
    justify-content: flex-end;

    svg#illustration {
      display: block;
    }
  }
`;

const Hero = ({ children }) => <Wrapper>{children}</Wrapper>;

Hero.propTypes = {
  /** Content to be rendered */
  children: PropTypes.node.isRequired,
};

export default Hero;
