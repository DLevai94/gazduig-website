import React from 'react';
import Astronaut from '../images/astronaut.png';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Contact from '../components/contact-form';

function ContactPage() {
  return (
    <Layout className="bg-no-repeat bg-right-bottom bg-contain" style={{ backgroundImage: `url(${Astronaut})` }}>
      <SEO
        keywords={[
          'kreatív',
          'ügynökség',
          'budapest',
          'budapesti kreatív ügynökség',
          'creative agency budapest',
          'arculattervezés',
          'márka',
          'ütős',
          'gazduig',
        ]}
        title="Beszélgessünk"
      />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mt-48 max-w-2xl">
          <h2 className="font-display font-extrabold text-5xl leading-tight">
            Kis lépés ez neked, de nagy lépés lehet a márkádnak!
          </h2>
          <p className="font-light text-xl">Töltsd ki a lenti formot, és alkossunk együtt valami ütőset!</p>
        </div>
        <Contact />
      </section>
    </Layout>
  );
}

export default ContactPage;
