import React from "react";
import { Helmet } from "react-helmet";
import { Layout, Main, Section, Header, Text } from "@app-components";
import { Footer } from "@app-components";
import styled from "styled-components";

const Heading = styled(Text).attrs({ size: "title" })`
  margin-top: ${props => props.theme.spacing["4xl"]}px;
  margin-bottom: ${props => props.theme.spacing["large"]}px;
`;

const NotFoundPage = () => (
  <Layout>
    <Helmet title="Not Found!" />
    <Header />
    <Main>
      <Section>
        <Heading>NOT FOUND!</Heading>
        <Text size="xl">You just hit a route that doesn&#39;t exist.</Text>
      </Section>
    </Main>
    <Footer />
  </Layout>
);

export default NotFoundPage;
