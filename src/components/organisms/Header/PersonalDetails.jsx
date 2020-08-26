import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import Text from "@app-components/assets/Typography";
import Link from "@app-components/atoms/Link";

const Wrapper = styled.section`
  background-image: url("images/bg-wiggle.svg");
  text-align: center;
  margin-top: 20px;
`;

const Block = styled.div`
  margin: 1em;
`;

const Social = styled.div`
  margin-top: 1.2em;

  .icon {
    font-size: 1.2em;
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
      <Block>
        <Text size="title" weight="thin">
          Rabii Luena
        </Text>
      </Block>
      <Block>
        <Text size="large" weight="bold">
          {site.siteMetadata.description}
        </Text>
      </Block>
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
    </Wrapper>
  );
};

export default PersonalDetails;
