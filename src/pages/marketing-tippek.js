import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`marketing tippek`, `instagram marketing`, `instagram tippek`, `ügyfélszerzés instagrammon`]}
        title="Instagram Marketing Tippek"
      />
      <section className="container mx-auto flex flex-col">
        <div className="md:w-1/2">
          <h2 className="text-4xl leading-tight font-display font-extrabold">
            Írtunk egy összefoglalót arról, milyen módszerrel szerezzük az ügyfeleink 90%-át Instáról
          </h2>
        </div>
        <div>
          <div></div>
          <img />
        </div>
        <div>
          <h2>Most inkább nézelődnél olvasás helyett? No problem!</h2>
          <button className="primary-btn">Irány a portfólió</button>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
