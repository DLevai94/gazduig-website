import React from 'react';
import { Link } from 'gatsby';
import FooterLogo from './svg/footerLogo';
import FooterInsta from './svg/footerInsta';
import FooterLinkedin from './svg/footerLinkedin';
import FooterMail from './svg/footerMail';
import FooterPhone from './svg/footerPhone';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-sm font-light">
      <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
        <div className="flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link to="/" className="flexitems-center md:justify-start justify-center">
            <FooterLogo className="w-32" />
          </Link>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-extrabold mb-6">Gazduig Creative Agency</h2>
            <nav className="list-none">
              <li className="mb-1">
                <a className="flex items-center justify-center md:justify-start" href="tel:+36302705363">
                  <FooterPhone className="w-3 mr-4" /> +36 30 270 5363
                </a>
              </li>
              <li>
                <a className="flex items-center justify-center md:justify-start" href="mailto:bence@gazduig.com">
                  <FooterMail className="w-4 mr-4" /> bence@gazduig.com
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-extrabold mb-6">Kötelező cuccok</h2>
            <nav className="list-none mb-10">
              <li className="mb-1">
                <a className="">Adatvédelmi tájékoztató</a>
              </li>
              <li className="mb-1">
                <a className="">Süti tájékoztató (gluténmentes)</a>
              </li>
              <li>
                <a className="">Impresszum</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-extrabold mb-6">Dobj egy pacsit valahol</h2>
            <nav className="list-none mb-10">
              <li className="mb-1">
                <a
                  className="flex items-center justify-center md:justify-start"
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/gazduig">
                  <FooterInsta className="w-4 mr-4" /> gazduig
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="flex items-center justify-center md:justify-start"
                  target="_blank"
                  rel="noreferrer"
                  href="https://linkedin.com/in/gazduig">
                  <FooterLinkedin className="w-4 mr-4" /> in/gazduig
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <button className="primary-btn">Beszélgessünk</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
