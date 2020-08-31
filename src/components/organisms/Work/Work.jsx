import React from "react";
import styled from "styled-components";
import Text from "@app-components/assets/Typography";
import SectionBox from "@app-components/molecules/SectionBox";
import Button from "@app-components/atoms/Button";
import { ReactSVG } from "react-svg";
import { data } from "@app-data/work.json";

const ContentItem = styled.div`
  flex-basis: 40%;
  margin: ${props => props.theme.spacing.large}px 0px;
  color: ${props => props.theme.color.monochrome[700]};
  display: flex;
`;
const Description = styled.div``;

const Image = styled.div`
  margin-right: ${props => props.theme.spacing.sm}px;
  width: ${props => props.theme.spacing["2xl"]}px;
  background: transparent;

  svg {
    width: ${props => props.theme.spacing.xxxl}px;
    height: ${props => props.theme.spacing.xxxl}px;
    margin: 0;
    padding: 0px;
  }
`;

const Work = () => {
  return (
    <SectionBox title="Working Experience" reverse>
      {Object.keys(data).map(key => {
        const item = data[key];
        let imgPath = "";

        if (item.image && item.image.length) {
          imgPath = require(`../../../images/${item.image}`);
        }

        return (
          <ContentItem key={key}>
            <Image hasImage={imgPath && imgPath.length}>
              {imgPath && imgPath.length && <ReactSVG src={imgPath} />}
            </Image>

            <div>
              <Text size="subheading">{item.company}</Text>
              <Text subheading="large" weight="bold">
                {item.from} - {item.to}
              </Text>
              <Text subheading="large" weight="thin">
                {item.type}
              </Text>
              <Description>{item.description}</Description>

              {data.url && (
                <Button href="" type={data.url}>
                  Visit
                </Button>
              )}
            </div>
          </ContentItem>
        );
      })}
    </SectionBox>
  );
};

export default Work;
