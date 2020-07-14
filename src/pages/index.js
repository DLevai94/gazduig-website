import React from 'react';
// import HeroBG from '../images/heroBG.jpg';
import Layout from '../components/layout';
import SEO from '../components/seo';
import CalloutSection from '../components/callout-section';

function IndexPage() {
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

      <section
        className="container max-w-7xl mx-auto md:flex-row flex-col items-center justify-start"
        id="main-content">
        <CalloutSection />
        <section>
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="w-full mb-20">
              <h1 className="ml-16 text-2xl font-extrabold font-display">
                Nézz meg a fentiekből pár sikeres projektet
              </h1>
              <br />
              <div className="overflow-hidden bg-white pt-2 px-16 shadow-lg rounded-lg">
                <div className="sm:hidden">
                  <select
                    aria-label="Selected tab"
                    className="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-brand-red-500 focus:border-brand-red-500 sm:text-sm sm:leading-5 transition ease-in-out duration-150">
                    <option selected>Összes</option>
                    <option>Arculattervezés</option>
                    <option>Web-, és appdizájn</option>
                  </select>
                </div>
                <div className="hidden sm:block">
                  <div className="border-b border-gray-200">
                    <nav className="-mb-px flex">
                      <a
                        href="#"
                        className="whitespace-no-wrap py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
                        Összes
                      </a>
                      <a
                        href="#"
                        className="whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
                        Arculattervezés
                      </a>
                      <a
                        href="#"
                        className="whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-brand-red-500 font-extrabold text-sm leading-5 text-brand-red-500 focus:outline-none focus:text-brand-red-400 focus:brand-red-500"
                        aria-current="page">
                        Web-, és appdizájn
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <div className="flex-shrink-0 relative overflow-hidden bg-pink-600 rounded-lg shadow-lg h-64">
                    <div className="relative text-white px-6 pb-6 mt-6">
                      <span className="block opacity-75 -mb-1 font-light">2020 marcius</span>
                      <div className="flex justify-between">
                        <span className="block text-xl font-display font-extrabold">
                          Arculattervezés az Ügyfél neve számára
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
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

        <div className="mt-5 centered mx-auto">
          <button className="primary-btn">Íme a részletek</button>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
