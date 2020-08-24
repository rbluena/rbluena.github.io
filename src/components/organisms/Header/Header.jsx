import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Navbar from "@app-components/molecules/Navbar";
import CoverBG from "@app-components/assets/CoverBG";
import Illustration from "@app-components/assets/Illustration";
import PersonalDetails from "./PersonalDetails";

const Wrapper = styled.header`
  margin-top: ${props => props.theme.spacing.xxxl}px;

  /* Tablet and greater */
  @media screen and (min-width: ${props => props.theme.mediaQuery.tablet}) {
    margin-top: ${props => props.theme.spacing.xxxxl}px;
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
    fill: ${props => props.theme.color.blue[100]};
    color: ${props => props.theme.color.blue[100]};
  }

  svg#illustration {
    display: none;
    position: absolute;
    right: 0;
    margin: 0p;
    padding: 0;
  }

  /* Tablet and greater */
  @media screen and (min-width: ${props => props.theme.mediaQuery.tablet}) {
    width: 400px;
    border: 1px dashed;
    padding-top: ${props => props.theme.spacing.xxxxl}px;

    svg#bg-wiggle {
      max-width: 50vw;
      top: -${props => props.theme.spacing.medium}px;
      display: none;
    }

    svg#illustration {
      display: block;
      width: 50vw;
      top: ${props => props.theme.spacing.xxxl}px;
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
