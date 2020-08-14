import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Wrapper = styled.section`
  background-image: url("images/bg-wiggle.svg");
  text-align: center;
  margin-top: 20px;
`;

const Fullname = styled.h1`
  margin: 0;
  padding: 0;
`;

const Headline = styled.p`
  font-size: 1.5rem;
`;

const Social = styled.div`
  .icon {
    font-size: 1.5rem;
    padding: 2px;
    margin: 3px;
  }
`;

const PersonalDetails = () => {
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
      <hr className="devider" />
    </Wrapper>
  );
};

export default PersonalDetails;
