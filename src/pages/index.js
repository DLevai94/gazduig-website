import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import CalloutSection from '../components/callout-section';
import TabBar from '../components/tab-bar';
import Callout6 from '../components/svg/callout6.svg';
import Plant from '../images/plant.png';
import Typewriter from '../images/the-great-typewriter.png';
import Couch from '../images/couch.png';
import LogoTSystems from '../images/logos/tsystems.svg';
import LogoShoprenter from '../images/logos/shoprenter.svg';
import LogoPensum from '../images/logos/pensum.svg';
import LogoHD from '../images/logos/hdmarketing.png';
import LogoDoupla from '../images/logos/doupla.png';
import LogoDigital from '../images/logos/welove.svg';
import LogoGolden from '../images/logos/goldenbrothers.png';
import LogoAllyos from '../images/logos/allyos.svg';
import LogoEkata from '../images/logos/ekata.svg';
import LogoInsimu from '../images/logos/insimu.svg';
import LogoNetmetro from '../images/logos/netmetro.svg';
import LogoSzaboKandallo from '../images/logos/szabokandallo.svg';
import { CATEGORIES } from '../config/consts';

function IndexPage() {
  const [chosenCategory, setChosenCategory] = useState('all');
  const data = useStaticQuery(graphql`
    {
      posts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 6) {
        edges {
          node {
            id
            frontmatter {
              categories
              title
              slug
              jobtime
              thumbnail {
                publicURL
              }
            }
          }
        }
      }
      benceImg: file(relativePath: { eq: "bence-bw.png" }) {
        childImageSharp {
          fluid(maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const checkIndexAndApplyToContainer = (index) => {
    switch (index) {
      case 0:
        return { gridArea: '1 / 1 / 3 / 3' };
      case 5:
        return { gridArea: '2 / 3 / 4 / 5' };
      default:
        return null;
    }
  };

  const checkIndexAndApplyToCard = (index) => {
    switch (index) {
      case 0:
        return 'h-48 lg:h-full';
      case 5:
        return 'h-48 lg:h-full';
      default:
        return 'h-48';
    }
  };

  return (
    <Layout>
      <SEO
        title="Ütős megoldások"
        keywords={[
          'kreatív',
          'ügynökség',
          'budapesti kreatív ügynökség',
          'creative agency budapest',
          'arculattervezés',
          'márka',
          'ütős',
          'gazduig',
        ]}
      />
      <div className="hero">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-64 lg:px-8">
              <div className="sm:text-center lg:text-left">
                <h2 className="text-4xl font-display tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  Ütős megoldások, ütős márkák számára
                </h2>
                <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-light">
                  Szia! A Gazduig Creative Agency vagyunk Budapesről. Márkákat teszünk ismertebbé és feltűnőbbé, a
                  dizájn erejét használva.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <button className="primary-btn">Íme a részletek</button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <section className="container max-w-7xl mx-auto md:flex-row flex-col items-center justify-start pb-64">
          <CalloutSection />
          <section>
            <div className="container px-5 py-24 mx-auto">
              <div className="w-full mb-20">
                <h2 className="ml-16 text-2xl font-extrabold font-display">
                  Nézz meg a fentiekből pár sikeres projektet
                </h2>
                <br />
                <TabBar
                  categories={CATEGORIES}
                  chosenCategory={chosenCategory}
                  setCategory={setChosenCategory}
                  containerClass="mb-8"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-3 gap-8">
                {data?.posts?.edges
                  ?.filter(
                    (edge) => edge?.node?.frontmatter?.categories?.includes(chosenCategory) || chosenCategory === 'all'
                  )
                  ?.map((edge, index) => (
                    <Link
                      key={edge?.node?.id}
                      to={`portfolio/${edge?.node?.frontmatter?.slug}`}
                      style={checkIndexAndApplyToContainer(index)}>
                      <div
                        className={`relative flex-shrink-0 overflow-hidden bg-gray-600 rounded bg-cover bg-no-repeat ${checkIndexAndApplyToCard(
                          index
                        )}`}
                        style={{
                          background: `linear-gradient(0deg, rgba(227,32,116,1) 0%, rgba(227,32,116,0.5) 46%, rgba(227,32,116,0) 100%) bottom, url(${edge?.node?.frontmatter?.thumbnail?.publicURL}) no-repeat center`,
                        }}>
                        <div className="absolute bottom-0 left-0 px-5 py-3 text-white">
                          <p className="font-light">{edge?.node?.frontmatter?.jobtime}</p>
                          <p className="font-extrabold">{edge?.node?.frontmatter?.title}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </section>

          <div className="container mt-5 flex w-full">
            <div className="mx-auto">
              <Link to="/poortfolio">
                <button className="primary-btn">Megnézem a többit is</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div className="container px-5 py-24 mx-auto flex flex-wrap -mt-56">
          <div className="w-full mb-20">
            <h2 className="ml-16 text-2xl font-extrabold font-display">
              Hogy tetszettek a látottak?
              <br />
              Készítsünk valami ütőset neked is?
            </h2>
            <br />
            <div
              className="bg-white py-12 px-16 shadow-brand rounded flex flex-row justify-around items-center bg-right bg-no-repeat bg-contain"
              style={{ backgroundImage: `url(${Callout6})` }}>
              <div>
                <h3 className="font-extrabold mb-6 text-lg">
                  Írd meg, miben
                  <br /> segíthetünk!
                </h3>
                <button className="primary-btn">Kattints ide</button>
              </div>
              <div className="relative  bg-gray-900 py-3 pl-6 rounded flex flex-row justify-between items-center w-96">
                <div className="text-white">
                  <p className="font-extrabold mb-2">Vagy hívd fel Bencét!</p>
                  <p className="font-light text-sm mb-2">Gazdig Bence - CEO & Designer csávó</p>
                  <p className="font-extrabold text-sm">+36 30 270 5363</p>
                </div>
                <Img
                  fluid={data?.benceImg?.childImageSharp?.fluid}
                  alt="Gazdig Bence"
                  className="absolute bottom-0 right-5 h-32 w-32 z-50"
                  style={null}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto mb-32 px-4 sm:px-6 lg:px-8">
          <h2 className="heading">Néhány ügyfelünk, akik nem bánták meg, hogy velünk dolgoztak</h2>
          <div className="mx-16 grid grid-cols-2 gap-8 md:grid-cols-6">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={LogoTSystems} alt="T-Systems" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={LogoShoprenter} alt="Shoprenter" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={LogoPensum} alt="Pensum Group" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={LogoHD} alt="HD Marketing" />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={LogoDoupla} alt="Doupla" />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={LogoDigital} alt="We Love Digital" />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={LogoGolden} alt="Golden Brothers" />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={LogoAllyos} alt="Allyos" />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={LogoEkata} alt="Ekata" />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={LogoInsimu} alt="Insimu" />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={LogoNetmetro} alt="Netmetro" />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={LogoSzaboKandallo} alt="Szabo Kandallo" />
            </div>
          </div>
        </div>
      </section>
      <section
        className="max-w-screen-xl mx-auto mb-32 px-4 sm:px-6 lg:px-8 bg-no-repeat"
        style={{ backgroundImage: `url(${Plant})` }}>
        <h2 className="heading">Vélemények rólunk olyanoktól, akik nem a rokonaink</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div className="bg-white col-span-1 flex justify-center md:col-span-2 lg:col-span-1 flex-col rounded shadow-brand p-4">
            <p className="text-sm leading-tight mb-3">
              A profi és egységes megjelenés ugyanilyen minőségi portékát sejtet. Tüntesd fel magad jó színben.
            </p>
            <p className="font-extrabold text-sm leading-tight">
              Weinwurm Bence
              <br />
              Senior projektmenedzser, T-Systems
            </p>
          </div>
          <div className="bg-white col-span-1 flex justify-center md:col-span-2 lg:col-span-1 flex-col rounded shadow-brand p-4">
            <p className="text-sm leading-tight mb-3">
              A profi és egységes megjelenés ugyanilyen minőségi portékát sejtet. Tüntesd fel magad jó színben.
            </p>
            <p className="font-extrabold text-sm leading-tight">
              Weinwurm Bence
              <br />
              Senior projektmenedzser, T-Systems
            </p>
          </div>
          <div className="bg-white col-span-1 flex justify-center md:col-span-2 lg:col-span-1 flex-col rounded shadow-brand p-4">
            <p className="text-sm leading-tight mb-3">
              A profi és egységes megjelenés ugyanilyen minőségi portékát sejtet. Tüntesd fel magad jó színben.
            </p>
            <p className="font-extrabold text-sm leading-tight">
              Weinwurm Bence
              <br />
              Senior projektmenedzser, T-Systems
            </p>
          </div>
          <div className="bg-white col-span-1 flex justify-center md:col-span-2 lg:col-span-1 flex-col rounded shadow-brand p-4">
            <p className="text-sm leading-tight mb-3">
              A profi és egységes megjelenés ugyanilyen minőségi portékát sejtet. Tüntesd fel magad jó színben.
            </p>
            <p className="font-extrabold text-sm leading-tight">
              Weinwurm Bence
              <br />
              Senior projektmenedzser, T-Systems
            </p>
          </div>
          <div className="bg-white col-span-1 flex justify-center md:col-span-2 lg:col-span-1 flex-col rounded shadow-brand p-4">
            <p className="text-sm leading-tight mb-3">
              A profi és egységes megjelenés ugyanilyen minőségi portékát sejtet. Tüntesd fel magad jó színben.
            </p>
            <p className="font-extrabold text-sm leading-tight">
              Weinwurm Bence
              <br />
              Senior projektmenedzser, T-Systems
            </p>
          </div>
          <div className="bg-white col-span-1 flex justify-center md:col-span-2 lg:col-span-1 flex-col rounded shadow-brand p-4">
            <p className="text-sm leading-tight mb-3">
              A profi és egységes megjelenés ugyanilyen minőségi portékát sejtet. Tüntesd fel magad jó színben.
            </p>
            <p className="font-extrabold text-sm leading-tight">
              Weinwurm Bence
              <br />
              Senior projektmenedzser, T-Systems
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto mb-32 px-4 sm:px-6 lg:px-8">
          <h2 className="heading">
            Akár a rokonunk vagy, akár nem, a te soraidat is szívesen olvasnánk itt!
            <br />
            Viszont ehhez előbb együtt kell dolgoznunk! Mondd el, miben segíthetünk!
          </h2>
          <Link to="contact">
            <button className="primary-btn md:m-16">Kattints ide</button>
          </Link>
        </div>
      </section>
      <section className="z-50">
        <div className="max-w-screen-xl mx-auto mb-32 px-4 sm:px-6 lg:px-8 z-50">
          <h2 className="heading mb-4">
            Írtunk egy összefoglalót arról, milyen módszerrel szerezzük
            <br />
            az ügyfeleink 90%-át Instáról
          </h2>
          <p className="font-light text-lg ml-16 mb-16">Olvass bele, hátha találsz benne valami érdekeset!</p>
          <div className="bg-white rounded p-8 mx-8 shadow-brand flex z-50">
            <div className="max-w-1/2">
              <h3 className="font-display font-extrabold text-xl">Pötyögd be az e-mail címed, és már küldjük is!</h3>
              <label className="block mb-2 text-xs font-bold uppercase" htmlFor="email">
                Az e-mail címed
                <input className="w-full mb-6 form-input" id="email" placeholder="Az e-mail címed" type="email" />
              </label>
              <label className="block mb-2 text-xs font-bold uppercase" htmlFor="name">
                Hogy szólíthatunk?
                <input className="w-full mb-6 form-input" id="name" placeholder="Hogy szólíthatunk?" type="text" />
              </label>
              {/* <label className="block mb-2 text-xs" htmlFor="privacy">
                <input type="checkbox" className="form-input" name="privacy" />
                Elfogadom az adatvédelmi nyilatkozatot és engedélyezem, hogy a megadott elérhetőségeken felvegyétek
                velem a kapcsolatot.
              </label> */}
            </div>
            <div className="w-1/2 relative flex justify-end items-center">
              <img className="absolute" src={Typewriter} alt="Irogep" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="-mt-64 z-0 lg:p-96 bg-gray-200 flex items-center justify-between">
          <div className="max-w-1/2">
            <h2 className="heading mb-8">
              Á, az oldal alján vagy! Hadd mutatkozzunk
              <br />
              be, ha már legörgettél idáig!
            </h2>
            <Link to="/csapat">
              <button className="mx-16 primary-btn">Kattints ide</button>
            </Link>
          </div>
          <div className="w-1/2 relative flex justify-end items-center">
            <img className="absolute max-h-64" src={Couch} alt="Kanape" />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
