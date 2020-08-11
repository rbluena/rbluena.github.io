import React from "react";
import projects from "@app-data/projects";
import ContentSection from "@app-components/ContentSection";
import Item from "./Item";

const Projects = () => {
  const { data } = projects;

  return (
    <ContentSection title="Projects">
      {Object.keys(data).map(key => {
        return <Item data={data[key]} />;
      })}
    </ContentSection>
  );
};

export default Projects;
