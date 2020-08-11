import React from "react";
import tags from "@app-data/tags";
import ContentSection from "@app-components/ContentSection";
import Item from "./Item";

const GoodAt = () => {
  const { data } = tags;
  return (
    <ContentSection title="Good At">
      {Object.keys(data).map(key => {
        return <Item key={key} data={data[key]} />;
      })}
    </ContentSection>
  );
};

export default GoodAt;
