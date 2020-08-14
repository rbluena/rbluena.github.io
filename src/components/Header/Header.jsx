import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import Nav from "@app-components/Nav";

const Wrapper = styled.header`
  padding: 15px;
  position: relative;
`;

const Logo = styled.div`
  font-size: 28px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: "Fredoka One";
  color: grey;
`;

const PersonalDetails = styled.section`
  background-image: url("images/bg-wiggle.svg");
`;

const Fullname = styled.h1``;

const Headline = styled.p``;

const Social = styled.div`
  .icon {
    font-size: 20px;
    padding: 2px;
    margin: 3px;
  }
`;

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
      <Nav />
      <PersonalDetails>
        {/* <Fullname>{site.siteMetadata.title}</Fullname> */}
        <Fullname>About Me</Fullname>
        <Headline>{site.siteMetadata.description}</Headline>
        <Social>
          <a
            className="icon"
            href="https://github.com/rbluena"
            rel="noreferrer"
            target="_blank"
          >
            <FiGithub />
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/in/rbluena"
            rel="noreferrer"
            target="_blank"
          >
            <FiLinkedin />
          </a>
          <a
            className="icon"
            href="https://twitter.com/rbluena"
            rel="noreferrer"
            target="_blank"
          >
            <FiTwitter />
          </a>
        </Social>
      </PersonalDetails>
    </Wrapper>
  );
};

export default Header;
