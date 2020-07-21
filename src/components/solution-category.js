import React from 'react';

const SolutionCategory = ({ excerpt, description, children, name }) => {
  return (
    <div className="w-3/4 leading-snug">
      <p className="font-light text-xl mb-12">{excerpt}</p>
      <h2 className="font-display text-2xl font-extrabold mb-4">Így hajthat hasznot számodra:</h2>
      <p className="font-light text-xl mb-16" dangerouslySetInnerHTML={{ __html: description }}></p>
      <h2 className="font-display text-2xl font-extrabold">{` ${name} közben általában ezeket csináljuk`}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 col-gap-6 row-gap-3 mt-8 mb-16">{children}</div>
    </div>
  );
};

export default SolutionCategory;
