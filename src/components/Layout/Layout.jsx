import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import HeadTag from "@app-components/HeadTag";
import Header from "@app-components/Header";
import Footer from "@app-components/Footer";

const Wrapper = styled.div`
  padding-bottom: 1.0875rem;
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
  /* padding: ${props => props.theme.spaces.padding}; */
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <HeadTag title="Home" />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
