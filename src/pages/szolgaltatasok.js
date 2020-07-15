import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';

const Services = () => {
  return (
    <Layout>
      <SEO
        keywords={[
          'arculattervezés budapest',
          'arculattervezés',
          'webdizájn budapest',
          'webdizájn',
          'kreatív ügynökség budapest',
          'budapest creative agency',
          'instagram márkaépítés',
          'insta márkaépítés',
          'ütős',
          'gazduig',
        ]}
        title="Ebben segítünk"
      />
      <Hero
        title=""
        subtitle="Mindig azon vagyunk, hogy újat, maradandót és persze ütőset alkossunk. Íme pár korábbi példa."
        icon={null}
      />
      <p>szolgaltatasok</p>
    </Layout>
  );
};

export default Services;
