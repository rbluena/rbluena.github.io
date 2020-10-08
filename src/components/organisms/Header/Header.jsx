import React, { useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Hero, Navbar } from "@app-components";
import Illustration from "@app-components/assets/Illustration";
import PersonalDetails from "./PersonalDetails";

const Wrapper = styled.header``;

const IllustrationContainer = styled.div`
  margin-top: ${props => props.theme.spacing["3xl"]}px;
`;

const Header = ({ showHero }) => {
  const [scrolled, setScrolled] = useState(false);

  /**
   * Used to set shadow effect on navigation bar when scrolling
   */
  useLayoutEffect(() => {
    const onScroll = () => {
      if (window && window.scrollY > 20) {
        setScrolled(true);
      } else if (window && window.scrollY < 5) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Wrapper>
      <Navbar scrolled={scrolled} />
      {showHero && (
        <Hero>
          <PersonalDetails />
          <IllustrationContainer>
            <Illustration />
          </IllustrationContainer>
        </Hero>
      )}
    </Wrapper>
  );
};

Header.defaultProps = {
  showHero: false,
};

Header.propTypes = {
  /** Should hero be shown within a header */
  showHero: PropTypes.bool,
};

export default Header;
