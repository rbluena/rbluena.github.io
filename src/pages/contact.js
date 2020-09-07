import React from "react";
import styled from "styled-components";
import {
  SEO,
  Header,
  Layout,
  Footer,
  Section,
  Main,
  Text,
  ContactMe,
  ContactInfo,
} from "@app-components";

const PageHeading = styled(Section)`
  text-align: center;
`;

export default () => {
  return (
    <Layout>
      <SEO
        title="Contact Me"
        description="Reach me out for available opportunity."
      />
      <Header />
      <Main>
        <PageHeading>
          <Text size="title">Contact Me</Text>
        </PageHeading>
        <ContactInfo />
        <ContactMe />
      </Main>
      <Footer />
    </Layout>
  );
};
