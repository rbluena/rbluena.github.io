import React from "react";
import Layout from "@app-components/Layout";
import Skills from "@app-components/Skills";
import GoodAt from "@app-components/GoodAt";
import Projects from "@app-components/Projects";

export default () => {
  return (
    <Layout>
      <GoodAt />
      <Skills />
      <Projects />
    </Layout>
  );
};
