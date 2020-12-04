import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TabBar from '../components/tab-bar';
import ContactForm from '../components/contact-form';
import Arrow from '../images/arrow.svg';
import Pofo from '../images/pofo.svg';
import Chair from '../images/chair.png';
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
    }
  `);

  const renderCallout = () => (
    <div className="relative flex-col content-center flex-shrink-0 overflow-hidden bg-brand-blue-500 text-white h-80 flex justify-center items-center">
      <p className="font-extrabold text-center text-lg mb-4">
        Ezt a helyet
        <br />
        neked tartjuk fenn!
      </p>
      <Link to="/contact">
        <button className="secondary-btn">Dolgozzunk együtt</button>
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
      <div>
        <div className="container mx-auto px-4 md:px-32 my-16 h-64 bg-transparent flex justify-between">
          <div className="container w-full md:w-1/2 flex flex-col justify-center items-start">
            <h1 className="text-5xl font-display font-extrabold leading-brand mb-6">
              Csináljuk is, nemcsak beszélünk róla.
            </h1>
            <p className="md:w-2/3 text-light text-lg">
              Mindig azon vagyunk, hogy újat, maradandót és persze ütőset alkossunk.
              <br />
              Íme pár korábbi példa.
            </p>
          </div>
          <div className="hidden md:block relative">
            <img src={Pofo} className="w-80" />
            <img src={Chair} className="absolute top-0 left-0 animate-float w-96" />
          </div>
        </div>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:px-24">
            <h2 className="font-display text-2xl font-extrabold uppercase leading-brand">
              A te márkád is jól mutatna itt
            </h2>

            <TabBar
              categories={CATEGORIES}
              chosenCategory={chosenCategory}
              setCategory={setChosenCategory}
              containerClass="mb-16"
              textClass="text-lg"
            />
          </div>
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
                    <div>
                      <div className="relative flex-shrink-0 overflow-hidden bg-white h-80 bg-cover bg-no-repeat group">
                        <img
                          src={edge?.node?.frontmatter?.thumbnail}
                          alt={edge?.node?.frontmatter?.title}
                          className="transform duration-400 transition group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 py-3 max-w-xs">
                          <p className="font-light truncate text-sm group-hover:text-brand-blue-500">
                            {edge?.node?.frontmatter?.jobtime}
                          </p>
                          <p className="font-extrabold truncate text-lg group-hover:text-brand-blue-500">
                            {edge?.node?.frontmatter?.title}
                          </p>
                          <img src={Arrow} />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <section className="bg-gray-100 py-20 sm:px-8 md:px-36 z-50">
            <div className="mb-16 xl:ml-16 sm:max-w-2xl">
              <h2 className="font-display font-extrabold text-4xl leading-none">
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
