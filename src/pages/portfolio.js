import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import Hero from '../components/hero';
import TabBar from '../components/tab-bar';
import ContactForm from '../components/contact-form';
import { CATEGORIES } from '../config/consts';

const Portfolio = () => {
  const [chosenCategory, setChosenCategory] = useState('all');
  const data = useStaticQuery(graphql`
    query {
      posts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 24) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              jobtime
              categories
              gradient
              thumbnail
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
    <div className="relative flex-col content-center flex-shrink-0 overflow-hidden bg-white rounded border-brand-red-500 border h-56 flex justify-center items-center">
      <p className="font-extrabold text-center text-sm mb-4">
        Ezt a helyet neked
        <br />
        tartjuk fenn!
      </p>
      <Link to="/contact">
        <button className="primary-btn">Dolgozzunk együtt</button>
      </Link>
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
      <div className="portfolio-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-16 h-64 bg-transparent flex justify-between">
          <div className="w-full md:w-5/12 flex flex-col justify-center items-start">
            <h1 className="text-5xl font-display font-extrabold uppercase leading-brand mb-6">
              Csináljuk is, nem
              <br />
              csak beszélünk róla
            </h1>
            <p className="text-light text-lg">
              Mindig azon vagyunk, hogy újat, maradandót és persze ütőset alkossunk. Íme pár korábbi példa.
            </p>
          </div>
          <div
            className="hidden md:block md:w-5/12 flex items-center justify-end"
            style={{ animation: 'float 4s ease-in-out infinite' }}>
            <Img
              fluid={data?.heroImg?.childImageSharp?.fluid}
              className="w-96"
              alt="Gazduig Creative Agency Portfolio"
            />
          </div>
        </div>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-extrabold uppercase leading-brand">
            A te márkád is jól mutatna itt
          </h2>
          <div className="xl:-mx-16">
            <TabBar
              categories={CATEGORIES}
              chosenCategory={chosenCategory}
              setCategory={setChosenCategory}
              containerClass="mb-16"
              textClass="text-lg"
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
                          background: `${
                            edge?.node?.frontmatter?.gradient ||
                            'linear-gradient(16deg, rgba(38,38,38,1) 0%, rgba(91,91,91,1) 23%, rgba(38,38,38,0) 100%)'
                          } bottom, url(${edge?.node?.frontmatter?.thumbnail?.[0]}) no-repeat center`,
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 mg-gray-100">
          <section className="bg-white md:rounded md:shadow-brand py-8 px-8 md:px-36 z-50">
            <div className="mb-16 max-w-2xl">
              <h2 className="font-display font-extrabold text-2xl  uppercase leading-brand">
                Tetszettek a látottak? Töltsd ki a lenti
                <br />
                formot, és alkossunk együtt valami ütőset!
              </h2>
            </div>
            <ContactForm />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
