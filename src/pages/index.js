import React from "react";
import {
  Layout,
  Header,
  Footer,
  Main,
  SEO,
  Work,
  Skills,
  Tags,
} from "@app-components";

export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header showHero />
      <Main>
        <Tags />
        <Skills />
        <Work />
      </Main>
      <Footer />
    </Layout>
  );
};
