import React from 'react';
import { Link } from 'gatsby';
import FooterLogo from './svg/footerLogo';
import FooterInsta from './svg/footerInsta';
import FooterLinkedin from './svg/footerLinkedin';
import FooterMail from './svg/footerMail';
import FooterPhone from './svg/footerPhone';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:pt-16 lg:px-8">
        <div className="md:grid grid-cols-2 lg:grid-cols-5 xl:gap-8">
          <div>
            <Link to="/" className="">
              <FooterLogo className="w-32" />
            </Link>
          </div>
          <div>
            <h4 className="text-sm font-extrabold mb-4">Gazduig Creative Agency</h4>
            <ul className="font-light">
              <li className="mb-1 text-sm">
                <a className="flex flex-row" href="tel:+36302705363">
                  <FooterPhone className="w-3 mr-4" /> +36 30 270 5363
                </a>
              </li>
              <li className="mb-1 text-sm">
                <a className="flex flex-row" href="mailto:bence@gazduig.com">
                  <FooterMail className="w-4 mr-4" /> bence@gazduig.com
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4 lg:mt-0 mb-4">
            <h4 className="text-sm font-extrabold">Kötelező cuccok</h4>
            <ul className="font-light">
              <li className="mb-1  text-sm">
                <Link to="/privacy" className="text-base">
                  Adatvédelmi tájékoztató
                </Link>
              </li>
              <li className="mb-1 text-sm">
                <Link to="/cookie" className="text-base">
                  Süti tájékoztató (gluténmentes)
                </Link>
              </li>
              <li className="mb-1  text-sm">
                <Link to="/impresszum" className="text-base">
                  Impresszum
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-4 lg:mt-0 mb-4">
            <h4 className="text-sm font-extrabold">Dobj egy pacsit valahol</h4>
            <ul className="font-light">
              <li className="mb-1 text-sm">
                <a className="flex flex-row" target="_blank" rel="noreferrer" href="https://instagram.com/gazduig">
                  <FooterInsta className="w-4 mr-4" /> gazduig
                </a>
              </li>
              <li className="mb-1  text-sm">
                <a className="flex flex-row" target="_blank" rel="noreferrer" href="https://linkedin.com/in/gazduig">
                  <FooterLinkedin className="w-4 mr-4" /> in/gazduig
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4 lg:mt-0">
            <Link to="/contact">
              <button className="primary-btn">Beszélgessünk</button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
