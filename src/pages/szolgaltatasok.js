import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import TabBar from '../components/tab-bar';
import ContactForm from '../components/contact-form';
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
      <div className="mb-32">
        <h2 className="font-display text-xl font-extrabold">Így néz ki az együttműködésünk folyamata</h2>
        <ul>
          <li>Kapcsolatba lépünk egymással</li>
          <li>Felmérjük az igényeidet</li>
          <li>Azok alapján terveket készítünk</li>
          <li>
            Bemutatjuk, és ha kell módosítjuk, végtelenszer, felár nélkül, míg olyan nem lesz, amilyet elképzeltél
          </li>
          <li>Átadjuk a kész anyagot</li>
        </ul>
      </div>
      <div className="-mt-16 rounded bg-gray-900 text-white text-2xl font-display font-extrabold inline-block px-8 py-4 pr-20 mb-8">
        <p>
          Ez itt nem a mi irodánk. Viszont nagyon
          <br />
          szeretnénk egy hasonlót. Ehhez pedig a te
          <br />
          projekted is tökéletesen kell elkészítenünk!
        </p>
      </div>
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-32">
        <section className="bg-white md:rounded md:shadow-brand py-8 px-8 md:px-36 z-50">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-display font-extrabold text-2xl leading-tight">
              Tetszettek a látottak? Töltsd ki a lenti formot, és alkossunk együtt valami ütőset!
            </h2>
          </div>
          <ContactForm />
        </section>
      </div>
      <section className="md:-mt-64 pt-36 md:pt-96 pb-36">
        <div className="container mx-auto text-center md:text-left sm:px-6 lg:px-48">
          <h2 className="font-display font-extrabold text-2xl leading-tight mb-6">
            Még nem vagy 100%-ig biztos a dologban?
            <br />
            Nézz meg pár hasonlót is!
          </h2>
          <Link to="/portfolio">
            <button className="primary-btn">Irány a portfólió</button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
