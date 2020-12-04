import { Link } from 'gatsby';
import React, { useState } from 'react';
import MenuLogo from './svg/menuLogo';

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-white">
      <div className="mx-auto container">
        <div className="flex justify-between h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <MenuLogo className="w-24 sm:w-32" />
              <p className="sr-only">Gazduig Creative Agency Budapest</p>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex">
            {[
              {
                route: `/szolgaltatasok`,
                title: `Ebben segítünk`,
              },
              {
                route: `/portfolio`,
                title: `Ezeket csináltuk eddig`,
              },
              {
                route: `/neked-irtuk`,
                title: `Ezeket neked írtuk`,
              },
              {
                route: `/csapat`,
                title: `Ezek vagyunk`,
              },
            ].map((link) => (
              <Link
                activeClassName="border-b font-extrabold ml-8 inline-flex items-center px-1 pt-1 text-brand-blue-500 focus:outline-none hover:text-brand-blue-500 hover:border-brand-blue-500 focus:text-brand-blue-500 focus:border-brand-blue-500 transition duration-150 ease-in-out border-brand-blue-500"
                getProps={({ isPartiallyCurrent }) =>
                  isPartiallyCurrent
                    ? {
                        className:
                          'border-b font-extrabold ml-8 inline-flex items-center px-1 pt-1 text-brand-blue-500 focus:outline-none hover:text-brand-blue-500 hover:border-brand-blue-500 focus:text-brand-blue-500 focus:border-brand-blue-500 transition duration-150 ease-in-out border-brand-blue-500',
                      }
                    : {}
                }
                className="ml-8 inline-flex items-center px-1 pt-1 border-b border-transparent text-sm font-medium leading-5 focus:outline-none hover:text-brand-blue-700 hover:border-brand-blue-300 focus:text-brand-blue-700 focus:border-brand-blue-700 transition duration-150 ease-in-out menu-link"
                key={link.title}
                to={link.route}>
                {link.title}
              </Link>
            ))}
          </div>
          <div className="sm:ml-6 sm:flex sm:items-center">
            <Link to="/contact">
              <button className="primary-btn hidden md:inline-block" aria-label="Beszélgessünk">
                Beszélgessünk
              </button>
            </Link>
            <div className="flex items-center sm:hidden h-24">
              <button
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                onClick={() => toggleExpansion(!isExpanded)}>
                <svg
                  className={`${isExpanded ? 'hidden' : 'block'} h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isExpanded ? 'block' : 'hidden'} h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${isExpanded ? 'block' : 'hidden'} sm:hidden`}>
          <div className="pt-2 pb-3">
            {[
              {
                route: `/szolgaltatasok`,
                title: `Ebben segítünk`,
              },
              {
                route: `/portfolio`,
                title: `Ezeket csináltuk eddig`,
              },
              {
                route: `/neked-irtuk`,
                title: `Ezeket neked írtuk`,
              },
              {
                route: `/csapat`,
                title: `Ezek vagyunk`,
              },
            ].map((link) => (
              <Link
                activeClassName="text-sm font-extrabold mt-1 block pl-3 pr-4 pt-2 border-0 text-brand-blue-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
                getProps={({ isPartiallyCurrent }) =>
                  isPartiallyCurrent
                    ? {
                        className:
                          'text-sm font-extrabold mt-1 block pl-3 pr-4 pt-2 border-0 text-brand-blue-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out',
                      }
                    : {}
                }
                className="mt-1 block pl-3 pr-4 pt-2 border-l-4 border-b border-transparent font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
                key={link.title}
                to={link.route}>
                {link.title}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-400">
            <div className="flex items-center">
              <Link to="/contact">
                <button className="primary-btn" aria-label="Beszélgessünk">
                  Beszélgessünk
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
