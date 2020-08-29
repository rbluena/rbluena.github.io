import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SEO from "@app-components/organisms/SEO";

const Wrapper = styled.div`
  background-color: ${props => props.theme.color.monochrome[800]};
`;

const Layout = ({ pageTitle, children }) => {
  return (
    <Wrapper>
      <SEO title={pageTitle} />
      {children}
    </Wrapper>
  );
};

Layout.defaultProps = {
  pageTitle: "",
};

Layout.propTypes = {
  /** Title of the page that shown on a browser's tab. */
  pageTitle: PropTypes.string,

  /** Content inside layout. */
  children: PropTypes.node.isRequired,
};

export default Layout;
