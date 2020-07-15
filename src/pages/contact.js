import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Astronaut from '../images/astronaut.png';
import Layout from '../components/layout';
import SEO from '../components/seo';

const categories = [
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
  {
    key: 'other',
    name: 'Egyéb',
  },
];

function ContactPage() {
  const data = useStaticQuery(graphql`
    {
      benceBW: file(relativePath: { eq: "bence-bw.png" }) {
        childImageSharp {
          fluid(maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout className="bg-no-repeat bg-right-bottom bg-contain" style={{ backgroundImage: `url(${Astronaut})` }}>
      <SEO keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} title="Contact" />
      <section className="container md:ml-32 mt-32 px-4 sm:px-6 lg:px-8 max-w-3/4">
        <div className="mx-auto md:w-3/4">
          <h1 className="text-5xl font-extrabold font-display leading-tight tracking-tight">
            Kis lépés ez neked, de nagy lépés lehet a márkádnak!
          </h1>
          <p className="text-lg font-light mt-4 mb-16">Töltsd ki a lenti formot, és alkossunk együtt valami ütőset!</p>
          <div className="flex flex-row">
            <div className="w-full md:w-1/2">
              <form action="#" method="POST">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label htmlFor="first_name" className="block text-sm font-light leading-5 text-gray-700">
                      Hogy szólíthatunk?
                    </label>
                    <input
                      placeholder="Fekete István"
                      id="first_name"
                      className="mt-1 form-input block w-full py-2 px-3 border border-gray-900 rounded-md  focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="email_address" className="block text-sm font-light leading-5 text-gray-700">
                      Milyen e-mail címen érünk el?
                    </label>
                    <input
                      placeholder="istvanfekete@gazduig.com"
                      id="email_address"
                      className="mt-1 form-input block w-full py-2 px-3 border border-gray-900 rounded-md  focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="jobtype" className="block text-sm font-light leading-5 text-gray-700">
                      Miben segíthetünk első körben?
                    </label>
                    <select
                      id="jobtype"
                      className="mt-1 block form-select w-full py-2 px-3 border border-gray-900 bg-white rounded-md  focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      onChange={(e) => console.log(e)}>
                      {categories?.map((category) => (
                        <option key={category.key} selected={category.key}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="jobtype_2" className="block text-sm font-light leading-5 text-gray-700">
                      És ezen felül?
                    </label>
                    <select
                      id="jobtype_2"
                      className="mt-1 block form-select w-full py-2 px-3 border border-gray-900 bg-white rounded-md  focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      onChange={(e) => console.log(e)}>
                      {categories?.map((category) => (
                        <option key={category.key} selected={category.key}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="message" className="block text-sm font-medium leading-5 text-gray-700">
                      Reszletek
                    </label>
                    <textarea
                      placeholder="Ha már tudsz részleteket, pötyögd be őket pár szóban, és amint lehet, felkeresünk!"
                      id="message"
                      className="mt-1 form-input block w-full py-2 px-3 border border-gray-900 rounded-md  focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"></textarea>
                  </div>
                  <div className="col-span-5">
                    <label htmlFor="privacy" className="font-light text-xs text-gray-700">
                      <input
                        id="privacy"
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out mr-2"
                      />
                      Elfogadom az adatvédelmi nyilatkozatot és engedélyezem, hogy a megadott elérhetőségeken
                      felvegyétek velem a kapcsolatot.
                    </label>
                  </div>
                  <div className="col-span-6">
                    <button type="submit" className="primary-btn">
                      Küldés
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="w-full md:w-1/2 ml-8">
              <div className="bg-white h-96 w-56 px-6 py-3 pb-0 shadow-brand rounded relative">
                <p className="font-extrabold mb-4">Szia, Bence vagyok!</p>
                <p className="font-light">
                  Én válaszolok majd az üzenetedre. Ha kérdésed van, hívj fel bármikor a +36 30 270 5363-as számon!
                </p>
                <Img className="absolute bottom-0" fluid={data?.benceBW?.childImageSharp?.fluid} alt="Gazdig Bence" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
