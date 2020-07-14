import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PurpleBlob from '../images/purple-blob.svg';
// import PurpleBlobSvg from '../components/svg/purpleBlob';

function AboutPage() {
  const data = useStaticQuery(graphql`
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
      <section
        className="container mx-auto flex flex-col bg-right bg-no-repeat"
        style={{ backgroundImage: `url(${PurpleBlob})` }}>
        <div className="md:w-1/2">
          <h2 className="text-4xl leading-tight font-display font-extrabold">
            Írtunk egy összefoglalót arról, milyen módszerrel szerezzük az ügyfeleink 90%-át Instáról
          </h2>
        </div>
        <div className="bg-white min-h-64 w-full shadow-xl flex justify-start items-center my-32 p-8">
          <div className="flex flex-col w-full md:w-1/2">
            <h3 className="text-2xl leading-tight font-display font-extrabold">
              Pötyögd be az e-mail címed, és már küldjük is!
            </h3>
            <input className="w-full mb-6 form-input" id="email" placeholder="Az e-mail címed" type="email" />
            <input className="w-full mb-6 form-input" id="name" placeholder="Hogy szólíthatunk?" type="text" />
            <div>
              <input type="checkbox" />
              <span>
                Elfogadom az adatvédelmi nyilatkozatot és engedélyezem, hogy a megadott elérhetőségeken felvegyétek
                velem a kapcsolatot.
              </span>
            </div>
            <button className="primary-btn">Jöhet!</button>
          </div>
          <div className="w-0 md:w-1/2 justify-center items-center content-center object-center">
            <Img fluid={data.file.childImageSharp.fluid} className="w-1/2" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl leading-tight font-display font-extrabold mb-4">
            Most inkább nézelődnél
            <br /> olvasás helyett? No problem!
          </h2>
          <button className="primary-btn">Irány a portfólió</button>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
