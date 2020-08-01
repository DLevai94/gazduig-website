import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
// import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import CalloutSection from '../components/callout-section';
import TabBar from '../components/tab-bar';
import CTABlob from '../images/cta-blob.svg';
// import Plant from '../images/plant.png';
import Typewriter from '../images/the-great-typewriter.png';
import Couch from '../images/couch.png';
import LogoTSystems from '../images/logos/tsystems.svg';
import LogoShoprenter from '../images/logos/shoprenter.svg';
import LogoPensum from '../images/logos/pensum.svg';
import LogoHD from '../images/logos/hdmarketing.png';
// import LogoDoupla from '../images/logos/doupla.png';
import LogoDigital from '../images/logos/welove.svg';
import LogoGolden from '../images/logos/goldenbrothers.png';
import LogoAllyos from '../images/logos/allyos.svg';
import LogoEkata from '../images/logos/ekata.svg';
import LogoInsimu from '../images/logos/insimu.svg';
// import LogoNetmetro from '../images/logos/netmetro.svg';
import LogoSzaboKandallo from '../images/logos/szabokandallo.svg';
import BenceImg from '../images/bence-bw.png';
// import Cloud1 from '../images/cloud1.svg';
// import Cloud2 from '../images/cloud2.svg';
// import Cloud3 from '../images/cloud3.svg';
import { CATEGORIES } from '../config/consts';

function IndexPage() {
  const [chosenCategory, setChosenCategory] = useState('all');
  const [hasPrivacyAccepted, setHasPrivacyAccepted] = useState(false);
  const data = useStaticQuery(graphql`
    {
      allPosts: allMarkdownRemark(limit: 6) {
        edges {
          node {
            id
            frontmatter {
              categories
              title
              slug
              jobtime
              gradient
              thumbnail
            }
          }
        }
      }
      webPosts: allMarkdownRemark(limit: 6, filter: { frontmatter: { categories: { eq: "web" } } }) {
        edges {
          node {
            id
            frontmatter {
              categories
              title
              slug
              jobtime
              gradient
              thumbnail
            }
          }
        }
      }
      brandingPosts: allMarkdownRemark(limit: 6, filter: { frontmatter: { categories: { eq: "branding" } } }) {
        edges {
          node {
            id
            frontmatter {
              categories
              title
              slug
              jobtime
              gradient
              thumbnail
            }
          }
        }
      }
      socialPosts: allMarkdownRemark(limit: 6, filter: { frontmatter: { categories: { eq: "social" } } }) {
        edges {
          node {
            id
            frontmatter {
              categories
              title
              slug
              jobtime
              gradient
              thumbnail
            }
          }
        }
      }
      printPosts: allMarkdownRemark(limit: 6, filter: { frontmatter: { categories: { eq: "print" } } }) {
        edges {
          node {
            id
            frontmatter {
              categories
              title
              slug
              jobtime
              gradient
              thumbnail
            }
          }
        }
      }
      benceImg: file(relativePath: { eq: "team-bence.png" }) {
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
        {/* <img src={Cloud1} alt="Felho" className="absolute top-0 right-0" />
        <img src={Cloud2} alt="Felho" className="absolute top-0 right-0" />
        <img src={Cloud3} alt="Felho" className="absolute top-0 right-0" /> */}
        <div className="container mx-auto flex justify-center lg:justify-start items-center h-screen -mt-32">
          <div className="my-10 md:my-16 lg:max-w-md">
            <section className="px-4 lg:px-8">
              <div className="text-left">
                <h2 className="text-2xl lg:text-4xl font-display tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-brand md:text-6xl uppercase">
                  Ütős megoldások,
                  <br />
                  ütős márkák
                  <br />
                  számára
                </h2>
                <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-light">
                  Szia! A Gazduig Creative Agency vagyunk Budapestről. Márkákat teszünk ismertebbé és feltűnőbbé, a
                  dizájn erejét használva.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <Link to="/szolgaltatasok">
                    <button className="primary-btn">Íme a részletek</button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <section className="container max-w-7xl mx-auto pt-16 md:flex-row flex-col items-center justify-start">
          <CalloutSection />
          <section>
            <div className="container px-5 pt-28 pb-10 mx-auto">
              <div className="w-full mb-10">
                <h2 className="ml-16 text-2xl font-extrabold font-display uppercase">
                  Nézz meg a fentiekből pár sikeres projektet
                </h2>
                <br />
                <TabBar
                  categories={CATEGORIES}
                  chosenCategory={chosenCategory}
                  setCategory={setChosenCategory}
                  containerClass="mb-8"
                  textClass="text-lg"
                />
              </div>
              <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {data?.[`${chosenCategory}Posts`]?.edges?.map((edge) => (
                  <Link key={edge?.node?.id} to={`portfolio/${edge?.node?.frontmatter?.slug}`}>
                    <div
                      className={`h-48 hover:-mt-2 hover:opacity-75 transition-all duration-300 ease-in-out relative flex-shrink-0 overflow-hidden bg-gray-600 rounded bg-cover bg-no-repeat`}
                      style={{
                        background: `${
                          edge?.node?.frontmatter?.gradient ||
                          'linear-gradient(16deg, rgba(38,38,38,1) 0%, rgba(91,91,91,1) 23%, rgba(38,38,38,0) 100%)'
                        } bottom, url(${edge?.node?.frontmatter?.thumbnail}) no-repeat center`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover, contain',
                        backgroundPosition: 'bottom, center',
                      }}>
                      <div className="absolute bottom-0 left-0 px-5 py-3 text-white">
                        <p className="font-light">{edge?.node?.frontmatter?.jobtime}</p>
                        <p className="font-extrabold">{edge?.node?.frontmatter?.title}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="hidden lg:grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-3 gap-8">
                {data?.[`${chosenCategory}Posts`]?.edges?.map((edge, index) => (
                  <Link
                    key={edge?.node?.id}
                    to={`portfolio/${edge?.node?.frontmatter?.slug}`}
                    style={checkIndexAndApplyToContainer(index)}>
                    <div
                      className={`hover:-mt-2 hover:opacity-75 transition-all duration-300 ease-in-out relative flex-shrink-0 overflow-hidden bg-gray-600 rounded bg-cover bg-no-repeat ${checkIndexAndApplyToCard(
                        index
                      )}`}
                      style={{
                        background: `${
                          edge?.node?.frontmatter?.gradient ||
                          'linear-gradient(16deg, rgba(38,38,38,1) 0%, rgba(91,91,91,1) 23%, rgba(38,38,38,0) 100%)'
                        } bottom, url(${edge?.node?.frontmatter?.thumbnail}) no-repeat center`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover, contain',
                        backgroundPosition: 'bottom, center',
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

          <div className="container flex w-full">
            <div className="mx-auto">
              <Link to="/portfolio">
                <button className="primary-btn">Megnézem a többit is</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <section
        style={{
          background: `linear-gradient(360deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(247,247,247,1) 41%, rgba(247,247,247,1) 100%)`,
        }}>
        <div className="container md:px-5 md:py-32 mx-auto mb-8">
          <h2 className=" ml-6 sm:ml-0 md:ml-16 text-2xl font-extrabold font-display text-left uppercase">
            Hogy tetszettek a látottak?
            <br />
            Készítsünk valami ütőset neked is?
          </h2>
          <br />
          <div
            className="bg-white py-3 md:py-12 md:px-16 shadow-brand rounded flex flex-col md:flex-row md:justify-around items-center sm:bg-right sm:bg-no-repeat sm:bg-contain"
            style={{ backgroundImage: `url(${CTABlob})` }}>
            <div className="mb-6 md:mb-0">
              <h3 className="font-extrabold mb-6 text-lg text-left">
                Írd meg, miben
                <br /> segíthetünk!
              </h3>
              <button className="primary-btn">Kattints ide</button>
            </div>
            <div className="relative overflow-visible bg-gray-900 py-3 pl-6 rounded flex flex-row justify-between items-center pr-28 md:pr-48">
              <div className="text-white">
                <p className="font-extrabold mb-2">Vagy hívd fel Bencét!</p>
                <p className="font-light text-sm mb-2">Gazdig Bence - CEO & Designer csávó</p>
                <p className="font-extrabold text-sm">+36 30 270 5363</p>
              </div>
              <img src={BenceImg} className="absolute bottom-0 right-2 h-32 overflow-visible" alt="Gazdig Bence" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto mb-32 px-4 sm:px-6 lg:px-8">
          <h2 className="heading text-left uppercase">Néhány ügyfelünk, akikre büszkék vagyunk</h2>
          <div className="mx-16 grid grid-cols-2 gap-8 md:grid-cols-6">
            <div className="col-span-2 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={LogoTSystems} alt="T-Systems" />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={LogoShoprenter} alt="Shoprenter" />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={LogoPensum} alt="Pensum Group" />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={LogoHD} alt="HD Marketing" />
            </div>
            {/* <div className="col-span-2 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={LogoDoupla} alt="Doupla" />
            </div> */}
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
            {/* <div className="col-span-2 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={LogoNetmetro} alt="Netmetro" />
            </div> */}
            <div className="col-span-2 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={LogoSzaboKandallo} alt="Szabo Kandallo" />
            </div>
          </div>
        </div>
      </section>
      {/* <section
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
      </section> */}
      <section className="pb-16 home-contact-bg">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mb-8">
            <h2 className="heading mb-4 text-left uppercase leading-brand">
              Írtunk egy összefoglalót arról, milyen módszerrel
              <br />
              szerezzük az ügyfeleink 90%-át Instáról
            </h2>
            <p className="font-light text-lg md:ml-16 md:mb-16 text-left mb-8">
              Olvass bele, hátha találsz benne valami érdekeset!
            </p>
          </div>
          <div className="md:bg-white md:rounded p-8 md:mx-8 md:shadow-brand flex">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl leading-brand font-display font-extrabold mb-8 uppercase">
                Pötyögd be az e-mail címed,
                <br />
                és már küldjük is!
              </h3>
              <form
                method="POST"
                netlify-honeypot="bot-field"
                data-netlify="true"
                name="ig-marketing"
                className="grid grid-cols-1 row-gap-4"
                netlify>
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="ig-marketing" />
                <div className="md:max-w-96">
                  <label htmlFor="full_name" className="sr-only">
                    Hogy szólíthatunk?
                  </label>
                  <div className="relative rounded-md">
                    <input
                      id="full_name"
                      name="full_name"
                      className="form-input block w-full py-3 px-4 placeholder-gray-500 border-gray-900 transition ease-in-out duration-150"
                      placeholder="Hogy szólíthatunk?"
                      required
                    />
                  </div>
                </div>
                <div className="max-w-96">
                  <label htmlFor="email" className="sr-only">
                    Milyen e-mail címen érünk el?
                  </label>
                  <div className="relative rounded-md">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input block w-full py-3 px-4 placeholder-gray-500 border-gray-900 transition ease-in-out duration-150"
                      placeholder="Milyen e-mail címen érünk el?"
                      required
                    />
                  </div>
                </div>
                <div className="max-w-96">
                  <label htmlFor="privacy" className="font-light text-sm">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      className={`form-input mr-2 rounded-full p-1 transition ease-in-out duration-150 ${
                        hasPrivacyAccepted && 'bg-brand-red-500'
                      }`}
                      required
                      onChange={() => setHasPrivacyAccepted(!hasPrivacyAccepted)}
                      checked={hasPrivacyAccepted}
                    />
                    Elfogadom az adatvédelmi nyilatkozatot és engedélyezem, hogy a megadott elérhetőségeken felvegyétek
                    velem a kapcsolatot.
                  </label>
                </div>
                <div>
                  <span className="inline-flex rounded-md">
                    <button
                      type="submit"
                      disabled={!hasPrivacyAccepted}
                      className={`primary-btn ${!hasPrivacyAccepted && 'bg-gray-500'}`}>
                      Jöhet
                    </button>
                  </span>
                </div>
              </form>
            </div>
            <div className="md:w-1/2 relative flex justify-end items-center">
              <img className="absolute" src={Typewriter} alt="Irogep" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="py-10 lg:py-32 flex flex-col md:flex-row container mx-auto items-center justify-center md:justify-around">
          <div className="w-100 md:max-w-1/2 text-left">
            <h2 className="heading uppercase leading-brand ml-4">
              Á, az oldal alján vagy! Hadd mutatkozzunk
              <br />
              be, ha már legörgettél idáig!
            </h2>
            <Link to="/csapat">
              <button className="primary-btn ml-4">Kattints ide</button>
            </Link>
          </div>
          <div className="w-100 flex justify-end items-center">
            <img className="min-h-12 max-h-64" src={Couch} alt="Kanapén ül a Gazduig csapata" />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
