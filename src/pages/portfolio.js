import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PostLink from '../components/post-link';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      posts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
              jobtime
              categories
            }
          }
        }
      }
      heroImg: file(relativePath: { eq: "pizza.png" }) {
        childImageSharp {
          fluid(maxHeight: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  console.log(data);
  const posts = data?.posts?.allMarkdownRemark?.edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <SEO
        keywords={[`marketing tippek`, `instagram marketing`, `instagram tippek`, `ügyfélszerzés instagrammon`]}
        title="Instagram Marketing Tippek"
      />
      <Hero
        title=""
        subtitle="Mindig azon vagyunk, hogy újat, maradandót és persze ütőset alkossunk. Íme pár korábbi példa."
        icon={
          data?.heroImg?.file?.childImageSharp?.fluid ? (
            <Img fluid={data?.heroImg?.file?.childImageSharp?.fluid} className="w-1/2" />
          ) : null
        }
      />
      {posts}
    </Layout>
  );
};

export default Portfolio;
