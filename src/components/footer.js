import React from 'react';
import { Link } from 'gatsby';
import FooterInsta from './svg/footerInsta';
import FooterMail from './svg/footerMail';
import FooterPhone from './svg/footerPhone';
import MenuLogo from './svg/menuLogo';

const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-900">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:pt-16 lg:px-8">
        <div className="flex flex-row justify-between items-start">
          <div>
            <Link to="/" className="">
              <MenuLogo className="w-32" />
              <p className="sr-only">Gazduig Creative Agency Budapest</p>
            </Link>
          </div>
          <div>
            <p className="font-extrabold mb-4">Gazduig Creative Agency</p>
            <ul className="font-light">
              <li className="mb-1 text-sm hover:text-brand-blue-500 hover:underline">
                <a className="flex flex-row  items-center content-center" href="mailto:szevasz@gazduig.com">
                  <FooterMail className="w-4 mr-4" /> szevasz@gazduig.com
                </a>
              </li>
              <li className="mb-1 text-sm hover:text-brand-blue-500 hover:underline">
                <a className="flex flex-row items-center content-center" href="tel:+36302705363">
                  <FooterPhone className="w-3 mr-4" /> +36 30 270 5363
                </a>
              </li>
              <li className="mb-1 text-sm hover:text-brand-blue-500 hover:underline">
                <a
                  className="flex flex-row items-center content-center"
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/gazduig">
                  <FooterInsta className="w-4 mr-4" /> gazduig
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4 lg:mt-0">
            <p className="font-extrabold mb-4">Jogi cuccok</p>
            <ul className="font-light text-sm">
              <li className="mb-1 text-sm hover:text-brand-blue-500 hover:underline">
                <Link to="/privacy">Adatvédelmi tájékoztató</Link>
              </li>
              <li className="mb-1 text-sm hover:text-brand-blue-500 hover:underline">
                <Link to="/cookie">Süti tájékoztató (gluténmentes)</Link>
              </li>
              <li className="mb-1 text-sm hover:text-brand-blue-500 hover:underline">
                <Link to="/impresszum">Impresszum</Link>
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
