import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Text from "@app-components/assets/Typography";

const Wrapper = styled.footer`
  width: 100%;
  height: 50px;
  font-weight: bold;

  @media only screen and (min-width: 720px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Left = styled.div``;

const Right = styled.div``;

const Footer = () => {
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

export default Footer;
