import React from "react";
import skills from "@app-data/skills.json";
import ContentSection from "../ContentSection";
import Skill from "./Skill";

const Skills = () => {
  const { data } = skills;

  return (
    <ContentSection title="Skills">
      {Object.keys(data).map(key => {
        return <Skill key={key} data={data[key]} />;
      })}
    </ContentSection>
  );
};

export default Skills;
