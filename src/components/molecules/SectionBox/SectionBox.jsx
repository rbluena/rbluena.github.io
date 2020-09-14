import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Text } from "@app-components";

const Wrapper = styled.section`
  background-color: ${props => props.theme.color.monochrome[700]};
  height: auto;
  display: flex;
  flex-direction: column;

  /* Tablet and greater */
  @media ${props => props.theme.devices.tablet} {
    min-height: 450px;
    flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  }
`;

const LeftContent = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing["xl"] * 3}px
    ${props => props.theme.spacing.large}px;

  @media ${props => props.theme.devices.tablet} {
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const RightContent = styled.div`
  background-color: ${props => props.theme.color.blue[300]};
  padding: ${props => props.theme.spacing["xl"] * 2}px
    ${props => props.theme.spacing.large}px;
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.devices.desktop} {
    width: 65%;

    ${props =>
      props.flexDirection === "row" &&
      `
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
    `}
  }
`;

const SectionBox = ({ reverse, title, children, flexDirection, className }) => {
  return (
    <Wrapper reverse={reverse} className={className}>
      <LeftContent>
        <Text size="title">{title}</Text>
      </LeftContent>
      <RightContent flexDirection={flexDirection}>{children}</RightContent>
    </Wrapper>
  );
};

SectionBox.defaultProps = {
  reverse: false,
  className: "",
  flexDirection: "",
};

SectionBox.propTypes = {
  /** Reversing columns of the containers. Left and right containers. */
  reverse: PropTypes.bool,

  /** Title of the section */
  title: PropTypes.string.isRequired,

  /** Showing content inside right container(content container) in flex or accupying the whole container.*/
  flexDirection: PropTypes.string,

  /** Content of the section. */
  children: PropTypes.node.isRequired,

  /** Class names provided by styled-components. */
  className: PropTypes.string,
};

export default SectionBox;
