import React from "react";
import PropTypes from "prop-types";
import { SectionBox, Text, Badge, Button } from "@app-components";
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
`;

const StyledLink = styled(Button)``;

const Description = styled(Text).attrs({ size: "large", weight: "thin" })`
  color: ${props => props.theme.color.blue[100]};
  font-size: 150%;
  position: relative;
  line-height: 150%;
`;

const Footer = styled.footer``;

const Project = ({ project, reverse }) => {
  return (
    <Wrapper title={project.title.toUpperCase()} reverse={reverse}>
      <Content>
        <Description>
          <span dangerouslySetInnerHTML={{ __html: project.description }} />
        </Description>

        <Footer>
          {/* start: end of buttons */}
          <Tags>
            {project.tags &&
              project.tags.length &&
              project.tags.map(tag => {
                return (
                  <React.Fragment key={tag}>
                    <Badge label={tag} primary />
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
