import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';

const ImpressPage = () => {
  return (
    <Layout>
      <Hero title="Impresszum" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        Szolgáltató neve: Gazdig Bence E.V
        <br />
        Szolgáltató székhelye, telephelye: 8427 Bakonybél Fürdő utca 7.
        <br />
        mail: szevasz@gazduig.com
        <br />
        Adószám: 6987652-1-39
        <br />
        Tárhely szolgáltató neve, elérhetősége: Sybell Informatika Kft. Székhely: 1158 Budapest, Késmárk u. 7/B 2. em.
        206.
        <br />
        Ügyfélszolgálati iroda: 1158 Budapest, Késmárk u. 7/B 2. em. 206.
        <br />
        E-mail cím: hello@sybell.hu
        <br />
        Telefonszám: +36 1 707 67 26
      </div>
    </Layout>
  );
};

export default ImpressPage;
