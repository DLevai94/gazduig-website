import React from 'react';

import Header from './header';
import Footer from './footer';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <a href="#main-content" className="skip-link sr-only">
        Irány a tartalom
      </a>
      <Header />

      <main className="flex-1 w-full">{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
