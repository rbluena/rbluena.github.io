import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ title, description, lang, newMeta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
            image
            keywords
          }
        }
      }
    `
  );

  const { siteMetadata: metaData } = site;

  const metaTitle = title || metaData.title;
  const metaDescription = description || metaData.description;
  const image = metaData.image;

  const meta = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      name: `image`,
      content: image,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:image`,
      content: image,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
    {
      name: `twitter:image`,
      content: image,
    },
  ].concat(newMeta || []);

  return (
    <Helmet title={metaTitle} titleTemplate={`${metaData.title} | %s`}>
      <html lang={lang} amp />
      <title>{metaTitle}</title>
      <link rel="icon" href={image} type="image/png" sizes="48x48"></link>

      {meta &&
        meta.length &&
        meta.map((item, idx) => {
          const key = `${idx}_${item.name}`;

          if (item.name) {
            return <meta key={key} name={item.name} content={item.content} />;
          }

          return (
            <meta key={key} property={item.property} content={item.content} />
          );
        })}
      <meta name="keywords" content={metaData.keywords} />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: undefined,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
