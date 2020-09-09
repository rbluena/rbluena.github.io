import React from "react";
import styled from "styled-components";
import Text from "@app-components/assets/Typography";
import SectionBox from "@app-components/molecules/SectionBox";
import { data } from "@app-data/work.json";

const ContentItem = styled.div`
  margin-bottom: ${props => props.theme.spacing["3xl"]}px;
  color: ${props => props.theme.color.monochrome[700]};

  @media ${props => props.theme.devices.desktop} {
    flex-basis: 40%;
    padding: 0 ${props => props.theme.spacing["sm"]}px;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  margin-bottom: ${props => props.theme.spacing["sm"]}px;
`;

const CompanyDetails = styled.div``;

const Heading = styled(Text).attrs({ size: "heading" })`
  line-height: 1;
  margin-bottom: ${props => props.theme.spacing["xs"]}px;
`;

const ImageBox = styled.div``;

const Image = styled.img`
  width: ${props => props.theme.spacing["2xl"]}px;
  height: ${props => props.theme.spacing["2xl"]}px;
  margin-right: ${props => props.theme.spacing["sm"]}px;
`;

const Description = styled.div``;

const Work = () => {
  return (
    <SectionBox title="Working Experience" flexDirection="row" reverse>
      {Object.keys(data).map(key => {
        const item = data[key];
        let imgPath = "";

        if (item.image && item.image.length) {
          imgPath = require(`../../../images/${item.image}`);
        }

        return (
          <ContentItem key={key}>
            <CompanyInfo>
              <ImageBox>
                {item.image && item.image.length && <Image src={imgPath} />}
              </ImageBox>
              <CompanyDetails>
                <Heading>{item.company}</Heading>
                <Text size="large">{item.position}</Text>
                <Text size="sm">
                  {item.from} - {item.to}
                </Text>
              </CompanyDetails>
            </CompanyInfo>

            {item.description && (
              <Description>
                <Text size="large">{item.description}</Text>
              </Description>
            )}
          </ContentItem>
        );
      })}
    </SectionBox>
  );
};

export default Work;
