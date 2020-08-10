import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Header from "@app-components/Header";
import Layout from "@app-components/Layout";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  console.log(data);

  return (
    <Layout>
      <Header />
      <h2>Home Page</h2>
    </Layout>
  );
};
