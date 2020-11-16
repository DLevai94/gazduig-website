import React from 'react';
import { graphql, Link } from 'gatsby';
import CrownIcon from '../components/svg/crown';
import CalendarIcon from '../components/svg/calendar';
import KeyIcon from '../components/svg/key';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Contact from '../components/contact-form';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO
        title={frontmatter?.title}
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
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-100 p-6 md:pt-32 md:px-16 mt-8">
          <div className="max-w-8/12">
            <h1 className="font-display font-black text-4xl max-w-7xl uppercase leading-brand">{frontmatter?.title}</h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-100 md:px-10 md:pb-12">
          <div className="md:rounded md:bg-white mb-4 md:mb-12 md:mx-6 flex flex-row p-4 md:shadow-brand justify-start items-center">
            <div className="icon">
              <CrownIcon className="w-8 mr-3" />
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className="font-light text-xs">Ugyfel</p>
              <p className="font-extrabold text-sm leading-tight">{frontmatter?.client}</p>
            </div>
          </div>

          <div className="md:rounded md:bg-white mb-4 md:mb-12 flex flex-row p-4 md:shadow-brand justify-start items-center">
            <div className="icon">
              <KeyIcon className="w-8 mr-3" />
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className="font-light text-xs">Megoldások</p>
              <p className="font-extrabold text-sm leading-tight">{frontmatter?.solutions}</p>
            </div>
          </div>

          <div className="md:rounded md:bg-white mb-4 md:mb-12 md:mx-6 flex flex-row p-4 md:shadow-brand justify-start items-center">
            <div className="icon">
              <CalendarIcon className="w-8 mr-3" />
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className="font-light text-xs">Ekkor készült</p>
              <p className="font-extrabold text-sm leading-tight">{frontmatter?.jobtime}</p>
            </div>
          </div>
        </div>

        <div className="md:px-16">
          <div>
            <p className="text-2xl font-black">Egy rövid összefoglaló</p>
            <div className="mt-8 font-light" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
        <div className="md:px-16 mt-16 mb-32">
          {frontmatter?.images?.map((image) => (
            <img key={image} src={image} alt={frontmatter?.title} className="w-100 mx-auto mb-8" />
          ))}
        </div>

        <section className="bg-white md:rounded md:shadow-brand py-8 px-8 md:px-36 z-50">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-display font-extrabold text-2xl  uppercase leading-brand">
              Tetszettek a látottak? Töltsd ki a lenti
              <br />
              formot, és alkossunk együtt valami ütőset!
            </h2>
          </div>
          <Contact />
        </section>
      </div>

      <section className="md:-mt-64 pt-36 md:pt-96 pb-36">
        <div className="container mx-auto text-left sm:px-6 lg:px-64">
          <h2 className="font-display font-extrabold text-2xl uppercase leading-brand mb-6">
            Még nem vagy 100%-ig biztos a dologban?
            <br />
            Nézz meg pár hasonlót is!
          </h2>
          <Link to="/portfolio">
            <button className="primary-btn">Irány a portfólió</button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "YYY MMMM DD")
        slug
        title
        client
        solutions
        jobtime
        images
      }
    }
  }
`;
