import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PurpleBlob from '../images/purple-blob.svg';

function IgHacks() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "writer.png" }) {
        childImageSharp {
          fluid(maxHeight: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        keywords={[
          'kreatív esettanulmány',
          'instagram esettanulmány',
          'insta esettanulmány',
          'instagram márkaépítés',
          'ütős',
          'kreatív ügynökség',
          'kreatív ügynökség budapest',
          'gazduig',
        ]}
        title="Ezekt neked írtuk"
      />
      <div className="bg-no-repeat" style={{ backgroundImage: `url(${PurpleBlob})`, backgroundPosition: `110% 75%` }}>
        <section className="container mx-auto flex flex-col my-32">
          <div className="md:w-1/2">
            <h2 className="text-5xl leading-tight font-display font-extrabold">
              Írtunk egy összefoglalót arról, milyen módszerrel szerezzük az ügyfeleink 90%-át Instáról
            </h2>
          </div>
          <div className="bg-white min-h-64 w-11/12 shadow-brand flex justify-start rounded items-center my-32 p-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl leading-tight font-display font-extrabold mb-8">
                Pötyögd be az e-mail címed, és már küldjük is!
              </h3>

              <form
                method="POST"
                netlify-honeypot="bot-field"
                data-netlify="true"
                name="ig-marketing"
                className="grid grid-cols-1 row-gap-6"
                netlify>
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="ig-marketing" />
                <div className="w-96">
                  <label htmlFor="full_name" className="sr-only">
                    Hogy szólíthatunk?
                  </label>
                  <div className="relative rounded-md">
                    <input
                      id="full_name"
                      className="form-input block w-full py-3 px-4 placeholder-gray-500 border-gray-900 transition ease-in-out duration-150"
                      placeholder="Hogy szólíthatunk?"
                      required
                    />
                  </div>
                </div>
                <div className="w-96">
                  <label htmlFor="email" className="sr-only">
                    Milyen e-mail címen érünk el?
                  </label>
                  <div className="relative rounded-md">
                    <input
                      id="email"
                      type="email"
                      className="form-input block w-full py-3 px-4 placeholder-gray-500 border-gray-900 transition ease-in-out duration-150"
                      placeholder="Milyen e-mail címen érünk el?"
                      required
                    />
                  </div>
                </div>
                <div className="w-96">
                  <label htmlFor="privacy" className="font-light text-sm">
                    <input
                      id="privacy"
                      type="checkbox"
                      className="form-input mr-2 rounded-full p-1 transition ease-in-out duration-150"
                      required
                    />
                    Elfogadom az adatvédelmi nyilatkozatot és engedélyezem, hogy a megadott elérhetőségeken felvegyétek
                    velem a kapcsolatot.
                  </label>
                </div>
                <div>
                  <span className="inline-flex rounded-md">
                    <button
                      type="submit"
                      className="primary-btn inline-flex justify-center transition duration-150 ease-in-out">
                      Jöhet
                    </button>
                  </span>
                </div>
              </form>
            </div>
            <div className="hidden md:visible md:w-1/2 justify-center items-center content-center object-center">
              <Img fluid={data.file.childImageSharp.fluid} className="w-1/2" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl leading-tight font-display font-extrabold mb-4">
              Most inkább nézelődnél
              <br /> olvasás helyett? No problem!
            </h2>
            <Link to="/portfolio">
              <button className="primary-btn">Irány a portfólió</button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default IgHacks;
