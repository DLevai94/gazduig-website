import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

function SEO({ description, lang = 'hu', meta = [], keywords = [], title = '' }) {
  const { site, ogImageDefault } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
          url
        }
      }
      ogImageDefault: file(relativePath: { eq: "OG-image.jpg" }) {
        childImageSharp {
          fixed(height: 630, width: 1200) {
            src
          }
        }
      }
    }
  `);
  const ogImage = `${site?.siteMetadata?.url}/${ogImageDefault?.childImageSharp?.fixed?.src}`;

  const metaDescription = description || site?.siteMetadata?.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: `description`,
          content: metaDescription,
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
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          property: `twitter:image`,
          content: ogImage,
        },
        {
          property: `image`,
          content: ogImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site?.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
      titleTemplate={`%s - ${site?.siteMetadata?.title}`}
    />
  );
}
export default SEO;
