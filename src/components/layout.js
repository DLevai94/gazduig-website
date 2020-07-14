import React from 'react';

import Header from './header';
import Footer from './footer';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <a href="#main-content" className="skip-link sr-only">
        Irány a tartalom
      </a>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
