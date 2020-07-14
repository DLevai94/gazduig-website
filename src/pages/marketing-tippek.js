import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';

function AboutPage() {
  cosnt data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "writer.png" }) {
      childImageSharp {
        fluid(maxHeight: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);
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
        <div className="bg-white h-64 w-full shadow-xl flex justify-start items-center my-32 px-8 py-16">
          <div className="flex flex-col w-1/2">
            <h3 className="text-2xl leading-tight font-display font-extrabold">
              Pötyögd be az e-mail címed, és már küldjük is!
            </h3>
            <input type="email" placeholder="" />
            <input type="text" placeholder="" />
            <div>
              <input type="checkbox" />
              <span>
                Elfogadom az adatvédelmi nyilatkozatot és engedélyezem, hogy a megadott elérhetőségeken felvegyétek
                velem a kapcsolatot.
              </span>
            </div>
            <button className="primary-btn">Jöhet!</button>
          </div>
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <div>
          <h2 className="text-4xl leading-tight font-display font-extrabold mb-4">
            Most inkább nézelődnél olvasás helyett? No problem!
          </h2>
          <button className="primary-btn">Irány a portfólió</button>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
