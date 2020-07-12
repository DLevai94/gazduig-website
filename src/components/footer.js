import React from 'react';
import { Link } from 'gatsby';
import FooterLogo from './svg/footerLogo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-500 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link to="/" className="flexitems-center md:justify-start justify-center">
            <FooterLogo className="w-32" />
          </Link>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-display font-extrabold text-white text-sm mb-3">Gazduig Creative Agency</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="tel:+36302705363">
                  +36 30 270 5363
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="mailto:bence@gazduig.com">
                  bence@gazduig.com
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-display font-extrabold text-white text-sm mb-3">Kötelező cuccok</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Adatvédelmi tájékoztató</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Süti tájékoztató (gluténmentes)</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Impresszum</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-display font-extrabold text-white text-sm mb-3">Dobj egy pacsit valahol</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">gazduig</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">in/gazduig</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <button className="bg-brand-red-500 inline-flex rounded items-center shadow px-4 py-2 text-white hover:bg-brand-red-400">
              Beszélgessünk
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
