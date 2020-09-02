import React from "react";
import styled from "styled-components";
import {
  SEO,
  Header,
  Layout,
  Footer,
  Main,
  Section,
  Text,
  Project,
} from "@app-components";
import { data } from "@app-data/projects.json";

const PageHeading = styled(Section)`
  text-align: center;
`;

const Projects = styled.div``;

export default () => {
  return (
    <Layout>
      <SEO
        title="Projects"
        description="List of projects I have done or work in progress."
      />
      <Header />
      <Main>
        <PageHeading>
          <Text size="title">Projects</Text>
          <Text size="heading">
            “A man may fall many times, but he won’t be a failure until he says
            that someone pushed him.” -
            <b>
              <small>Elemer Litterman</small>
            </b>
          </Text>
        </PageHeading>

        <Projects>
          {Object.keys(data).map((key, id) => {
            const isEven = (id + 1) % 2 === 0;
            const project = data[key];

            return <Project key={key} project={project} reverse={isEven} />;
          })}
        </Projects>
      </Main>
      <Footer />
    </Layout>
  );
};
