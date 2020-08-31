import React from "react";
import { Layout, Main, Section, Header, Text, SEO } from "@app-components";
import { Footer } from "@app-components";
import styled from "styled-components";

const Heading = styled(Text).attrs({ size: "title" })`
  margin-top: ${props => props.theme.spacing["4xl"]}px;
  margin-bottom: ${props => props.theme.spacing["large"]}px;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not found" />
    <Header />
    <Main>
      <Section>
        <Heading>NOT FOUND</Heading>
        <Text size="xl">You just hit a route that doesn&#39;t exist.</Text>
      </Section>
    </Main>
    <Footer />
  </Layout>
);

export default NotFoundPage;
