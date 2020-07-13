import { Link } from 'gatsby';
import React, { useState } from 'react';
import MenuLogo from './svg/menuLogo';

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="container text-gray-900 body-font font-light bg-fixed bg-white mx-auto sticky flex flex-wrap p-2 pt-10 md:px-5 flex-row justify-between items-center w-full">
      <div className="mr-12">
        <Link to="/">
          <MenuLogo className="w-24 sm:w-32" />
        </Link>
      </div>
      <div className="block lg:hidden" onClick={() => toggleExpansion(!isExpanded)}>
        <button className="flex items-center px-3 py-2 border rounded text-grey-300 border-grey-500 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={`${isExpanded ? `block` : `hidden`} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow">
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
              route: `/marketing-tippek`,
              title: `Ezeket neked írtuk`,
            },
            {
              route: `/csapat`,
              title: `Ezek vagyunk`,
            },
          ].map((link) => (
            <Link
              activeClassName="text-brand-red-500 font-extrabold"
              getProps={({ isPartiallyCurrent }) =>
                isPartiallyCurrent ? { className: 'text-brand-red-500 font-extrabold' } : {}
              }
              className="block mt-4 lg:inline-block lg:mt-0 mr-6 hover:text-gray-900"
              key={link.title}
              to={link.route}>
              {link.title}
            </Link>
          ))}
        </div>
        <button className="primary-btn">Beszélgessünk</button>
      </div>
    </nav>
  );
}

export default Header;
