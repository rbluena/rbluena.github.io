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

const Heading = styled(Text).attrs({ size: "heading" })`
  line-height: 18px;
`;

const Subheading = styled(Text).attrs({ size: "subheading" })`
  line-height: 56px;
`;

const Large = styled(Text).attrs({ size: "large" })`
  line-height: inherit;
`;

const Description = styled.div``;

const Image = styled.div`
  margin-right: ${props => props.theme.spacing.sm}px;
  width: ${props => props.theme.spacing["2xl"]}px;
  background: transparent;

  svg {
    width: ${props => props.theme.spacing["2xl"]}px;
    height: ${props => props.theme.spacing["2xl"]}px;
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
            <ReactSVG src={imgPath} />

            <div>
              <Heading>{item.company}</Heading>
              <Subheading size="subheading" weight="bold">
                {item.from} - {item.to}
              </Subheading>
              <Large size="large">{item.position}</Large>
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
