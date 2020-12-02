import React from 'react';

const SolutionCategory = ({ excerpt, description, children, name, fullName }) => {
  return (
    <div className="bg-gray-100 mb-32">
      <div
        className="leading-snug md:px-32 md:py-16 flex"
        // style={{
        //   background:
        //     'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(247,247,247,1) 41%, rgba(247,247,247,1) 100%)',
        // }}
      >
        <h2 className="font-black text-3xl block w-full">{`${name}`}</h2>
        <div>
          <h3 className="max-w-4xl font-display text-2xl font-extrabold mb-4 leading-brand">
            Így hajthat hasznot számodra
          </h3>
          <p className="max-w-4xl font-light text-lg mb-28" dangerouslySetInnerHTML={{ __html: description }}></p>
          {fullName ? (
            <h3 className="max-w-4xl font-display text-2xl font-extrabold leading-brand">{` ${fullName}`}</h3>
          ) : null}
        </div>
        <div>
          <h2 className="max-w-4xl font-display text-2xl font-extrabold mb-4 leading-brand">Röviden</h2>
          <p className="max-w-4xl font-light text-lg mb-12">{excerpt}</p>
        </div>

        {name ? (
          <h3 className="max-w-4xl font-display text-2xl font-extrabold leading-brand">{` Ilyenkor általában ezeket csináljuk`}</h3>
        ) : null}
        <div className="w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 col-gap-6 row-gap-6 mt-8 mb-16">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SolutionCategory;
