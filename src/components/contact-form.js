import React, { useState } from 'react';
import { SERVICES } from '../config/consts';
import Bence from '../images/contact-phone.png';

const ContactForm = ({ contactPageEdits }) => {
  const [jobtype, setJobtype] = useState(null);
  const [hasPrivacyAccepted, setHasPrivacyAccepted] = useState(false);
  return (
    <div className="mx-auto lg:grid lg:grid-cols-2 lg:col-gap-1">
      <div className="lg:col-span-1 lg:col-start-1 flex justify-center items-baseline">
        <div className="max-w-md">
          <form
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
            method="POST"
            className="grid grid-cols-1 row-gap-4 items-center"
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
                  name="full_name"
                  className="bg-transparent form-input block w-full py-3 px-4 placeholder-gray-700 border mb-3 border-gray-500 transition ease-in-out duration-150"
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
                  name="email"
                  type="email"
                  className="bg-transparent form-input block w-full py-3 px-4 placeholder-gray-700 border mb-3 border-gray-500 transition ease-in-out duration-150"
                  placeholder="Milyen e-mail címen érünk el?"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="jobtype" className="sr-only">
                Miben segíthetünk?
              </label>
              <div className="relative rounded-md">
                <select
                  id="jobtype"
                  name="jobtype"
                  className="bg-transparent form-input block w-full py-3 px-4 text-brand-blue-500 font-extrabold border mb-3 border-gray-500 transition ease-in-out duration-150"
                  onChange={(e) => setJobtype(e?.target?.value)}>
                  <option value="" disabled selected hidden>
                    Miben segíthetünk? ▼
                  </option>
                  {SERVICES?.map((category) => (
                    <option key={category?.key} value={category?.key} selected={jobtype === category?.key}>
                      {category?.name}
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
                  name="message"
                  rows="5"
                  className="bg-transparent form-input block w-full py-3 px-4 placeholder-gray-700 border mb-3 border-gray-500 transition ease-in-out duration-150"
                  placeholder="Ha már tudsz részleteket, pötyögd be őket pár szóban, és amint lehet, felkeresünk!"></textarea>
              </div>
            </div>
            <div>
              <label htmlFor="privacy" className="font-light text-xs">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  className={`bg-transparent form-input mr-2 rounded-full p-1 transition ease-in-out duration-150 ${
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
            <div className="">
              <span className="inline-flex rounded-md">
                <button
                  type="submit"
                  disabled={!hasPrivacyAccepted}
                  className={`primary-btn ${
                    !hasPrivacyAccepted && 'opacity-50 cursor-default hover:bg-brand-blue-500'
                  }`}>
                  Küldés
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className={`lg:col-span-1 flex ${contactPageEdits || 'justify-center items-baseline'}`}>
        <div className="w-80">
          <img src={Bence} className="" alt="Gazdig Bence" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
