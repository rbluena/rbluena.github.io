import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Link from "@app-components/atoms/Link";

const StyledNav = styled.div`
  display: flex;
  width: 100%;
  right: 0;
  position: absolute;
  line-height: 10px;

  text-transform: uppercase;
  top: 0px;
  justify-content: flex-end;

  a {
    display: block;
    padding-left: ${props => props.theme.spacing.sm}px;

    &:hover,
    &:active {
      background-color: ${props => props.theme.color.monochrome[700]};
    }
  }

  @media screen and (max-width: ${props => props.theme.mediaQuery.tablet}) {
    flex-direction: column;
    top: ${props => props.theme.spacing.xxxl}px;
    box-shadow: ${props => props.theme.elevation.elevated};
    background-color: white;
  }
`;

const Nav = ({ navItems }) => {
  return (
    <StyledNav>
      {navItems.map(item => (
        <Link key={item.label} data={item}>
          {item.label}
        </Link>
      ))}
    </StyledNav>
  );
};

Nav.propTypes = {
  /** Navigation data */
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      as: PropTypes.string,
    })
  ),
};

export default Nav;
