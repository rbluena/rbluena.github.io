import React from "react";
import { Layout, Header, Footer, SEO } from "@app-components";

export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header showHero />
      <Footer />
    </Layout>
  );
};
