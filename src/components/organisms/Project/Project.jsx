import React from "react";
import PropTypes from "prop-types";
import { SectionBox, Badge, Button } from "@app-components";
import styled from "styled-components";

const Wrapper = styled(SectionBox)`
  margin-bottom: ${props => props.theme.spacing["2xl"] * 3}px;
  position: relative;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Tags = styled.div`
  padding: ${props => `${props.theme.spacing.sm}px 0`};
`;

const Buttons = styled.div`
  padding: ${props => `${props.theme.spacing.sm}px 0`};
  display: flex;
  flex-wrap: wrap;
`;

const StyledLink = styled(Button)``;

const Description = styled.div`
  color: ${props => props.theme.color.blue[100]};
  font-size: 150%;
  font-weight: ${props => props.theme.typography.weight.thin};
  position: relative;
  line-height: 150%;
`;

const Footer = styled.footer``;

const Project = ({ project, reverse }) => {
  return (
    <Wrapper title={project.title.toUpperCase()} reverse={reverse}>
      <Content>
        <Description>
          {project.description}
          {project.achievements && project.achievements.length > 0 && (
            <ul>
              {project.achievements.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </Description>

        <Footer>
          {/* start: end of buttons */}
          <Tags>
            {project.tags &&
              project.tags.length &&
              project.tags.map(tag => {
                return (
                  <React.Fragment key={tag}>
                    <Badge size="sm" label={tag} primary />
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
                dark
              >
                Repository
              </StyledLink>
            )}
            &nbsp; &nbsp;
            {project.styleguide && project.styleguide.length && (
              <StyledLink
                href={project.styleguide}
                link
                target="blank"
                rel="noopener noreferrer"
                secondary
              >
                Style Guide
              </StyledLink>
            )}
            &nbsp; &nbsp;
            {project.workflow && project.workflow.length && (
              <StyledLink
                href={project.workflow}
                link
                target="blank"
                rel="noopener noreferrer"
                primary
              >
                Work Management
              </StyledLink>
            )}
          </Buttons>
          {/* end: end of buttons */}
        </Footer>
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
