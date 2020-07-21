import React, { useState } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Typewriter from '../images/the-great-typewriter.png';

function IgHacks() {
  const [hasPrivacyAccepted, setHasPrivacyAccepted] = useState(false);

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
      <section className="purple-blob-bg" style={{ backgroundPosition: `140% 20%` }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="px-8 xl:px-0 w-full lg:w-1/2 my-32">
            <h2 className="text-2xl md:text-4xl xl:text-5xl leading-tight font-display font-extrabold">
              Írtunk egy összefoglalót arról, milyen módszerrel szerezzük az ügyfeleink 90%-át Instáról
            </h2>
          </div>
          <div className="mb-32">
            <div className="md:mx-4 lg:mx-auto md:bg-white md:rounded p-8 md:shadow-brand flex">
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
                  <div className="md:w-96">
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
                  <div className="md:w-96">
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
                  <div className="md:w-96">
                    <label htmlFor="privacy" className="font-light text-sm">
                      <input
                        id="privacy"
                        type="checkbox"
                        className={`form-input mr-2 rounded-full p-1 transition ease-in-out duration-150 ${
                          hasPrivacyAccepted && 'bg-brand-red-500'
                        }`}
                        required
                        onChange={() => setHasPrivacyAccepted(!hasPrivacyAccepted)}
                        checked={hasPrivacyAccepted}
                      />
                      Elfogadom az adatvédelmi nyilatkozatot és engedélyezem, hogy a megadott elérhetőségeken
                      felvegyétek velem a kapcsolatot.
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
          <div className="mb-32 px-8 xl:px-0">
            <h2 className="text-2xl leading-tight font-display font-extrabold mb-4">
              Most inkább nézelődnél
              <br /> olvasás helyett? No problem!
            </h2>
            <Link to="/portfolio">
              <button className="primary-btn">Irány a portfólió</button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IgHacks;
