import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NewsletterForm from '../components/newsletter-form';

function IgHacks({ custom = '' }) {
  return (
    <Layout>
      <SEO
        keywords={[
          'kreatív esettanulmány',
          'instagram esettanulmány',
          'insta esettanulmány',
          'instagram márkaépítés',
          'ütős',
          'kreatív ügynökség',
          'kreatív ügynökség budapest',
          'gazduig',
        ]}
        title="Ezeket neked írtuk"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-32">
          <NewsletterForm custom={custom} />
        </div>
      </div>
      <div className="mb-32 px-8 container mx-auto text-center">
        <h2 className="text-4xl leading-brand font-display font-extrabold mb-10">
          Most inkább nézelődnél olvasás helyett? Legyen így!
        </h2>
        <Link to="/portfolio">
          <button className="primary-btn">Irány a portfólió</button>
        </Link>
      </div>
    </Layout>
  );
}

export default IgHacks;
