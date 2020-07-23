import React from 'react';

const SolutionCategory = ({ excerpt, description, children, name }) => {
  return (
    <div
      className="leading-snug"
      // style={{
      //   background:
      //     'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(247,247,247,1) 41%, rgba(247,247,247,1) 100%)',
      // }}
    >
      <p className="max-w-4xl font-light text-xl mb-12">{excerpt}</p>
      <h2 className="max-w-4xl font-display text-2xl font-extrabold mb-4">Így hajthat hasznot számodra:</h2>
      <p className="max-w-4xl font-light text-xl mb-28" dangerouslySetInnerHTML={{ __html: description }}></p>
      <h2 className="max-w-4xl font-display text-2xl font-extrabold">{` ${name} közben általában ezeket csináljuk`}</h2>
      <div className="w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 col-gap-6 row-gap-6 mt-8 mb-16">{children}</div>
    </div>
  );
};

export default SolutionCategory;
