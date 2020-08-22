import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Logo from "@app-components/assets/Logo";
import Nav from "@app-components/molecules/Nav";
import navItems from "@app-data/main-nav.json";
import CoverBG from "@app-components/assets/CoverBG";
// import SvgIllustration from "@app-components/assets/SvgIllustration";

const BackgroundImage = "../../../images/bg-wiggle.svg";

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
    position: absolute;
    right: 0;
  }
`;

const CoverBackground = styled.div``;

// const BackgroundImage = styled.img``;

const Header = props => {
  return (
    <Wrapper>
      <TopBar>
        <Brand>
          <Logo />
        </Brand>
        <NavContainer>
          <Nav navItems={navItems} />
        </NavContainer>
      </TopBar>

      <ContentContainer>
        <CoverBG />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          officia dolorum magni minima vitae, quia reiciendis iste fuga beatae
          est deserunt molestias dolore debitis maxime perspiciatis iusto ea
          commodi provident.
        </div>
      </ContentContainer>
    </Wrapper>
  );
};

Header.propTypes = {};

export default Header;
