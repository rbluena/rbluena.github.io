import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "@app-components/assets/Typography";

const Wrapper = styled.div`
  border-left: 4px solid gray;
  min-height: 200px;
  padding-left: ${props => props.theme.spacing.sm}px;
  max-width: 120x;
`;

const Container = styled.div``;
const ContentList = styled.ul`
  list-style: none;
  padding: 0;
  column-count: 2;

  li {
    padding: ${props => props.theme.spacing.xs}px 0;
    color: ${props => props.theme.color.blue[200]};
  }
`;

const Heading = styled(Text)`
  color: ${props => props.theme.color.monochrome[300]};
  letter-spacing: 2px;
`;

const SkillBlock = ({ title = "Skill Block" }) => {
  return (
    <Wrapper>
      <Heading size="subheading" weight="thin">
        {title}
      </Heading>

      <ContentList>
        <li>JavaScript</li>
        <li>JavaScript</li>
        <li>JavaScript</li>
        <li>JavaScript</li>
        <li>JavaScript</li>
        <li>JavaScript</li>
        <li>JavaScript</li>
      </ContentList>
    </Wrapper>
  );
};

SkillBlock.propTypes = {};

export default SkillBlock;
