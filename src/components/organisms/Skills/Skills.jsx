import React from "react";
import styled from "styled-components";
import Text from "@app-components/assets/Typography";
import SkillBlock from "@app-components/molecules/SkillBlock";
import { Section } from "@app-components";
import { data } from "@app-data/skills.json";

const Wrapper = styled(Section)`
  padding-top: ${props => props.theme.spacing["xl"] * 3}px;
  padding-bottom: ${props => props.theme.spacing["xl"] * 3}px;
  max-width: 1224px;
  margin: 0 auto;
`;

const Title = styled(Text).attrs({ size: "title" })`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing["xl"] * 3}px;

  @media ${props => props.theme.devices.tablet} {
    text-align: left;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  /* Considering folks who do not have grids */
  @supports (display: grid) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0px;

    @media ${props => props.theme.devices.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }
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
            <StyledSkillBlock key={key} title={skills.title}>
              {skills.items &&
                skills.items.map(skill => {
                  return <li key={skill.name}>{skill.name}</li>;
                })}
            </StyledSkillBlock>
          );
        })}
      </SkillsContainer>
    </Wrapper>
  );
};

export default Skills;
