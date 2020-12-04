import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Contact from '../components/contact-form';

function ContactPage() {
  return (
    <Layout>
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
      <section className="container max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 my-32">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-none mb-4">
            Kis lépés ez neked, de nagy lépés lehet a márkádnak!
          </h2>
          <p className="font-light text-xl">Töltsd ki a lenti formot, és alkossunk együtt valami ütőset!</p>
        </div>
        <Contact showMoon />
      </section>
    </Layout>
  );
}

export default ContactPage;
