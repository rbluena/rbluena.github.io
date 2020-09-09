import React from "react";
import Text from "@app-components/assets/Typography";
import SectionBox from "@app-components/molecules/SectionBox";
import styled from "styled-components";
import { data } from "@app-data/tags.json";

const ContentItem = styled.div`
  color: ${props => props.theme.color.monochrome[700]};
  margin-bottom: ${props => props.theme.spacing["xl"]}px;

  @media ${props => props.theme.devices.desktop} {
    flex-basis: 40%;
    padding: 0 ${props => props.theme.spacing["sm"]}px;
  }
`;

const Tags = () => {
  return (
    <SectionBox title="I strive for" displayContent="column">
      {Object.keys(data).map(key => {
        const item = data[key];

        return (
          <ContentItem key={key} displayContent="column">
            <Text size="heading">{item.title}</Text>
            <br />
            <div>
              <Text size="large">{item.description}</Text>
            </div>
          </ContentItem>
        );
      })}
    </SectionBox>
  );
};

export default Tags;
