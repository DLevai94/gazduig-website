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
      title={title}
      titleTemplate={`%s - ${site?.siteMetadata?.title}`}>
      {/* <script
        key="ac_code"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function(e,t,o,n,p,r,i){e.visitorGlobalObjectAlias=n;e[e.visitorGlobalObjectAlias]=e[e.visitorGlobalObjectAlias]||function(){(e[e.visitorGlobalObjectAlias].q=e[e.visitorGlobalObjectAlias].q||[]).push(arguments)};e[e.visitorGlobalObjectAlias].l=(new Date).getTime();r=t.createElement("script");r.src=o;r.async=true;i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)})(window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");vgo('setAccount', '90522104');vgo('setTrackByDefault', true);vgo('process');`,
        }}
      /> */}
    </Helmet>
  );
}
export default SEO;
