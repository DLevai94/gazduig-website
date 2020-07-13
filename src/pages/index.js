import React from 'react';
import HeroBG from '../images/heroBG.jpg';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ProjectGrid from '../components/projectGrid';
import CalloutBranding from '../components/svg/calloutBranding';

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[`gazduig`, `designer`, `grafikus`, `gazdig bence`]} title="Főoldal" />
      <section>
        <div
          className="hidden sm:flex sm:h-screen sm:w-auto sm:bg-center sm:bg-no-repeat sm:bg-cover"
          style={{ backgroundImage: `url(${HeroBG})` }}>
          <div className="container mx-auto flex px-5 my-48 md:flex-row flex-col items-start justify-start pl-16">
            <div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="lg:text-6xl text-5xl font-display font-extrabold tracking-tight leading-none">
                Ütős megoldások, ütős márkák számára
              </h1>
              <div className="max-w-md my-8">
                <p className="leading-relaxed font-light tracking-tight text-2xl">
                  Szia! A Gazduig Creative Agency vagyunk Budapesről. Márkákat teszünk ismertebbé és feltűnőbbé, a
                  dizájn erejét használva.
                </p>
              </div>
              <div className="flex justify-center">
                <button className="primary-btn">Íme a részletek</button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="sm:hidden sm:h-screen sm:w-auto sm:bg-center sm:bg-no-repeat sm:bg-cover">
          <div className="container mx-auto flex px-5 my-48 md:flex-row flex-col items-start justify-start">
            <div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="lg:text-6xl text-5xl font-display font-extrabold tracking-tight leading-none">
                Ütős megoldások, ütős márkák számára
              </h1>
              <div className="max-w-md my-8">
                <p className="leading-relaxed font-light tracking-tight text-2xl">
                  Szia! A Gazduig Creative Agency vagyunk Budapesről. Márkákat teszünk ismertebbé és feltűnőbbé, a
                  dizájn erejét használva.
                </p>
              </div>
              <div className="flex justify-center">
                <button className="primary-btn">Íme a részletek</button>
              </div>
            </div>
          </div>
        </div>

        <section className="container mx-auto -mt-64">
          <h2 className="font-display font-extrabold text-2xl pl-16">
            Ez itt az
            <br /> eszköztárunk
          </h2>
          <div className="flex flex-wrap -mx-2 overflow-hidden">
            <div className="callout-card">
              <div className="w-3/12">
                <CalloutBranding className="w-16" />
              </div>
              <div className="w-9/12">
                <h3 className="font-extrabold">Arculattervezés</h3>
                <p className="font-light leading-tight">
                  A profi és egységes megjelenés ugyanilyen minőségi portékát sejtet. Tüntesd fel magad jó színben!
                </p>
              </div>
            </div>
            <div className="callout-card">
              <div className="w-3/12">
                <CalloutBranding className="w-16" />
              </div>
              <div className="w-9/12">
                <h3 className="font-extrabold">Arculattervezés</h3>
                <p className="font-light leading-tight">
                  A profi és egységes megjelenés ugyanilyen minőségi portékát sejtet. Tüntesd fel magad jó színben!
                </p>
              </div>
            </div>
            <div className="callout-card">
              <div className="w-3/12">
                <CalloutBranding className="w-16" />
              </div>
              <div className="w-9/12">
                <h3 className="font-extrabold">Arculattervezés</h3>
                <p className="font-light leading-tight">
                  A profi és egységes megjelenés ugyanilyen minőségi portékát sejtet. Tüntesd fel magad jó színben!
                </p>
              </div>
            </div>
            <div className="callout-card">
              <div className="w-3/12">
                <CalloutBranding className="w-16" />
              </div>
              <div className="w-9/12">
                <h3 className="font-extrabold">Arculattervezés</h3>
                <p className="font-light leading-tight">
                  A profi és egységes megjelenés ugyanilyen minőségi portékát sejtet. Tüntesd fel magad jó színben!
                </p>
              </div>
            </div>
            <div className="callout-card">
              <div className="w-3/12">
                <CalloutBranding className="w-16" />
              </div>
              <div className="w-9/12">
                <h3 className="font-extrabold">Arculattervezés</h3>
                <p className="font-light leading-tight">
                  A profi és egységes megjelenés ugyanilyen minőségi portékát sejtet. Tüntesd fel magad jó színben!
                </p>
              </div>
            </div>
            <div className="callout-card">
              <div className="w-3/12">
                <CalloutBranding className="w-16" />
              </div>
              <div className="w-9/12">
                <h3 className="font-extrabold">Arculattervezés</h3>
                <p className="font-light leading-tight">
                  A profi és egységes megjelenés ugyanilyen minőségi portékát sejtet. Tüntesd fel magad jó színben!
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section
        className="container max-w-4xl mx-auto md:flex-row flex-col items-center justify-start"
        id="main-content">
        <ProjectGrid />
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-wrap">
              <h1 className="sm:text-3xl text-2xl font-extrabold font-display lg:w-1/3 lg:mb-0 mb-4 leading-tight">
                Nézz meg a fentiekből pár sikeres projektet
              </h1>
              <br />
              <nav className="block bg-white px-8 pt-2 shadow-md">
                <div className="-mb-px flex justify-center">
                  <a
                    className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
                    href="#">
                    Home
                  </a>
                  <a
                    className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
                    href="#">
                    Products
                  </a>
                  <a
                    className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
                    href="#">
                    Discounts
                  </a>
                  <a
                    className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3"
                    href="#">
                    Customers
                  </a>
                </div>
              </nav>
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
      </section>
    </Layout>
  );
}

export default IndexPage;
