import React from "react";
import Layout from "@app-components/Layout";
import Skills from "@app-components/Skills";
import GoodAt from "@app-components/GoodAt";

import Companies from "@app-components/Companies";

export default () => {
  return (
    <Layout>
      <GoodAt />
      <Companies />
      <Skills />
    </Layout>
  );
};
