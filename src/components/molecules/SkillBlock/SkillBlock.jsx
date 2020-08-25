import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "@app-components/assets/Typography";

const Wrapper = styled.div`
  border-left: 4px solid gray;
  min-height: 100px;
  padding-left: ${props => props.theme.spacing.sm}px;
  padding-bottom: ${props => props.theme.spacing.xs}px;
  max-width: 300px;
`;

const ContentList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: ${props => props.theme.spacing.large}px;
  columns: 2;

  li {
    margin-bottom: ${props => props.theme.spacing.sm}px;
    color: ${props => props.theme.color.blue[200]};
    font-size: ${props => props.theme.typography.size.large}px;
  }
`;

const Heading = styled(Text)`
  color: ${props => props.theme.color.monochrome[300]};
  letter-spacing: 2px;
`;

const SkillBlock = ({ title, children }) => {
  return (
    <Wrapper>
      <Heading size="subheading" weight="thin">
        {title}
      </Heading>

      <ContentList>{children}</ContentList>
    </Wrapper>
  );
};

SkillBlock.propTypes = {
  /** Title of the block */
  title: PropTypes.string.isRequired,

  /** List items to be listed */
  children: PropTypes.node.isRequired,
};

export default SkillBlock;
