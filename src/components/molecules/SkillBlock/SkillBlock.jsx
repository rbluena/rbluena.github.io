import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "@app-components/assets/Typography";

const Wrapper = styled.div`
  border-left: 4px solid gray;
  min-height: 100px;
  padding: ${props => props.theme.spacing.xs}px;
  padding-top: 0;
  max-width: 300px;
  margin-bottom: ${props => props.theme.spacing.large}px;

  @media screen and (min-width: ${props => props.theme.mediaQuery.tablet}) {
    padding-left: ${props => props.theme.spacing.large}px;
  }
`;

const ContentList = styled.ul`
  list-style: none;
  padding: 0;

  @media screen and (min-width: ${props => props.theme.mediaQuery.tablet}) {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    font-size: ${props => props.theme.typography.size.large}px;
    flex: 0 0 50%;
    line-height: 150%;
    margin-bottom: ${props => props.theme.spacing.sm}px;
  }
`;

const Heading = styled(Text)`
  color: ${props => props.theme.color.monochrome[300]};
  letter-spacing: 2px;
`;

const SkillBlock = ({ title, children, className }) => {
  return (
    <Wrapper className={className}>
      <Heading size="subheading" weight="thin">
        {title}
      </Heading>

      <ContentList>{children}</ContentList>
    </Wrapper>
  );
};

SkillBlock.defaultProps = {
  className: "",
};

SkillBlock.propTypes = {
  /** Title of the block. */
  title: PropTypes.string.isRequired,

  /** Block contents */
  children: PropTypes.node.isRequired,

  /** Class name used by styled-components */
  className: PropTypes.string,
};

export default SkillBlock;
