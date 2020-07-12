import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[`gazduig`, `designer`, `grafikus`, `gazdig bence`]} title="Főoldal" />
      <div
        className="flex h-2/4"
        style={{
          backgroundImage: `url('../images/hero-bg.jpg')`,
        }}>
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">Ütős megoldások, ütős márkák számára</h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              Szia! A Gazduig Creative Agency vagyunk Budapesről. Márkákat teszünk ismertebbé és feltűnőbbé, a dizájn
              erejét használva.
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <a
                className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
                href="#">
                Íme a részletek
              </a>
            </div>
          </div>
        </div>
        <div
          className="hidden lg:block lg:w-1/2"
          style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}></div>
      </div>

      <section className="text-center" id="main-content">
        <p>img</p>

        <h1 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Hey there! Welcome to your first Gatsby site.
        </h1>

        <div className="p-8">
          <div className="relative bg-black shadow-lg rounded-lg group h-64 w-2/4 flex justify-start items-end p-8">
            <div
              className="rounded-lg h-full w-full absolute z-10 bg-cover bg-center hover:opacity-50 transition-all duration-500 ease-in-out"
              style={{ backgroundImage: 'none' }}></div>
            <p className="font-bold text-lg text-white absolute z-20 pointer-events-none">Arculattervezes</p>
          </div>
        </div>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{` `}
          <a
            className="font-bold text-gray-900 no-underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer">
            Tailwind CSS
          </a>
          , a utility-first CSS framework.
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
