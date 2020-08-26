import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "@app-components/assets/Typography";
import SkillBlock from "@app-components/molecules/SkillBlock";
import { data } from "@app-data/skills.json";

const Wrapper = styled.section``;

const Title = styled(Text).attrs({ size: "heading" })``;

const SkillsContainer = styled.div`
  padding-top: ${props => props.theme.spacing.large}px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  /* Considering folks who do not have grids */
  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledSkillBlock = styled(SkillBlock)`
  flex: 0 0 60%;
  font-weight: bold;
`;

const Skills = () => {
  return (
    <Wrapper>
      <Title>Skills</Title>

      <SkillsContainer>
        {Object.keys(data).map(key => {
          const skills = data[key];

          return (
            <StyledSkillBlock title={skills.title}>
              {skills.items &&
                skills.items.map(skill => {
                  return <li>{skill.name}</li>;
                })}
            </StyledSkillBlock>
          );
        })}
      </SkillsContainer>
    </Wrapper>
  );
};

export default Skills;
