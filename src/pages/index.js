import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
// import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import CalloutSection from '../components/callout-section';
import TabBar from '../components/tab-bar';
import ProjectCard from '../components/project-card';
import Typewriter from '../images/the-great-typewriter.png';
import Couch from '../images/couch.png';
import TeamBence from '../images/head-team-bence.png';
import TeamReka from '../images/head-team-reka.png';
import TeamDani from '../images/head-team-dani.png';
import TeamGergo from '../images/head-team-gergo.png';
import ctaBg from '../images/cta-bg.png';
// import ctaCircle from '../images/cta-circle.svg';
// import LogoKH from '../components/svg/logo-kh.svg';
import LogoTSystems from '../components/svg/logo-t.svg';
import LogoShoprenter from '../components/svg/logo-shoprenter.svg';
import LogoEcom from '../components/svg/logo-ecom.svg';
import LogoAndersen from '../components/svg/logo-andersen.svg';
import LogoConversific from '../components/svg/logo-conversific.svg';
import BenceImg from '../images/bence-bw.png';
import { CATEGORIES } from '../config/consts';

function IndexPage() {
  const [chosenCategory, setChosenCategory] = useState('all');
  const [hasPrivacyAccepted, setHasPrivacyAccepted] = useState(false);
  const data = useStaticQuery(graphql`
    {
      allPosts: allMarkdownRemark(limit: 8) {
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
      webPosts: allMarkdownRemark(limit: 8, filter: { frontmatter: { categories: { eq: "web" } } }) {
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
      brandingPosts: allMarkdownRemark(limit: 8, filter: { frontmatter: { categories: { eq: "branding" } } }) {
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
      socialPosts: allMarkdownRemark(limit: 8, filter: { frontmatter: { categories: { eq: "social" } } }) {
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
      printPosts: allMarkdownRemark(limit: 8, filter: { frontmatter: { categories: { eq: "print" } } }) {
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
      <div className="container mx-auto flex flex-row justify-center items-start h-screen -mt-32 z-0">
        <div className="flex flex-col h-screen justify-center">
          <div className="my-10 md:my-16">
            <div className="lg:max-w-xl">
              <section className="px-4 lg:px-8">
                <div className="text-left">
                  <h1 className="text-3xl lg:text-5xl font-display tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-brand md:text-6xl">
                    Ütős megoldások,
                    <br />
                    ütős márkák számára.
                  </h1>
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
          <div className="ml-4 md:ml-12 max-w-xs md:max-w-lg lg:max-w-5xl">
            <div className="grid gap-2 md:gap-10 lg:gap-20 grid-cols-5">
              <div className="flex justify-center lg:col-span-1">
                <img className="h-6 md:h-12" src={LogoTSystems} alt="T-Systems" />
              </div>
              <div className="flex justify-center lg:col-span-1">
                <img className="h-6 md:h-12" src={LogoShoprenter} alt="T-Systems" />
              </div>
              <div className="flex justify-center lg:col-span-1">
                <img className="h-6 md:h-12" src={LogoEcom} alt="T-Systems" />
              </div>
              <div className="flex justify-center lg:col-span-1">
                <img className="h-6 md:h-12" src={LogoAndersen} alt="T-Systems" />
              </div>
              <div className="flex justify-center lg:col-span-1">
                <img className="h-6 md:h-12" src={LogoConversific} alt="T-Systems" />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex h-screen justify-center items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="animate-float">
              <img className="h-20 w-auto" src={TeamBence} alt="Bence" />
            </div>
            <div className="animate-float mt-10">
              <img className="h-20 w-auto" src={TeamReka} alt="Reka" />
            </div>
            <div className="animate-float">
              <img className="h-20 w-auto" src={TeamDani} alt="Dani" />
            </div>
            <div className="animate-float mt-10">
              <img className="h-20 w-auto" src={TeamGergo} alt="Gergo" />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <section className="container max-w-7xl mx-auto pt-16 md:flex-row flex-col items-center justify-start">
          <CalloutSection />
          <section>
            <div className="container px-5 pt-28 pb-10 mx-auto">
              <div className="w-full ml-16 mb-10">
                <h2 className="text-4xl font-extrabold font-display">Nézz meg pár korábbi, sikeres projektet</h2>
                <br />
                <TabBar
                  categories={CATEGORIES}
                  chosenCategory={chosenCategory}
                  setCategory={setChosenCategory}
                  containerClass="mb-8"
                  textClass="text-lg"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {data?.[`${chosenCategory}Posts`]?.edges?.map((edge) => (
                  <ProjectCard key={edge?.node?.id} edge={edge} />
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
      <section className="container mx-auto my-32">
        <div
          style={{
            background: `#F8F8F8 url(${ctaBg}) no-repeat bottom center`,
          }}
          className="bg-gray-100 p-16 max-w-full mx-auto relative pb-64">
          <div className="sm:ml-0 md:ml-16">
            <h2 className="mb-16 text-4xl max-w-lg font-extrabold font-display text-left">
              Hogy tetszettek a látottak?
              <br />
              Neked mikor készítsünk valami ütőset?
            </h2>
            <div className="mb-16">
              <button className="primary-btn">Írd meg, miben segíthetünk!</button>
            </div>
            <div className="relative bg-white py-3 pl-6 flex flex-row w-96 justify-between items-center pr-28 md:pr-48">
              <div>
                <p className="font-extrabold mb-2">Vagy hívd fel Bencét!</p>
                <p className="font-light text-sm mb-2">Gazdig Bence - CEO & Designer csávó</p>
                <p className="font-extrabold text-sm">+36 30 270 5363</p>
              </div>
              <img src={BenceImg} className="absolute bottom-0 right-2 h-32 overflow-visible" alt="Gazdig Bence" />
            </div>
          </div>
        </div>
      </section>
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
                        hasPrivacyAccepted && 'bg-brand-blue-500'
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
      <section>
        <div className="py-10 lg:py-32 flex flex-col md:flex-row container mx-auto items-center justify-center md:justify-around">
          <div className="w-100 md:max-w-xs text-left">
            <h2 className="heading leading-brand ml-4">
              Üdv az oldal alján! Hadd mutatkozzunk be, ha legörgettél idáig!
            </h2>
            <Link to="/csapat">
              <button className="primary-btn ml-4">Ismerj meg minket</button>
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
