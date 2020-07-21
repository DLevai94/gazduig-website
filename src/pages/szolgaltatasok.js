import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
// import Office from '../images/office.png';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import TabBar from '../components/tab-bar';
import ContactForm from '../components/contact-form';
import SolutionCategory from '../components/solution-category';
import SolIcon1 from '../components/svg/solutions1';
import SolIcon2 from '../components/svg/solutions2';
import SolIcon3 from '../components/svg/solutions3';
import SolIcon4 from '../components/svg/solutions4';
import SolIcon5 from '../components/svg/solutions5';
import SolIcon6 from '../components/svg/solutions6';
import SolIcon7 from '../components/svg/solutions7';
import SolIcon8 from '../components/svg/solutions8';
import SolIcon9 from '../components/svg/solutions9';
import SolIcon10 from '../components/svg/solutions10';
import SolIcon11 from '../components/svg/solutions11';
import SolIcon12 from '../components/svg/solutions12';
import SolIcon13 from '../components/svg/solutions13';
import SolIcon14 from '../components/svg/solutions14';
import SolIcon15 from '../components/svg/solutions15';
import SolIcon16 from '../components/svg/solutions16';
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

  const renderContent = (category) => {
    switch (category) {
      case 'branding':
        return (
          <SolutionCategory
            name="Arculattervezés"
            excerpt="A márka olyan, mint az ember. Gondolj rá így. Könnyebben észreveszed azt, aki vagy nagyon vonzó, vagy épp az
        ellentéte. A logó a márka arca, de a többi részére is időt kell fordítani, hogy egységes és elragadó legyen. A
        tiéd milyen?"
            description={`Fent azt írjuk, a márka olyan, mint az ember. Személyisége és megjelenése van. Utóbbi az előbbitől függ, és
        akkor működnek jól, ha harmonizálnak egymással.
        <br />
        <br />
        Hogyha a megjelenés képviseli azt, amit a márka személyisége jelent, hiteles, megbízható, és érdekes lesz.
        <br />
        <br />
        Ezt a pár hatalmas előnyt érhetjük el számodra egy ütős és márkahű arculattal.`}>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon1 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">
                Felmérjük az igényeidet, valamint megismerjük a márkád személyiségét
              </p>
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
              <p className="font-extrabold text-sm">
                Arculathű posztdizájnokat, és más online reklámanyagokat készítünk
              </p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon5 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">Nyomdai anyagokat kreálunk, a lehető legnagyobb pontossággal</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon6 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">
                Arculati kézikönyvet készítünk, hogy mindenki megértse a miérteket
              </p>
            </div>
          </SolutionCategory>
        );
      case 'web':
        return (
          <SolutionCategory
            name="Web-, és appdizájn"
            excerpt="Mindenki elsőre ítél. Hogyha a kezdés rossz, nehéz megváltoztatni a véleményt. A weboldal pedig
        épp az a hely, ahol a legtöbb márka jó, vagy épp szörnyű első benyomást tehet. A tiéd milyen érzést
        kelt?"
            description={`A tervezés nélküli weboldal nem több egyszerű dísznél. Megvan a maga pszichológiája annak is, hogy
        egy gomb hol szerepel, és annak is, milyen tartalmak és hogy jelennek meg az látogatók számára.<br /><br />
        Hogyha az oldal legapróbb részletei is gondosan vannak megtervezve, és erre egy igényes, márkahű
        dizájn van felhúzva, az olyan remek felhasználói élményt nyújt, ami az első pillanattól kezdve a
        megfelelő irányba tereli az oldal látogatóit.`}>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon1 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">
                Felmérjük az igényeidet, valamint megismerjük a márkád személyiségét
              </p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon16 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">
                Megismerjük a márkád arculatát, és a különböző vizuális irányokat
              </p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon15 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">
                Meghatározzuk többek között a weboldal célját, célközönségét, és a problémát, amelyet megold
              </p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon14 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">
                Közösen összegyűjtük/elkészítjük az oldalon megjelenő tartalmakat
              </p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon13 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">Minden képernyőnézetre passzoló, arculathű dizájnt készítünk</p>
            </div>
          </SolutionCategory>
        );
      case 'social':
        return (
          <SolutionCategory
            name="Social posztok dizánja"
            excerpt="Az ember vizuális lény. Ami külsőre tetszik neki, az már mélyen tudat alatt érdekelni kezdi. A dizájn
        erejével a legunalmasabb dolgot is izgalmassá lehet tenni. Az izgalmas pedig mindjárt érdekesebb,
        nemde?"
            description={`Lehet az ember profi abban, amit csinál, árulhat elképesztően jó minőségű terméket, és értékesíthet
        fantasztikus szolgáltatást is. Hogyha a márkája online megjelenése úgy néz ki, mint amit Paintben és
        Wordben dizájnoltak, egyszerűen gagyi hatást kelt.<br /><br />
        Az összeszedett, igényes és jól komponált posztdizájnok viszont hűen tükrözik a fent leírtakat, és a
        profizmust.`}>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon1 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">
                Felmérjük az igényeidet, valamint megismerjük a márkád személyiségét
              </p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon16 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">
                Megismerjük a márkád arculatát, és a különböző vizuális irányokat
              </p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon15 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">
                Meghatározzuk többek között a kommunikáció célját, célközönségét, és a problémát, amelyet megold
              </p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon12 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">Közösen összegyűjtük/elkészítjük a posztok tartalmakat</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon11 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">Arculathű és ütős dizájnokat kreálunk</p>
            </div>
          </SolutionCategory>
        );
      case 'print':
        return (
          <SolutionCategory
            name="Print anyagok dizánja"
            excerpt="Mikor olvastál el utoljára szórólapot? Na és plakátot, roll-upot, vagy bármi ronda céges brosúrát? Az
        offline anyagok ma épp azért számíthatnak különlegesnek, mert senki sem veszi őket komolyan. A
        tiéd lehet más."
            description={`Mivel az offline marketinganyagok elkészítése, terjesztése, hasznuk nyomon követése, és
        felhasználásuk egyszerűsége is elmarad az online-tól, így érthető módon a használatuk gyakorisága is
        jóval kisebb annál.<br /><br />
        A fentiek miatt a minőségük is sokszor igénytelen és elhanyagolt.<br /><br />
        A tiéd lehet a kivétel.`}>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon1 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">
                Felmérjük az igényeidet, valamint megismerjük a márkád személyiségét
              </p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon16 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">
                Megismerjük a márkád arculatát, és a különböző vizuális irányokat
              </p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon15 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">
                Meghatározzuk többek között a kommunikáció célját, célközönségét, és a problémát, amelyet megold
              </p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon10 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">Közösen összegyűjtük/elkészítjük az anyagok tartalmakat</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon11 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">Arculathű és ütős dizájnokat kreálunk</p>
            </div>
          </SolutionCategory>
        );
      case 'copy':
        return (
          <SolutionCategory
            name="Szövegírás"
            excerpt="A dizájn kelti fel a figyelmet, viszont a jó szöveg tartja azt meg, és juttatja célba az üzenetet. A
        szövegírás tipikusan az a rész, amit mindenki el tud végezni, de csak kevesen értenek hozzá."
            description={`Legyen szó a weboldaladról, offline, vagy online reklámanyagaidról, e-mail hírleveleidről, vagy csak
        egy egyszerű posztról, egyáltalán nem mindegy, milyen szavakból és mondatokból épül fel az azt
        alkotó szöveg.<br /><br />
        Ha egyértelmű az szöveg üzenete és lényege, valamint a célközönség nyelvén íródott, sokkal nagyobb
        eséllyel érheti el a célját.`}>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon1 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">
                Felmérjük az igényeidet, valamint megismerjük a márkád személyiségét
              </p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon15 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">
                Meghatározzuk többek között a kommunikáció célját, célközönségét, és a problémát, amelyet megold
              </p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon9 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">Megismerjük a márkád nyelvezetét, és hanghordozását</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon8 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">Ütős szövegeket írunk</p>
            </div>
          </SolutionCategory>
        );
      case 'ig-branding':
        return (
          <SolutionCategory
            name="Insta márkaépítés"
            excerpt="A megszerzett bizalom olyan előny, ami talán semmi mással nem pótolható. A márkaépítés pedig
          bizalmat épít. Mi Instagramon építünk márkát, és szerezzük onnan az ügyfeleink 90%-át. Miért ne
          tegyük ezt a te márkáddal is?"
            description={`A tartalommarketing hatalmas fegyver, hiszen a folyamatos, érdekes és ütős tartalmak bevonzzák,
          megtartják, követőkké, majd vásárlókká alakítják az embereket.<br /><br />
          Nem is mondunk többet, nézd meg az instánkat, és vond le a következtetést.<br /><br />
          Hogyha azt tapasztalod, amit a tiéd láttán is el akarsz érni, lépjünk kapcsolatba, és lássunk hozzá!`}>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon1 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">
                Felmérjük az igényeidet, valamint megismerjük a márkád személyiségét
              </p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon16 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">
                Megismerjük a márkád arculatát, és a különböző vizuális irányokat
              </p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon15 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">
                Meghatározzuk többek között a kommunikáció célját, célközönségét, és a problémát, amelyet megold
              </p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon12 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">
                Közösen összegyűjtük/megtervezzük és elkészítjük a posztok tartalmakat
              </p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon11 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">Arculathű és ütős dizájnokat kreálunk</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon7 className="w-8 mb-2" />
              <p className="font-extrabold text-sm">Menedzseljük, és építjük a márkád Insta oldalát</p>
            </div>
          </SolutionCategory>
        );
      default:
        return null;
    }
  };

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
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-extrabold">Találd meg, amire leginkább szükséged van!</h2>
        <div className="xl:-mx-16">
          <TabBar
            categories={SERVICES}
            chosenCategory={chosenCategory}
            setCategory={setChosenCategory}
            containerClass="mb-8 inline-block"
            textClass="text-lg"
          />
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">{renderContent(chosenCategory)}</section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* <img src={Office} className="absolute z-0" /> */}
        <div className="mb-32">
          <h2 className="font-display text-2xl font-extrabold mb-8">Így néz ki az együttműködésünk folyamata</h2>
          <ul className="text-lg font-light timeline">
            <li className="timeline-circle">Kapcsolatba lépünk egymással</li>
            <li className="timeline-circle-2">Felmérjük az igényeidet</li>
            <li className="timeline-circle-3">Azok alapján terveket készítünk</li>
            <li className="timeline-circle-4">
              Bemutatjuk, és ha kell módosítjuk, végtelenszer, felár nélkül, míg olyan nem lesz, amilyet elképzeltél
            </li>
            <li className="timeline-circle-5">Átadjuk a kész anyagot</li>
          </ul>
        </div>
        <div className="-mt-16 rounded bg-gray-900 text-white text-2xl font-display font-extrabold inline-block px-8 py-4 pr-48 mb-8">
          <p>
            Ez itt nem a mi irodánk. Viszont nagyon
            <br />
            szeretnénk egy hasonlót. Ehhez pedig a te
            <br />
            projekted is tökéletesen kell elkészítenünk!
          </p>
        </div>
      </section>
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
