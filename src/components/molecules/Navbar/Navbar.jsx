import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Link from "@app-components/atoms/Link";
import Text from "@app-components/assets/Typography";
import Logo from "@app-components/assets/Logo";
import navItems from "@app-data/main-nav.json";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import animation from "./animation";

const StyledNavbar = styled.nav`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  top: 0px;
  left: 0;
  padding: ${props => props.theme.spacing.sm}px;
  box-shadow: ${props => props.theme.elevation.default};
  background-color: white;
  width: 100%;
`;

const Brand = styled.div`
  display: inline-block;
  margin-right: auto;
`;

const Menu = styled(motion.div)`
  a {
    display: inline-block;

    &:hover,
    &:active {
      border: 0px;
      outline: none !important;
    }
  }

  /* Mobile screens */
  @media screen and (max-width: ${props => props.theme.mediaQuery.tablet}) {
    text-align: center;
    width: 100%;
    position: absolute;
    right: 0px;
    height: calc(100vh - 64px);
    top: ${props => props.theme.spacing.xxxl}px;
    background-color: ${props => props.theme.color.monochrome[900]};
    box-shadow: ${props => props.theme.elevation.default};
    z-index: 0;
    display: ${props => (props.toggler ? "block" : "none")};

    a {
      display: block;
      padding-left: ${props => props.theme.spacing.sm}px;

      &:hover,
      &:active {
        border: 0px;
        outline: none !important;
      }
    }
  }
`;

const MobMenuHeading = styled.div`
  /* Tablet */
  @media screen and (min-width: ${props => props.theme.mediaQuery.tablet}) {
    display: none;
  }
`;

const Toggler = styled.button`
  font-size: ${props => props.theme.typography.size.h6}px;
  border: none;
  cursor: pointer;

  /* Tablet  */
  @media screen and (min-width: ${props => props.theme.mediaQuery.tablet}) {
    display: none;
  }
`;

const Navbar = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <StyledNavbar>
      <Brand>
        <Link to="/">
          <Logo />
        </Link>
      </Brand>
      <Menu toggler={toggler}>
        <MobMenuHeading>
          <Text size="subheading">Navigation</Text>
          <hr />
        </MobMenuHeading>

        {navItems.map(item => (
          <Link key={item.label} to={item.url} external={item.external}>
            {item.label}
          </Link>
        ))}
      </Menu>

      <Toggler onClick={() => setToggler(!toggler)}>
        <FiMenu />
      </Toggler>
    </StyledNavbar>
  );
};

export default Navbar;
