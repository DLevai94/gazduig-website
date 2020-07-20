import React, { useState } from 'react';
import { CATEGORIES } from '../config/consts';
import Bence from '../images/bence-bw.png';

const categories = CATEGORIES.slice(1);

const ContactForm = () => {
  const [hasPrivacyAccepted, setHasPrivacyAccepted] = useState(false);
  return (
    <div className="mx-auto lg:grid lg:grid-cols-2 lg:col-gap-1">
      <div className="lg:col-span-1 lg:col-start-1">
        <div className="max-w-lg">
          <form
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
            method="POST"
            className="grid grid-cols-1 row-gap-6"
            netlify>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div>
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
            <div>
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
            <div>
              <label htmlFor="jobtype" className="sr-only">
                Miben segíthetünk első körben?
              </label>
              <div className="relative rounded-md">
                <select
                  id="jobtype"
                  className="form-input block w-full py-3 px-4 placeholder-gray-500 border-gray-900 transition ease-in-out duration-150"
                  defaultValue="Miben segíthetünk első körben?"
                  onChange={(e) => console.log(e)}>
                  {categories?.map((category) => (
                    <option key={category.key} selected={category.key}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="jobtype" className="sr-only">
                És ezen felül?
              </label>
              <div className="relative rounded-md">
                <select
                  id="jobtype"
                  className="form-input block w-full py-3 px-4 placeholder-gray-500 border-gray-900 transition ease-in-out duration-150"
                  defaultValue="És ezen felül?"
                  onChange={(e) => console.log(e)}>
                  {categories?.map((category) => (
                    <option key={category.key} selected={category.key}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Ha már tudsz részleteket, pötyögd be őket pár szóban, és amint lehet, felkeresünk!
              </label>
              <div className="relative rounded-md">
                <textarea
                  id="message"
                  rows="5"
                  className="form-input block w-full py-3 px-4 placeholder-gray-500 border-gray-900 transition ease-in-out duration-150"
                  placeholder="Ha már tudsz részleteket, pötyögd be őket pár szóban, és amint lehet, felkeresünk!"></textarea>
              </div>
            </div>
            <div>
              <label htmlFor="privacy" className="font-light text-xs">
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
                Elfogadom az adatvédelmi nyilatkozatot és engedélyezem, hogy a megadott elérhetőségeken felvegyétek
                velem a kapcsolatot.
              </label>
            </div>
            <div className="">
              <span className="inline-flex rounded-md">
                <button
                  type="submit"
                  disabled={!hasPrivacyAccepted}
                  className={`primary-btn ${!hasPrivacyAccepted && 'bg-gray-500'}`}>
                  Küldés
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="max-w-lg mx-auto lg:max-w-none">
          <div className=" overflow-visible">
            <div className="bg-white w-52 px-6 py-3 pb-56 md:shadow-brand rounded overflow-visible relative">
              <p className="font-extrabold mb-4">Szia, Bence vagyok!</p>
              <p className="font-light">
                Én válaszolok majd az üzenetedre. Ha kérdésed van, hívj fel bármikor a +36 30 270 5363-as számon!
              </p>
              <img src={Bence} className="absolute bottom-0 left-0 object-contain object-center md:w-96" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
