import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
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
        <div className="rounded w-100 pt-32 px-28 pb-12 mb-20 bg-brand-purple-500">
          <div className="max-w-8/12">
            <h1 className="font-display text-white font-extrabold text-4xl">{frontmatter?.title}</h1>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-12">
          <div className="col-span-2">
            <div className="md:rounded md:bg-white mb-12 flex flex-row py-2 px-4">
              <div className="icon"></div>
              <div className="flex flex-col justify-start items-center">
                <p className="font-light text-sm">Ugyfel</p>
                <p className="font-extrabold text-sm leading-tight">{frontmatter?.client}</p>
              </div>
            </div>
          </div>
          <div className="col-span-10">
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
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
      }
    }
  }
`;
