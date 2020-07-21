import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import TabBar from '../components/tab-bar';
import { SERVICES } from '../config/consts';

const Services = () => {
  const [chosenCategory, setChosenCategory] = useState('branding');
  const data = useStaticQuery(graphql`
    query {
      heroImg: file(relativePath: { eq: "einstein.png" }) {
        childImageSharp {
          fluid(maxHeight: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const renderBrandingContent = () => (
    <div className="w-3/4">
      <p>
        A márka olyan, mint az ember. Gondolj rá így. Könnyebben észreveszed azt, aki vagy nagyon vonzó, vagy épp az
        ellentéte. A logó a márka arca, de a többi részére is időt kell fordítani, hogy egységes és elragadó legyen. A
        tiéd milyen?
      </p>
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
        title="Ebben segítünk"
      />
      <Hero
        title="Felejtsd el az unalmas ötleteket!"
        subtitle="Van, aki csak beszél róla. Mi beszélünk róla, majd megcsináljuk. Olyanra, amilyet elképzeltél."
        icon={
          data?.heroImg?.childImageSharp?.fluid ? (
            <Img
              fluid={data?.heroImg?.childImageSharp?.fluid}
              className="w-96"
              alt="Gazduig Creative Agency Szolgáltatások"
            />
          ) : null
        }
      />
      <section className="container mx-auto">
        <h2 className="font-display text-2xl font-extrabold">Találd meg, amire leginkább szükséged van!</h2>
        <div className="-mx-16">
          <TabBar
            categories={SERVICES}
            chosenCategory={chosenCategory}
            setCategory={setChosenCategory}
            containerClass="mb-8 text-xl"
          />
        </div>
      </section>
      <section className="container mx-auto mt-12">{renderBrandingContent()}</section>
    </Layout>
  );
};

export default Services;
