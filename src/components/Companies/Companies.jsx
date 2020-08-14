import React from "react";
import ContentSection from "@app-components/ContentSection";
import work from "@app-data/work";
import Item from "./Item";

const Companies = () => {
  const { data } = work;

  return (
    <ContentSection title="Work Experience">
      {Object.keys(data).map(key => {
        return <Item key={key} data={data[key]} />;
      })}
    </ContentSection>
  );
};

export default Companies;
