import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import CalloutSection from '../components/callout-section';
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

const categories = [
  {
    key: 'all',
    name: 'Összes',
  },
  {
    key: 'branding',
    name: 'Arculattervezés',
  },
  {
    key: 'web',
    name: 'Web-, és appdizájn',
  },
  {
    key: 'social',
    name: 'Social anyagok dizájnja',
  },
  {
    key: 'print',
    name: 'Print anyagok dizájnja',
  },
];

function IndexPage() {
  const [chosenCategory, setChosenCategory] = useState('all');
  const data = useStaticQuery(graphql`
    {
      posts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
      benceImg: file(relativePath: { eq: "bence.png" }) {
        childImageSharp {
          fluid(maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  console.log(data);

  return (
    <Layout>
      <SEO keywords={[`gazduig`, `designer`, `grafikus`, `gazdig bence`]} title="Főoldal" />
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
        <section
          className="container max-w-7xl mx-auto md:flex-row flex-col items-center justify-start pb-64"
          id="main-content">
          <CalloutSection />
          <section>
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="w-full mb-20">
                <h2 className="ml-16 text-2xl font-extrabold font-display">
                  Nézz meg a fentiekből pár sikeres projektet
                </h2>
                <br />
                <div className="overflow-hidden bg-white pt-2 px-16 shadow-lg rounded">
                  <div className="sm:hidden">
                    <select
                      aria-label="Selected tab"
                      className="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-brand-red-500 focus:border-brand-red-500 sm:text-sm sm:leading-5 transition ease-in-out duration-150">
                      {categories?.map((category) => (
                        <option
                          key={category.key}
                          selected={category.key === chosenCategory || 'all'}
                          onClick={() => setChosenCategory(category.key)}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="hidden sm:block">
                    <div className="border-b border-gray-200">
                      <nav className="-mb-px flex">
                        {categories?.map((category) => (
                          <button
                            key={category.key}
                            onClick={() => setChosenCategory(category.key)}
                            className={`whitespace-no-wrap mr-4 py-4 px-1 border-b-2 ${
                              category.key !== chosenCategory
                                ? 'border-transparent font-medium'
                                : 'border-brand-red-500 font-extrabold text-brand-red-500'
                            } text-sm leading-5 hover:text-gray-700 hover:border-gray-700 focus:outline-none transition-colors duration-200 ease-in`}>
                            {category?.name}
                          </button>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap md:-m-2 -m-1">
                <div className="flex flex-wrap w-1/2">
                  {data?.posts?.edges
                    ?.filter(
                      (edge) =>
                        edge?.node?.frontmatter?.categories?.includes(chosenCategory) || chosenCategory === 'all'
                    )
                    ?.map((edge) => (
                      <Link key={edge?.node?.id} to={`portfolio/${edge?.node?.frontmatter?.slug}`}>
                        <div className="md:p-2 p-1 w-full">
                          <div
                            className="relative flex-shrink-0 overflow-hidden bg-gray-600 rounded shadow-lg h-64 bg-cover bg-no-repeat"
                            style={{
                              background: `linear-gradient(0deg, rgba(227,32,116,1) 0%, rgba(227,32,116,0.5) 46%, rgba(227,32,116,0) 100%) bottom, url(${edge?.node?.frontmatter?.thumbnail?.publicURL}) no-repeat center `,
                            }}>
                            <div className="relative inset-x-0 bottom-0 text-white px-6 pb-6  justify-end items-start flex-col">
                              <span className="block opacity-75 -mb-1 font-light">
                                {edge?.node?.frontmatter?.jobtime}
                              </span>
                              <div className="flex justify-between">
                                <span className="block text-xl font-display font-extrabold">
                                  {edge?.node?.frontmatter?.title}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src="https://dummyimage.com/500x300"
                    />
                  </div>
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src="https://dummyimage.com/501x301"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src="https://dummyimage.com/502x302"
                    />
                  </div>
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src="https://dummyimage.com/503x303"
                    />
                  </div>
                  <div className="md:p-2 p-1 w-full">
                    <img
                      alt="gallery"
                      className="w-full h-full object-cover object-center block"
                      src="https://dummyimage.com/601x361"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="container mt-5 flex w-full">
            <div className="mx-auto">
              <button className="primary-btn">Megnézem a többit is</button>
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
              className="bg-white py-12 px-16 shadow-lg rounded flex flex-row justify-around items-center bg-right bg-no-repeat bg-contain"
              style={{ backgroundImage: `url(${Callout6})` }}>
              <div>
                <h3 className="font-extrabold mb-6 text-lg">
                  Írd meg, miben
                  <br /> segíthetünk!
                </h3>
                <button className="primary-btn">Kattints ide</button>
              </div>
              <div className="relative max-h-28 bg-gray-900 pt-2 px-4 rounded flex flex-row justify-between items-center w-3/7">
                <div className="text-white">
                  <p className="font-extrabold mb-2">Vagy hívd fel Bencét!</p>
                  <p className="font-light text-sm mb-2">Gazdig Bence - CEO & Designer csávó</p>
                  <p className="font-extrabold text-sm">+36 30 270 5363</p>
                </div>
                <Img
                  fixed={data?.benceImg?.childImageSharp?.fluid}
                  className="absolute bottom-0 right-6 h-32 w-32 z-50"
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
          <div className="bg-white col-span-1 flex justify-center md:col-span-2 lg:col-span-1 flex-col rounded shadow-lg p-4">
            <p className="text-sm leading-tight mb-3">
              A profi és egységes megjelenés ugyanilyen minőségi portékát sejtet. Tüntesd fel magad jó színben.
            </p>
            <p className="font-extrabold text-sm leading-tight">
              Weinwurm Bence
              <br />
              Senior projektmenedzser, T-Systems
            </p>
          </div>
          <div className="bg-white col-span-1 flex justify-center md:col-span-2 lg:col-span-1 flex-col rounded shadow-lg p-4">
            <p className="text-sm leading-tight mb-3">
              A profi és egységes megjelenés ugyanilyen minőségi portékát sejtet. Tüntesd fel magad jó színben.
            </p>
            <p className="font-extrabold text-sm leading-tight">
              Weinwurm Bence
              <br />
              Senior projektmenedzser, T-Systems
            </p>
          </div>
          <div className="bg-white col-span-1 flex justify-center md:col-span-2 lg:col-span-1 flex-col rounded shadow-lg p-4">
            <p className="text-sm leading-tight mb-3">
              A profi és egységes megjelenés ugyanilyen minőségi portékát sejtet. Tüntesd fel magad jó színben.
            </p>
            <p className="font-extrabold text-sm leading-tight">
              Weinwurm Bence
              <br />
              Senior projektmenedzser, T-Systems
            </p>
          </div>
          <div className="bg-white col-span-1 flex justify-center md:col-span-2 lg:col-span-1 flex-col rounded shadow-lg p-4">
            <p className="text-sm leading-tight mb-3">
              A profi és egységes megjelenés ugyanilyen minőségi portékát sejtet. Tüntesd fel magad jó színben.
            </p>
            <p className="font-extrabold text-sm leading-tight">
              Weinwurm Bence
              <br />
              Senior projektmenedzser, T-Systems
            </p>
          </div>
          <div className="bg-white col-span-1 flex justify-center md:col-span-2 lg:col-span-1 flex-col rounded shadow-lg p-4">
            <p className="text-sm leading-tight mb-3">
              A profi és egységes megjelenés ugyanilyen minőségi portékát sejtet. Tüntesd fel magad jó színben.
            </p>
            <p className="font-extrabold text-sm leading-tight">
              Weinwurm Bence
              <br />
              Senior projektmenedzser, T-Systems
            </p>
          </div>
          <div className="bg-white col-span-1 flex justify-center md:col-span-2 lg:col-span-1 flex-col rounded shadow-lg p-4">
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
          <div className="bg-white rounded p-8 mx-8 shadow-lg flex z-50">
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
      <section className="-mt-64 z-0 p-96 bg-gray-200 flex items-center justify-between">
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
      </section>
    </Layout>
  );
}

export default IndexPage;
