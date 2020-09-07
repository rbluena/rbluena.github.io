import React from "react";
import styled, { keyframes } from "styled-components";
import {
  FiGithub,
  FiLinkedin,
  FiSmartphone,
  FiMapPin,
  FiCodepen,
  FiCalendar,
  FiTwitter,
} from "react-icons/fi";
import { Section, Link, Text } from "@app-components";

const stripAnimation = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
`;

const StyledSection = styled(Section)``;

const ContentContainer = styled.div`
  position: relative;
  box-shadow: ${props => props.theme.elevation.elevated};
  border-radius: ${props => props.theme.border.radius.large};
  max-width: 600px;
  margin: 0 auto;
  transition: box-shadow 0.3s ease-in-out;
  margin-bottom: 3em;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;

  /* Tablet and greater */
  @media ${props => props.theme.devices.tablet} {
    flex-direction: row;
  }
`;

const Social = styled.ul`
  margin: 0;
  padding: ${props => props.theme.spacing["l"]} 0;
  list-style: none;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 32px;

  @media ${props => props.theme.devices.tablet} {
    flex-direction: column;
    justify-content: space-between;
    width: 80px;
  }
`;

const Info = styled.div`
  border-bottom: 1px solid ${props => props.theme.color.monochrome[600]};
  padding: ${props => props.theme.spacing["xl"]}px 0;

  @media ${props => props.theme.devices.tablet} {
    border-left: 1px solid ${props => props.theme.color.monochrome[600]};
  }
`;

const InfoHeading = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${props => props.theme.spacing["2xl"]}px;

  span {
    display: inline-block;
    font-size: 18px;
    margin-right: ${props => props.theme.spacing.xs}px;
  }
`;

const InfoDetails = styled.div`
  margin-bottom: ${props => props.theme.spacing.large}px;
  padding-left: ${props => props.theme.spacing["2xl"]}px;
`;

const StyledLink = styled(Link)``;

const BottomStrip = styled.div`
  height: ${props => props.theme.spacing.xs}px;
  border-bottom-left-radius: ${props => props.theme.border.radius.large};
  border-bottom-right-radius: ${props => props.theme.border.radius.large};
  width: 100%;
  background-image: linear-gradient(270deg, #d16ba5, #86a8e7, #5ffbf1);
  background-size: 400% 400%;
  animation: ${stripAnimation} 5s ease infinite;
`;

const ContactInfo = () => {
  return (
    <StyledSection>
      <ContentContainer>
        <FlexContainer>
          <Social>
            <li>
              <StyledLink
                external
                to="https://linkedin.com/u/rbluena"
                aria-label="Visit my Linkedin profile"
              >
                <FiLinkedin />
              </StyledLink>
            </li>
            <li>
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
                to="https://codepen.io/rbluena"
                aria-label="Visit my Twitter account"
              >
                <FiCodepen />
              </StyledLink>
            </li>
            <li>
              <StyledLink
                external
                to="https://twitter.com/rbluena"
                aria-label="Visit my Twitter account"
              >
                <FiTwitter />
              </StyledLink>
            </li>
          </Social>
          <Info>
            {/* start: Location */}
            <InfoHeading>
              <span>
                <FiMapPin />
              </span>
              <Text size="heading">Location</Text>
            </InfoHeading>
            <InfoDetails>
              <Text size="large">Arusha, Tanzania</Text>
              <Text size="large">Nairobi, Kenya</Text>
            </InfoDetails>
            {/* end: Location */}

            {/* start: Phone  */}
            <InfoHeading>
              <span>
                <FiSmartphone />
              </span>
              <Text size="heading">Mobile</Text>
            </InfoHeading>
            <InfoDetails>
              <Text size="large">+255 714 061234</Text>
            </InfoDetails>
            {/* end: Phone */}

            {/* start: Meeting  */}
            <InfoHeading>
              <span>
                <FiCalendar />
              </span>
              <Text size="heading">Book Meeting</Text>
            </InfoHeading>
            <InfoDetails>
              <StyledLink
                external
                to="https://calendly.com/rbluena/15min?back=1"
              >
                Book now
              </StyledLink>
            </InfoDetails>
            {/* end: Meeting */}
          </Info>
        </FlexContainer>
        <BottomStrip />
      </ContentContainer>
    </StyledSection>
  );
};

export default ContactInfo;
