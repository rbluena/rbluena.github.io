import React from "react";
import styled from "styled-components";
import { Section } from "@app-components";
import Text from "@app-components/assets/Typography";
import Link from "@app-components/atoms/Link";
import Wave from "@app-components/assets/images/Wave";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import linksData from "@app-data/main-nav.json";

const Wrapper = styled.footer`
  background-color: ${props => props.theme.color.blue[300]};
  color: ${props => props.theme.color.monochrome[200]};
`;

const WaveContainer = styled.div`
  #wave-image {
    fill: ${props => props.theme.color.blue[300]};
    padding: 0;
    margin: -5px 0;
    width: 100%;
  }
`;

const StyledContainer = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Left = styled.div``;

const Right = styled.div`
  margin-bottom: ${props => props.theme.spacing.large}px;
`;

const FooterNav = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: left;
  margin-bottom: ${props => props.theme.spacing.large}px;

  li {
    padding-bottom: ${props => props.theme.spacing.sm}px;
  }
`;

const Social = styled.ul`
  font-size: 20px;
  list-style: none;
  margin-top: ${props => props.theme.spacing.xs}px;
  padding: 0;

  li {
    display: inline-block;
    padding-right: ${props => props.theme.spacing.xs}px;
  }
`;

const StyledText = styled(Text)`
  font-size: 18px;
`;

const StyledLink = styled(Link)`
  margin: 0;
  padding: 0;

  &:hover {
    font-weight: bold;
  }
`;

const Footer = props => {
  return (
    <>
      <WaveContainer>
        <Wave />
      </WaveContainer>

      <Wrapper>
        <StyledContainer>
          <Left>
            <StyledText weight="bold">
              &copy; {new Date().getFullYear()}{" "}
              <StyledLink to="/">Rabii Luena</StyledLink>
            </StyledText>

            <Social>
              <li id="my-twitter-account">
                <StyledLink
                  external
                  to="https://twitter.com/rbluena"
                  aria-label="Visit my Twitter account"
                >
                  <FiTwitter />
                </StyledLink>
              </li>
              <li id="my-github-account">
                <StyledLink
                  external
                  to="https://github.com/rbluena"
                  aria-label="Visit my Github profile"
                >
                  <FiGithub />
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  external
                  to="https://linkedin.com/u/rbluena"
                  aria-label="Visit my Linkedin profile"
                >
                  <FiLinkedin />
                </StyledLink>
              </li>
            </Social>
          </Left>

          <FooterNav>
            {linksData.map(item => {
              return (
                <li key={item.label}>
                  <StyledLink to={item.url} external={item.external || false}>
                    {item.label}
                  </StyledLink>
                </li>
              );
            })}
          </FooterNav>

          <Right>
            <StyledText size="large">
              Built with{" "}
              <StyledLink external to="https://gatsbyjs.com">
                Gatsby
              </StyledLink>{" "}
              and hosted by{" "}
              <StyledLink external to="https://github.com">
                GitHub Pages.
              </StyledLink>
            </StyledText>
          </Right>
        </StyledContainer>
      </Wrapper>
    </>
  );
};

export default Footer;
