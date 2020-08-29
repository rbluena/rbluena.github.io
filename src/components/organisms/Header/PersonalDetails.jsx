import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import Text from "@app-components/assets/Typography";
import Link from "@app-components/atoms/Link";

const Wrapper = styled.section`
  text-align: center;
  height: 250px;
  padding: calc(10 * 8px) 0px;
  margin-right: auto;

  @media screen and (min-width: ${props => props.theme.mediaQuery.tablet}) {
    text-align: left;
    padding-top: calc(6 * 24px);
  }
`;

const Social = styled.div`
  margin-top: ${props => props.theme.spacing.sm}px;
  .icon {
    font-size: 24px;
  }

  a {
    padding: 0px;
    padding-right: ${props => props.theme.spacing.xs}px;
    color: ${props => props.theme.color.monochrome[100]};
  }
`;

const Heading = styled(Text).attrs({ size: "heading" })`
  font-size: ${props => props.theme.typography.size.h4}px;
  margin-bottom: ${props => props.theme.spacing["medium"]}px;
`;

const Subheading = styled(Text).attrs({
  size: "subheading",
  weight: "regular",
})`
  font-size: ${[props => props.theme.typography.size.large]}px;
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
      <Heading>Rabii Luena</Heading>
      <Subheading>{site.siteMetadata.description}</Subheading>
      <Social>
        <Link
          external
          className="icon"
          to="https://github.com/rbluena"
          rel="noreferrer"
          target="_blank"
          aria-label="Visit my GitHub profile"
        >
          <FiGithub />
        </Link>
        <Link
          external
          className="icon"
          to="https://www.linkedin.com/in/rbluena"
          rel="noreferrer"
          target="_blank"
          aria-label="Visit my Linkedin profile"
        >
          <FiLinkedin />
        </Link>
        <Link
          external
          className="icon"
          to="https://twitter.com/rbluena"
          rel="noreferrer"
          target="_blank"
          aria-label="Visit my twitter profile"
        >
          <FiTwitter />
        </Link>
      </Social>
    </Wrapper>
  );
};

export default PersonalDetails;
