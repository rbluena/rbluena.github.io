import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Text } from "@app-components";
import SectionBox from "@app-components/molecules/SectionBox";
import Button from "@app-components/atoms/Button";
import { data } from "@app-data/education.json";

const ContentItem = styled.div`
  flex-basis: 40%;
  margin: ${props => props.theme.spacing.large}px 0px;
  color: ${props => props.theme.color.blue[100]};
`;
const Description = styled.div``;

const Work = () => {
  return (
    <SectionBox title="Education" reverse>
      {Object.keys(data).map(key => {
        const item = data[key];

        return (
          <ContentItem key={key}>
            <Text size="heading">{item.name}</Text>
            <Text subheading="large" weight="thin">
              {item.year}
            </Text>
            <Description>{item.description}</Description>

            {data.url && (
              <Button href="" type={data.url}>
                Visit
              </Button>
            )}
          </ContentItem>
        );
      })}
    </SectionBox>
  );
};

Work.defaultProps = {
  button: null,
};

Work.propTypes = {
  button: PropTypes.node,
};

export default Work;
