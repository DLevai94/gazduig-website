import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
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
import Office from '../images/not-our-office.png';
import { SERVICES } from '../config/consts';

const Services = () => {
  const [chosenCategory, setChosenCategory] = useState('branding');
  const data = useStaticQuery(graphql`
    query {
      heroImg: file(relativePath: { eq: "services-einstein.png" }) {
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
        Ez a pár hatalmas előnyt érhetjük el számodra egy ütős és márkahű arculattal.`}>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon1 className="w-8 mb-2" />
              <p className="text-sm">Felmérjük az igényeidet, valamint megismerjük a márkád személyiségét</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon2 className="w-8 mb-2" />
              <p className="text-sm">Színeket, betűtípust, vizuális kommunikációs stílust választunk</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon3 className="w-8 mb-2" />
              <p className="text-sm">Logót tervezünk, ami a márkád hű arca lehet</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon4 className="w-8 mb-2" />
              <p className="text-sm">Arculathű posztdizájnokat, és más online reklámanyagokat készítünk</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon5 className="w-8 mb-2" />
              <p className="text-sm">Nyomdai anyagokat kreálunk, a lehető legnagyobb pontossággal</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon6 className="w-8 mb-2" />
              <p className="text-sm">Arculati kézikönyvet készítünk, hogy mindenki megértse a miérteket</p>
            </div>
          </SolutionCategory>
        );
      case 'web':
        return (
          <SolutionCategory
            name="Web, és appdizájn"
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
              <p className="text-sm">Felmérjük az igényeidet, valamint megismerjük a márkád személyiségét</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon16 className="w-8 mb-2" />
              <p className="text-sm">Megismerjük a márkád arculatát, és a különböző vizuális irányokat</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon15 className="w-8 mb-2" />
              <p className="text-sm">
                Meghatározzuk többek között a weboldal célját, célközönségét, és a problémát, amelyet megold
              </p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon14 className="w-8 mb-2" />
              <p className="text-sm">Közösen összegyűjtük/elkészítjük az oldalon megjelenő tartalmakat</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon13 className="w-8 mb-2" />
              <p className="text-sm">Minden képernyőnézetre passzoló, arculathű dizájnt készítünk</p>
            </div>
          </SolutionCategory>
        );
      case 'social':
        return (
          <SolutionCategory
            excerpt="Az ember vizuális lény. Ami külsőre tetszik neki, az már mélyen tudat alatt érdekelni kezdi. A dizájn
        erejével a legunalmasabb dolgot is izgalmassá lehet tenni. Az izgalmas pedig mindjárt érdekesebb,
        nemde?"
            fullName="Social anyagok dizájnolása közben általában ezeket csináljuk"
            description={`Lehet az ember profi abban, amit csinál, árulhat elképesztően jó minőségű terméket, és értékesíthet
        fantasztikus szolgáltatást is. Hogyha a márkája online megjelenése úgy néz ki, mint amit Paintben és
        Wordben dizájnoltak, egyszerűen gagyi hatást kelt.<br /><br />
        Az összeszedett, igényes és jól komponált posztdizájnok viszont hűen tükrözik a fent leírtakat, és a
        profizmust.`}>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon1 className="w-8 mb-2" />
              <p className="text-sm">Felmérjük az igényeidet, valamint megismerjük a márkád személyiségét</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon16 className="w-8 mb-2" />
              <p className="text-sm">Megismerjük a márkád arculatát, és a különböző vizuális irányokat</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon15 className="w-8 mb-2" />
              <p className="text-sm">
                Meghatározzuk többek között a kommunikáció célját, célközönségét, és a problémát, amelyet megold
              </p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon12 className="w-8 mb-2" />
              <p className="text-sm">Közösen összegyűjtük/elkészítjük a posztok tartalmakat</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon11 className="w-8 mb-2" />
              <p className="text-sm">Arculathű és ütős dizájnokat kreálunk</p>
            </div>
          </SolutionCategory>
        );
      case 'print':
        return (
          <SolutionCategory
            excerpt="Mikor olvastál el utoljára szórólapot? Na és plakátot, roll-upot, vagy bármi ronda céges brosúrát? Az
        offline anyagok ma épp azért számíthatnak különlegesnek, mert senki sem veszi őket komolyan. A
        tiéd lehet más."
            fullName="Print anyagok dizájnolása közben általában ezeket csináljuk"
            description={`Mivel az offline marketinganyagok elkészítése, terjesztése, hasznuk nyomon követése, és
        felhasználásuk egyszerűsége is elmarad az online-tól, így érthető módon a használatuk gyakorisága is
        jóval kisebb annál.<br /><br />
        A fentiek miatt a minőségük is sokszor igénytelen és elhanyagolt.<br /><br />
        A tiéd lehet a kivétel.`}>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon1 className="w-8 mb-2" />
              <p className="text-sm">Felmérjük az igényeidet, valamint megismerjük a márkád személyiségét</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon16 className="w-8 mb-2" />
              <p className="text-sm">Megismerjük a márkád arculatát, és a különböző vizuális irányokat</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon15 className="w-8 mb-2" />
              <p className="text-sm">
                Meghatározzuk többek között a kommunikáció célját, célközönségét, és a problémát, amelyet megold
              </p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon10 className="w-8 mb-2" />
              <p className="text-sm">Közösen összegyűjtük/elkészítjük az anyagok tartalmait</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon11 className="w-8 mb-2" />
              <p className="text-sm">Arculathű és ütős dizájnokat kreálunk</p>
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
              <p className="text-sm">Felmérjük az igényeidet, valamint megismerjük a márkád személyiségét</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon15 className="w-8 mb-2" />
              <p className="text-sm">
                Meghatározzuk többek között a kommunikáció célját, célközönségét, és a problémát, amelyet megold
              </p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon9 className="w-8 mb-2" />
              <p className="text-sm">Megismerjük a márkád nyelvezetét, és hanghordozását</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon8 className="w-8 mb-2" />
              <p className="text-sm">Ütős szövegeket írunk</p>
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
          Nem is mondunk többet, <a href="https://instagram.com/gazduig" rel="noreferrer">nézd meg az instánkat</a>, és vond le a következtetést.<br /><br />
          Hogyha azt tapasztalod, amit a tiéd láttán is el akarsz érni, lépjünk kapcsolatba, és lássunk hozzá!`}>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon1 className="w-8 mb-2" />
              <p className="text-sm">Felmérjük az igényeidet, valamint megismerjük a márkád személyiségét</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon16 className="w-8 mb-2" />
              <p className="text-sm">Megismerjük a márkád arculatát, és a különböző vizuális irányokat</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon15 className="w-8 mb-2" />
              <p className="text-sm">
                Meghatározzuk többek között a kommunikáció célját, célközönségét, és a problémát, amelyet megold
              </p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon12 className="w-8 mb-2" />
              <p className="text-sm">Közösen összegyűjtük/megtervezzük és elkészítjük a posztok tartalmait</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon11 className="w-8 mb-2" />
              <p className="text-sm">Arculathű és ütős dizájnokat kreálunk</p>
            </div>
            <div className="bg-white rounded shadow-brand p-3">
              <SolIcon7 className="w-8 mb-2" />
              <p className="text-sm">Menedzseljük, és építjük a márkád Insta oldalát</p>
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-16 h-64 bg-transparent flex justify-between">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pl-32">
          <h1 className="text-5xl font-display font-extrabold leading-brand mb-6">
            Felejtsd el az
            <br />
            unalmas ötleteket!
          </h1>
          <p className="text-light text-lg">
            Van, aki csak beszél róla.
            <br />
            Mi beszélünk róla, majd megcsináljuk.
            <br />
            Olyanra, amilyet elképzeltél.
          </p>
        </div>
        <div
          className="hidden md:block md:w-1/3 flex items-center justify-end md:pr-32"
          style={{ animation: 'float 4s ease-in-out infinite' }}>
          <Img
            fluid={data?.heroImg?.childImageSharp?.fluid}
            style={{ maxWidth: '26rem' }}
            className="-mt-25"
            alt="Gazduig Creative Agency Szolgáltatások"
          />
        </div>
      </div>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display leading-brand text-4xl font-extrabold mb-6 md:px-32">
          Találd meg, amire leginkább szükséged van!
        </h2>
        <div className="md:px-48 xl:-mx-16">
          <TabBar
            categories={SERVICES.slice(0, -1)}
            chosenCategory={chosenCategory}
            setCategory={setChosenCategory}
            containerClass="mb-16"
            textClass="lg:text-md"
          />
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">{renderContent(chosenCategory)}</section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-32 md:px-32">
          <h2 className="font-display text-4xl font-extrabold mb-32 leading-brand">
            Így néz ki az együttműködésünk folyamata
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 pr-10 text-xl mb-12">
              <ol>
                <li className="justify-start items-center">
                  <div className="flex">
                    <p className="text-3xl font-black">01</p>
                    <div className="w-10 border-b-4 border-black ml-4 mb-4"></div>
                  </div>
                  <p className="">Kapcsolatba lépünk egymással</p>
                </li>
                <li className="justify-start items-center">
                  <div className="flex">
                    <p className="text-3xl font-black">02</p>
                    <div className="w-10 border-b-4 border-black ml-4 mb-4"></div>
                  </div>
                  <p className="">Felmérjük az igényeidet</p>
                </li>
                <li className="justify-start items-center">
                  <div className="flex">
                    <p className="text-3xl font-black">03</p>
                    <div className="w-10 border-b-4 border-black ml-4 mb-4"></div>
                  </div>
                  <p className="">Azok alapján terveket készítünk</p>
                </li>
                <li className="justify-start items-center">
                  <div className="flex">
                    <p className="text-3xl font-black">04</p>
                    <div className="w-10 border-b-4 border-black ml-4 mb-4"></div>
                  </div>
                  <p className="">
                    Bemutatjuk, és ha kell módosítjuk, végtelenszer, felár nélkül, míg olyan nem lesz, amilyet
                    elképzeltél
                  </p>
                </li>
                <li className="justify-start items-center">
                  <div className="flex">
                    <p className="text-3xl font-black">05</p>
                    <div className="w-10 border-b-4 border-black ml-4 mb-4"></div>
                  </div>
                  <p>Átadjuk a kész anyagot</p>
                </li>
              </ol>
            </div>

            <div className="bg-no-repeat" style={{ backgroundImage: `url(${Office})` }}>
              <p className="font-black text-white text-lg px-16 relative top-1/2">
                Ja ez? Ez itt nem a mi irodánk. Viszont nagyon szeretnénk egy hasonlót.
                <br />
                Ehhez pedig a te projekted is sikerre kell vinnünk!
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-32 bg-gray-100">
        <section className="bg-white md:rounded md:shadow-brand py-8 px-8 md:px-36 z-50">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-display font-extrabold text-4xl leading-brand">
              Tetszettek a látottak?
              <br />
              Töltsd ki a lenti formot, és alkossunk együtt valami ütőset neked is!
            </h2>
          </div>
          <ContactForm />
        </section>
      </div>
      <section className="md:-mt-64 pt-36 md:pt-96 pb-36 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-left md:px-56 ml-8 sm:ml-0">
          <h2 className="font-display font-extrabold text-4xl leading-brand mb-8">
            Még nem vagy 100%-ig biztos a dologban?
            <br />
            No problem! Nézd meg pár korábbi munkánkat a témában, és dönts utána!
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
