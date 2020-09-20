import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { FiGithub, FiTwitter, FiCodepen, FiLinkedin } from "react-icons/fi";
import { Text } from "@app-components";
import Link from "@app-components/atoms/Link";
import { RiDribbbleLine } from "react-icons/ri";

const Wrapper = styled.section`
  text-align: center;
  height: 250px;
  padding: calc(10 * 8px) 0px;
  margin-right: auto;
  max-width: calc(80 * 8px);

  @media screen and (min-width: ${props => props.theme.mediaQuery.tablet}) {
    text-align: left;
    padding-top: calc(6 * 24px);
  }
`;

const Social = styled.div`
  margin-top: ${props => props.theme.spacing.large}px;

  .icon {
    font-size: 170%;
  }

  a {
    padding: 0px;
    padding-right: ${props => props.theme.spacing.sm}px;
    color: ${props => props.theme.color.monochrome[400]};

    &:hover {
      color: ${props => props.theme.color.blue[100]};
    }
  }
`;

const Title = styled(Text).attrs({ size: "title" })`
  margin-bottom: ${props => props.theme.spacing["2xl"]}px;
`;

const Heading = styled(Text).attrs({
  size: "heading",
})`
  margin-bottom: ${props => props.theme.spacing["2xl"]}px;
`;

const LinkedinBadge = styled.div`
  display: none;

  @media ${props => props.theme.devices.tablet} {
    display: block;
  }
`;

const PersonalDetails = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const { siteMetadata: metadata } = site;

  return (
    <Wrapper>
      <Title>{metadata.title}</Title>

      <Heading>{metadata.description}</Heading>

      <LinkedinBadge>
        <div
          className="LI-profile-badge"
          data-version="v1"
          data-size="medium"
          data-locale="en_US"
          data-type="horizontal"
          data-theme="dark"
          data-vanity="rbluena"
        >
          <a
            className="LI-simple-link"
            href="https://ke.linkedin.com/in/rbluena?trk=profile-badge"
          >
            LinkedIn Badge
          </a>
        </div>
      </LinkedinBadge>

      <Social>
        <Link
          external
          className="icon"
          to="https://ke.linkedin.com/in/rbluena"
          aria-label="Visit my LinkedIn profile"
        >
          <FiLinkedin />
        </Link>
        <Link
          external
          className="icon"
          to="https://github.com/rbluena"
          aria-label="Visit my GitHub profile"
        >
          <FiGithub />
        </Link>
        <Link
          external
          className="icon"
          to="https://www.codepen.com/rbluena"
          aria-label="Visit my codepen profile"
        >
          <FiCodepen />
        </Link>
        <Link
          external
          className="icon"
          to="https://www.dribbble.com/rbluena"
          aria-label="Visit my codepen profile"
        >
          <RiDribbbleLine />
        </Link>
        <Link
          external
          className="icon"
          to="https://twitter.com/rbluena"
          aria-label="Visit my twitter profile"
        >
          <FiTwitter />
        </Link>
      </Social>
    </Wrapper>
  );
};

export default PersonalDetails;
