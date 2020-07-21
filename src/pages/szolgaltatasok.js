import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import TabBar from '../components/tab-bar';
import SolIcon1 from '../components/svg/solutions1';
import SolIcon2 from '../components/svg/solutions2';
import SolIcon3 from '../components/svg/solutions3';
import SolIcon4 from '../components/svg/solutions4';
import SolIcon5 from '../components/svg/solutions5';
import SolIcon6 from '../components/svg/solutions6';
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
    <div className="w-3/4 leading-snug">
      <p className="font-light text-lg mb-12">
        A márka olyan, mint az ember. Gondolj rá így. Könnyebben észreveszed azt, aki vagy nagyon vonzó, vagy épp az
        ellentéte. A logó a márka arca, de a többi részére is időt kell fordítani, hogy egységes és elragadó legyen. A
        tiéd milyen?
      </p>
      <h2 className="font-display text-lg font-extrabold">Így hajthat hasznot számodra:</h2>
      <p className="font-light text-lg mb-16">
        Fent azt írjuk, a márka olyan, mint az ember. Személyisége és megjelenése van. Utóbbi az előbbitől függ, és
        akkor működnek jól, ha harmonizálnak egymással.
        <br />
        <br />
        Hogyha a megjelenés képviseli azt, amit a márka személyisége jelent, hiteles, megbízható, és érdekes lesz.
        <br />
        <br />
        Ezt a pár hatalmas előnyt érhetjük el számodra egy ütős és márkahű arculattal.
      </p>
      <h2 className="font-display text-lg font-extrabold">Arculat tervezés közben általában ezeket csináljuk</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 col-gap-6 row-gap-3 mt-8 mb-16">
        <div className="bg-white rounded shadow-brand p-3">
          <SolIcon1 className="w-8 mb-2" />
          <p className="font-extrabold text-sm">Felmérjük az igényeidet, valamint megismerjük a márkád személyiségét</p>
        </div>
        <div className="bg-white rounded shadow-brand p-3">
          <SolIcon2 className="w-8 mb-2" />
          <p className="font-extrabold text-sm">Színeket, betűtípust, vizuális kommunikációs stílust választunk</p>
        </div>
        <div className="bg-white rounded shadow-brand p-3">
          <SolIcon3 className="w-8 mb-2" />
          <p className="font-extrabold text-sm">Logót tervezünk, ami a márkád hű arca lehet</p>
        </div>
        <div className="bg-white rounded shadow-brand p-3">
          <SolIcon4 className="w-8 mb-2" />
          <p className="font-extrabold text-sm">Arculathű posztdizájnokat, és más online reklámanyagokat készítünk</p>
        </div>
        <div className="bg-white rounded shadow-brand p-3">
          <SolIcon5 className="w-8 mb-2" />
          <p className="font-extrabold text-sm">Nyomdai anyagokat kreálunk, a lehető legnagyobb pontossággal</p>
        </div>
        <div className="bg-white rounded shadow-brand p-3">
          <SolIcon6 className="w-8 mb-2" />
          <p className="font-extrabold text-sm">Arculati kézikönyvet készítünk, hogy mindenki megértse a miérteket</p>
        </div>
      </div>
      <h2 className="font-display text-lg font-extrabold">Így néz ki az együttműködésünk folyamata</h2>
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
              className="w-80"
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
