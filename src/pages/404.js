import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: nem található" />
      <div className="flex flex-col flex-1 centered h-screen w-screen mx-auto container">
        <div className="bg-brand-purple-500 rounded shadow-brand my-8 p-3 max-h-32 text-center">
          <h2 className="text-2xl text-white font-extrabold font-display">
            Úgy tűnik ezt az oldalt elvitték a földönkívüliek... 🤷‍♂️🛸
          </h2>
        </div>
        <Link to="/">
          <button className="primary-btn">Vissza a kezdetekhez</button>
        </Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
