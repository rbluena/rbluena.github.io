import React from "react";
import {
  Layout,
  Header,
  Footer,
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
      <Tags />
      <Skills />
      <Work />
      <Footer />
    </Layout>
  );
};
