import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SEO from "@app-components/organisms/SEO";
import Header from "@app-components/organisms/Header";
import Footer from "@app-components/organisms/Footer";

const Wrapper = styled.div`
  background-color: ${props => props.theme.color.monochrome[800]};
`;

const Main = styled.main``;

const Layout = ({ showHeader, pageTitle, children }) => {
  return (
    <Wrapper>
      <SEO title={pageTitle} />
      {showHeader && <Header />}
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

Layout.defaultProps = {
  showHeader: false,
  pageTitle: "",
};

Layout.propTypes = {
  /** Showing header in the layout. */
  showHeader: PropTypes.bool,

  /** Title of the page that shown on a browser's tab. */
  pageTitle: PropTypes.string,

  /** Content inside layout. */
  children: PropTypes.node.isRequired,
};

export default Layout;
