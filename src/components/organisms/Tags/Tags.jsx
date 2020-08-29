import React from "react";
import PropTypes from "prop-types";
import Text from "@app-components/assets/Typography";
import SectionBox from "@app-components/molecules/SectionBox";
import styled from "styled-components";
import { data } from "@app-data/tags.json";

const ContentItem = styled.div`
  flex-basis: 40%;
  margin: ${props => props.theme.spacing.large}px
    ${props => props.theme.spacing.sm}px;
  color: ${props => props.theme.color.monochrome[700]};
`;

const Tags = () => {
  return (
    <SectionBox title="What am I striving for?">
      {Object.keys(data).map(key => {
        const item = data[key];

        return (
          <ContentItem key={key}>
            <Text size="subheading" weight="bold">
              {item.title}
            </Text>
            <br />
            <div>
              <Text>{item.description}</Text>
            </div>
          </ContentItem>
        );
      })}
    </SectionBox>
  );
};

export default Tags;