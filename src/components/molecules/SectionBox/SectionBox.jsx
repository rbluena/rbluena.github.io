import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "@app-components/assets/Typography";

const Wrapper = styled.section`
  background-color: ${props => props.theme.color.monochrome[700]};
  height: auto;
  display: flex;
  flex-direction: column;

  /* Tablet and greater */
  @media screen and (min-width: ${props => props.theme.mediaQuery.tablet}) {
    height: 450px;
    flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  }
`;

const ContentContainer = styled.div`
  @media screen and (min-width: ${props => props.theme.mediaQuery.tablet}) {
  }
`;

const LeftContent = styled(ContentContainer)`
  text-align: center;
  padding-top: 3em;
  margin-bottom: 3em;

  @media screen and (min-width: ${props => props.theme.mediaQuery.tablet}) {
    padding: 0;
    padding-bottom: 2em;
    height: 100%;
    min-width: 100px;
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const RightContent = styled(ContentContainer)`
  background-color: ${props => props.theme.color.blue[200]};
  padding: ${props => props.theme.spacing.large}px;

  @media screen and (min-width: ${props => props.theme.mediaQuery.tablet}) {
    height: 100%;
    width: 70%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const SectionBox = ({ reverse, title, children }) => {
  return (
    <Wrapper reverse={reverse}>
      <LeftContent>
        <Text size="title">{title}</Text>
      </LeftContent>
      <RightContent>{children}</RightContent>
    </Wrapper>
  );
};

SectionBox.defaultProps = {
  reverse: false,
};

SectionBox.propTypes = {
  /** Reversing columns of the containers */
  reverse: PropTypes.bool,

  /** Title of the section */
  title: PropTypes.string.isRequired,

  /** Content of the section */
  children: PropTypes.node.isRequired,
};

export default SectionBox;
