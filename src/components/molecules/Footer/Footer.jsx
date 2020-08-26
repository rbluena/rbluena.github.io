import React from "react";
import styled from "styled-components";
import Text from "@app-components/assets/Typography";
import Link from "@app-components/atoms/Link";
import { FiTwitter } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import linksData from "@app-data/main-nav.json";

const Wrapper = styled.footer``;
const StyledText = styled(Text).attrs({ size: "sm" })``;
const StyledLink = styled(Link)``;
const Social = styled.div``;
const Left = styled.div``;
const Center = styled.div``;
const Right = styled.div``;
const FooterNav = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Footer = props => {
  return (
    <Wrapper>
      <Left>
        <StyledText>&copy; {new Date().getFullYear()} Rabii Luena</StyledText>
        <Social>
          <FiTwitter />
          <FiGithub />
          <FiLinkedin />
        </Social>
      </Left>

      <Center>
        <FooterNav>
          {linksData.map(item => {
            return (
              <li key={item.label}>
                <StyledLink data={item}>{item.label}</StyledLink>
              </li>
            );
          })}
        </FooterNav>
      </Center>

      <Right>
        <StyledText>&copy; {new Date().getFullYear()} Rabii Luena</StyledText>
      </Right>
    </Wrapper>
  );
};

export default Footer;
