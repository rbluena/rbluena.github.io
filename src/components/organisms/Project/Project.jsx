import React from "react";
import PropTypes from "prop-types";
import { SectionBox, Text, Badge, Button } from "@app-components";
import styled from "styled-components";

const Wrapper = styled(SectionBox)`
  margin-bottom: ${props => props.theme.spacing["2xl"] * 3}px;
`;

const Content = styled.div`
  padding: ${props => props.theme.spacing["4xl"]}px
    ${props => props.theme.spacing.large}px;
  color: ${props => props.theme.color.monochrome[300]};
`;

const Tags = styled.div`
  padding: ${props => `${props.theme.spacing.sm}px 0`};
`;

const Buttons = styled.div`
  padding: ${props => `${props.theme.spacing.sm}px 0`};
`;

const StyledLink = styled(Button)``;

const Project = ({ project, reverse }) => {
  return (
    <Wrapper title={project.title.toUpperCase()} reverse={reverse}>
      <Content>
        <Text size="heading">
          <span dangerouslySetInnerHTML={{ __html: project.description }} />
        </Text>

        {/* start: end of buttons */}
        <Tags>
          {project.tools &&
            project.tools.length &&
            project.tools.map(tool => {
              return (
                <React.Fragment key={tool}>
                  <Badge label={tool} primary />
                  &nbsp;&nbsp;
                </React.Fragment>
              );
            })}
        </Tags>
        {/* end: end of buttons */}

        {/* start: end of buttons */}
        <Buttons>
          <StyledLink
            href={project.url}
            link
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </StyledLink>
          &nbsp; &nbsp;
          {project.repo && project.repo.length && (
            <StyledLink
              href={project.repo}
              link
              target="blank"
              rel="noopener noreferrer"
              secondary
            >
              Repository
            </StyledLink>
          )}
        </Buttons>
        {/* end: end of buttons */}
      </Content>
    </Wrapper>
  );
};

Project.defaultProps = {
  reverse: false,
};

Project.propTypes = {
  /** Project's data.  */
  project: PropTypes.objectOf(PropTypes.any).isRequired,

  /** Reversing the order between title's container and project description container. */
  reverse: PropTypes.bool,
};

export default Project;
