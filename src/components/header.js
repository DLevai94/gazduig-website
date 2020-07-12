import { Link } from 'gatsby';
import React, { useState } from 'react';
import MenuLogo from './svg/menuLogo';

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="text-gray-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
          <MenuLogo className="w-32" />
        </Link>
        <button
          className="flex items-center px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}>
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <nav className={`md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center`}>
          {[
            {
              route: `/szolgaltatasok`,
              title: `Ebben segítünk`,
            },
            {
              route: `/munkaink`,
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
            <Link className="mr-5 hover:text-gray-900" key={link.title} to={link.route}>
              {link.title}
            </Link>
          ))}
        </nav>
        <button className="inline-flex rounded items-center shadow bg-teal-500 px-4 py-2 text-white hover:bg-teal-400">
          Beszélgessünk
        </button>
      </div>
    </header>
  );
}

export default Header;
