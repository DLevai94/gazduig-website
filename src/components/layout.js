import React from 'react';

import Header from './header';
import Footer from './footer';

function Layout({ children, ...props }) {
  return (
    <div className="flex flex-col min-h-screen" {...props}>
      <a href="#main-content" className="skip-link sr-only">
        Irány a tartalom
      </a>
      <Header />
      <main className="" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
