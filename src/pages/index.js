import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";

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
      <h2>Home Page</h2>
    </Layout>
  );
};
