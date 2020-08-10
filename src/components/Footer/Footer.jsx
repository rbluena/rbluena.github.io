import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Text from "@app-components/Text";

const Wrapper = styled.footer`
  width: 100%;
  height; 50px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div``;

const Right = styled.div``;

const Footer = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Left>
        <Text>
          &copy;{new Date().getFullYear()}{" "}
          <span className="author">{data.site.siteMetadata.title}</span>
        </Text>
      </Left>

      <Right>
        <Text>
          Built with <a href="https://www.gatsbyjs.org">Gatsby</a>, hosted by
          GitHub Pages.
        </Text>
      </Right>
    </Wrapper>
  );
};

Footer.propTypes = {};

export default Footer;
