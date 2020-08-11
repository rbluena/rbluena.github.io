import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const Wrapper = styled.header`
  width: 100%;
  height: 200px;
`;

const Logo = styled.div`
  font-size: 28px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: "Fredoka One";
`;

const PersonalDetails = styled.section`
  background-image: url("images/bg-wiggle.svg");
`;

const Fullname = styled.h1``;

const Headline = styled.p``;

const Social = styled.div``;

const Header = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            headline
            description
          }
        }
      }
    `
  );

  return (
    <Wrapper>
      <Logo>Luena</Logo>

      <PersonalDetails>
        <Fullname>{site.siteMetadata.title}</Fullname>
        <Headline>{site.siteMetadata.description}</Headline>
        <Social>Social</Social>
      </PersonalDetails>
    </Wrapper>
  );
};

export default Header;
