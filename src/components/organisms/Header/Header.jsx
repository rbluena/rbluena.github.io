import React from "react";
import styled from "styled-components";
import { Hero, Navbar } from "@app-components";
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
    height: 650px;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Navbar />
      <Hero>
        <CoverBG />
        <PersonalDetails />
        <Illustration />
      </Hero>
    </Wrapper>
  );
};

export default Header;
