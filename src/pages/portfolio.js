import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import TabBar from '../components/tab-bar';
import ContactForm from '../components/contact-form';
import { CATEGORIES } from '../config/consts';

const Portfolio = () => {
  const [chosenCategory, setChosenCategory] = useState('all');
  const data = useStaticQuery(graphql`
    query {
      posts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 12) {
        edges {
          node {
            id
            frontmatter {
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
    <div className="relative flex-col content-center flex-shrink-0 overflow-hidden bg-white rounded border-brand-red-500 border h-48 flex justify-center items-center">
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
            <Img
              fluid={data?.heroImg?.childImageSharp?.fluid}
              className="w-96"
              alt="Gazduig Creative Agency Portfolio"
            />
          ) : null
        }
      />
      <div className="yellow-blob-bg" style={{ backgroundPosition: `-20% 70%` }}>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-extrabold">A te márkád is jól mutatna itt</h2>
          <div className="lg:-mx-16">
            <TabBar
              categories={CATEGORIES}
              chosenCategory={chosenCategory}
              setCategory={setChosenCategory}
              containerClass="mb-16"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                        className="relative flex-shrink-0 overflow-hidden bg-gray-600 rounded h-56 bg-cover bg-no-repeat"
                        style={{
                          background: `linear-gradient(0deg, rgba(227,32,116,1) 0%, rgba(227,32,116,0.5) 46%, rgba(227,32,116,0) 100%) bottom, url(${edge?.node?.frontmatter?.thumbnail?.publicURL}) no-repeat center`,
                        }}>
                        <div className="absolute bottom-0 left-0 px-5 py-3 text-sm text-white">
                          <p className="font-light">{edge?.node?.frontmatter?.jobtime}</p>
                          <p className="font-extrabold">{edge?.node?.frontmatter?.title}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-32">
          <div className="bg-white rounded shadow-brand py-8">
            <h2 className="font-extrabold font-display text-2xl max-w-screen-sm mb-10 lg:ml-10">
              Tetszettek a látottak? Töltsd ki a lenti formot, és alkossunk együtt valami ütőset!
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
