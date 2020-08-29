import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Navbar from "@app-components/organisms/Navbar";
import CoverBG from "@app-components/assets/CoverBG";
import Illustration from "@app-components/assets/Illustration";
import PersonalDetails from "./PersonalDetails";

const Wrapper = styled.header`
  color: white;
  padding-top: ${props => props.theme.spacing.xxxl}px;
  background: hsla(217, 100%, 50%, 1);
  background: linear-gradient(
    315deg,
    hsla(217, 100%, 50%, 1) 0%,
    hsla(186, 100%, 69%, 1) 100%
  );
  background: -moz-linear-gradient(
    315deg,
    hsla(217, 100%, 50%, 1) 0%,
    hsla(186, 100%, 69%, 1) 100%
  );
  background: -webkit-linear-gradient(
    315deg,
    hsla(217, 100%, 50%, 1) 0%,
    hsla(186, 100%, 69%, 1) 100%
  );
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#0061FF", endColorstr="#60EFFF", GradientType=1 );

  /* Tablet and greater */
  @media screen and (min-width: ${props => props.theme.mediaQuery.tablet}) {
    height: 650px; /* TODO: Use calculation of 8 */
  }
`;

const ContentContainer = styled.div`
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
    justify-content: space-between;
    padding: ${props => props.theme.spacing["2xl"]}px;

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

const Header = props => {
  return (
    <Wrapper>
      <Navbar />
      <ContentContainer>
        <CoverBG />
        <PersonalDetails />
        <Illustration />
      </ContentContainer>
    </Wrapper>
  );
};

Header.propTypes = {};

export default Header;
