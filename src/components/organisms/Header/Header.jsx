import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Navbar from "@app-components/molecules/Navbar";

import CoverBG from "@app-components/assets/CoverBG";
import PersonalDetails from "./PersonalDetails";
import { FiMenu } from "react-icons/fi";
// import SvgIllustration from "@app-components/assets/SvgIllustration";

const Wrapper = styled.header`
  margin: 0;
  padding: 0;
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
  return (
    <Wrapper>
      <Navbar />
      <ContentContainer>
        <CoverBG />
        <PersonalDetails />
      </ContentContainer>
    </Wrapper>
  );
};

Header.propTypes = {};

export default Header;
