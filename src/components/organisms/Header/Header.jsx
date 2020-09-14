import React, { useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Hero, Navbar } from "@app-components";
import CoverBG from "@app-components/assets/CoverBG";
import Illustration from "@app-components/assets/Illustration";
import PersonalDetails from "./PersonalDetails";

const Wrapper = styled.header``;

const Header = ({ showHero }) => {
  const [scrolling, setScrolling] = useState(false);

  useLayoutEffect(() => {
    const onScroll = () => {
      if (window && window.scrollY > 20) {
        setScrolling(true);
      } else if (window && window.scrollY < 5) {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Wrapper>
      <Navbar scrolling={scrolling} />
      {showHero && (
        <Hero>
          <CoverBG />
          <PersonalDetails />
          <Illustration />
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
