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
        title="Ezeket neked írtuk"
      />
      <section className="purple-blob-bg" style={{ backgroundPosition: `130% 15%`, backgroundSize: `60% 90%` }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-32">
            <div className="mx-auto flex mt-36">
              <div className="md:w-1/2 relative flex justify-end items-center">
                <img
                  className="absolute"
                  src={Typewriter}
                  alt="Irogep"
                  style={{ animation: 'float 4s ease-in-out infinite' }}
                />
              </div>

              <div className="w-full md:w-1/2">
                <div>
                  <h2 className="text-4xl md:text-5xl leading-brand font-extrabold">
                    Az ügyfeleink 90%-át Instáról szerezzük
                  </h2>
                  <p className="text-md md:text-lg font-display-300 mt-4 mb-10">
                    Írtunk is erről egy összefoglalót. Olvass bele, hátha találsz benne valami érdekeset!
                  </p>
                </div>

                <h3 className="text-2xl leading-brand font-display font-extrabold my-8">
                  Pötyögd be a mail címed, és már küldjük is!
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
                  <div className="md:w-96">
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
                  <div className="md:w-96">
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
                  <div className="md:w-96">
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
            </div>
          </div>
        </div>
        <div className="mb-32 px-8 xl:px-0">
          <h2 className="text-2xl uppercase leading-brand font-display font-extrabold mb-10">
            Most inkább nézelődnél
            <br /> olvasás helyett? No problem!
          </h2>
          <Link to="/portfolio">
            <button className="primary-btn">Irány a portfólió</button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export default IgHacks;
