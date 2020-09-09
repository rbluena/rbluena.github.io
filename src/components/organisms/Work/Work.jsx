import React from "react";
import styled from "styled-components";
import Text from "@app-components/assets/Typography";
import SectionBox from "@app-components/molecules/SectionBox";
import { data } from "@app-data/work.json";

const ContentItem = styled.div`
  flex-basis: 35%;
  padding: 0 ${props => props.theme.spacing["xl"]}px;
  color: ${props => props.theme.color.monochrome[700]};
  display: flex;
`;

const Heading = styled(Text).attrs({ size: "heading" })`
  line-height: 1;
  margin-bottom: ${props => props.theme.spacing["sm"]}px;
`;

const ImageBox = styled.div`
  width: ${props => props.theme.spacing["3xl"]}px;
  height: ${props => props.theme.spacing["3xl"]}px;
  margin-right: ${props => props.theme.spacing.sm}px;
`;

const Image = styled.img`
  width: ${props => props.theme.spacing["3xl"]}px;
  height: ${props => props.theme.spacing["3xl"]}px;
`;

const Work = () => {
  return (
    <SectionBox title="Working Experience" displayContent="column" reverse>
      {Object.keys(data).map(key => {
        const item = data[key];
        let imgPath = "";

        if (item.image && item.image.length) {
          imgPath = require(`../../../images/${item.image}`);
        }

        return (
          <ContentItem key={key}>
            <ImageBox>
              {item.image && item.image.length && <Image src={imgPath} />}
            </ImageBox>

            <div>
              <Heading>{item.company}</Heading>
              <Text size="large">{item.position}</Text>
              <Text size="sm">
                {item.from} - {item.to}
              </Text>
              {item.description && <Text>{item.description}</Text>}
            </div>
          </ContentItem>
        );
      })}
    </SectionBox>
  );
};

export default Work;
