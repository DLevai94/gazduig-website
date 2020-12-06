import React from 'react';
import { Link } from 'gatsby';
import Circle from '../images/small-circle.svg';

const SolutionCategory = ({ excerpt, description, children, name, fullName }) => {
  return (
    <div className="bg-gray-100 mb-32">
      <div className="leading-snug md:px-32 md:py-16 flex flex-col">
        <div className="flex flex-row justify-between mb-16">
          <h2 className="font-black text-3xl">{`${name}`}</h2>
          <Link to="/contact">
            <button className="primary-btn">Ez kell, beszéljünk!</button>
          </Link>
        </div>
        <div>
          <div className="flex flex-row justify-between">
            <div className="flex-1 mr-8 relative">
              <h3 className="max-w-4xl font-display text-2xl font-extrabold leading-brand absolute z-10">
                Így hajthat hasznot számodra
              </h3>
              <img src={Circle} className="h-10 absolute left-0 top-0 -ml-6 -mt-3 z-0" />
              <p
                className="leading-tight font-light text-lg mb-28 mt-10"
                dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
            <div className="flex-1 relative">
              <h2 className="max-w-4xl font-display text-2xl font-extrabold mb-4 leading-brand absolute z-10">
                Röviden
              </h2>
              <img src={Circle} className="h-10 absolute left-0 top-0 -ml-6 -mt-3 z-0" />
              <p className="leading-tight max-w-4xl font-light text-lg mb-12 mt-10">{excerpt}</p>
            </div>
          </div>
          <div className="relative">
            {fullName ? (
              <h3 className="font-display text-2xl font-extrabold leading-brand absolute z-10">{` ${fullName}`}</h3>
            ) : (
              <h3 className="font-display text-2xl font-extrabold leading-brand absolute z-10">
                Ilyenkor általában ezeket csináljuk
              </h3>
            )}
            <img src={Circle} className="h-10 absolute left-0 top-0 -ml-6 -mt-3 z-0" />
            <div className="flex flex-wrap justify-start items-center pt-12">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionCategory;
