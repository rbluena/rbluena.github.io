import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Logo from "@app-components/assets/Logo";
import Navbar from "@app-components/molecules/Navbar";
import navItems from "@app-data/main-nav.json";
import CoverBG from "@app-components/assets/CoverBG";
import PersonalDetails from "./PersonalDetails";
import { FiMenu } from "react-icons/fi";
// import SvgIllustration from "@app-components/assets/SvgIllustration";

const Wrapper = styled.header`
  margin: 0;
  padding: 0;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Brand = styled.div`
  display: inline-block;
  padding-top: ${props => props.theme.spacing.xs}px;
  margin-right: auto;
`;

const NavContainer = styled.div``;

const Hamburger = styled.button`
  display: none;
  padding: 4px;
  margin: 0;
  height: auto;
  font-size: 25px;
  border: none;
  background: none;

  &.active {
    background-color: ${props => props.theme.color.blue[200]};
    color: white;
  }

  &:hover,
  &:active,
  &:focus {
    border: 0px;
    outline: none !important;
    background-color: ${props => props.theme.color.blue[200]};
    color: white;
  }

  /* Mobile  */
  @media screen and (max-width: ${props => props.theme.mediaQuery.tablet}) {
    display: block;
  }
`;

const ContentContainer = styled.div`
  background: transparent;

  svg#bg-wiggle {
    z-index: -10;
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
  }

  svg#illustration {
    display: none;
    position: absolute;
    right: 0;
  }
`;

const Header = props => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <Wrapper>
      <Navbar navItems={navItems} />
      <ContentContainer>
        <CoverBG />
        <PersonalDetails />
      </ContentContainer>
    </Wrapper>
  );
};

Header.propTypes = {};

export default Header;
