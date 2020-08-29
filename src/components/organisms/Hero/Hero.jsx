import React from "react";
import { Section } from "@app-components";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled(Section)`
  padding-top: 0px;

  svg#illustration {
    display: none;
    height: 550px;
  }

  @media ${props => props.theme.devices.tablet} {
    display: flex;
    justify-content: flex-end;

    svg#illustration {
      display: block;
      width: 60vw;
    }
  }
`;

const Hero = ({ children }) => <Wrapper>{children}</Wrapper>;

Hero.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Hero;
