import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import TabBar from '../components/tab-bar';
import { CATEGORIES } from '../config/consts';

const Portfolio = () => {
  const [chosenCategory, setChosenCategory] = useState('all');
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
              thumbnail {
                publicURL
              }
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

  const renderCallout = () => (
    <div className="relative flex-col content-center flex-shrink-0 overflow-hidden bg-white rounded border-brand-red-500 border h-40 w-64 flex justify-center items-center">
      <p className="font-extrabold text-center text-sm">Ezt a helyet neked tartjuk fenn!</p>
      <button className="primary-btn">Dolgozzunk együtt</button>
    </div>
  );

  return (
    <Layout>
      <SEO
        keywords={[
          'arculattervezés budapest',
          'arculattervezés',
          'webdizájn budapest',
          'webdizájn',
          'kreatív ügynökség budapest',
          'budapest creative agency',
          'instagram márkaépítés',
          'insta márkaépítés',
          'ütős',
          'gazduig',
        ]}
        title="Ezeket csináltunk eddig"
      />
      <Hero
        title="A tetteink többet érnek a szavainknál"
        subtitle="Mindig azon vagyunk, hogy újat, maradandót és persze ütőset alkossunk. Íme pár korábbi példa."
        icon={
          data?.heroImg?.childImageSharp?.fluid ? (
            <Img fluid={data?.heroImg?.childImageSharp?.fluid} className="w-96" />
          ) : null
        }
      />
      <section className="container mx-auto">
        <TabBar categories={CATEGORIES} chosenCategory={chosenCategory} setCategory={setChosenCategory} />
        <div className="grid grid-cols-4">
          {data?.posts?.edges
            ?.filter(
              (edge) => edge?.node?.frontmatter?.categories?.includes(chosenCategory) || chosenCategory === 'all'
            )
            ?.map((edge, index) => {
              if (index === 5) {
                return renderCallout();
              }
              return (
                <Link key={edge?.node?.id} to={`${edge?.node?.frontmatter?.slug}`}>
                  <div
                    className="relative flex-shrink-0 overflow-hidden bg-gray-600 rounded h-40 w-64 bg-cover bg-no-repeat"
                    style={{
                      background: `linear-gradient(0deg, rgba(227,32,116,1) 0%, rgba(227,32,116,0.5) 46%, rgba(227,32,116,0) 100%) bottom, url(${edge?.node?.frontmatter?.thumbnail?.publicURL}) no-repeat center `,
                    }}></div>
                  {edge?.node?.frontmatter?.title}
                </Link>
              );
            })}
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
