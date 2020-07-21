import React from 'react';

const Hero = ({ title, subtitle, icon }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-16 h-64 bg-transparent flex justify-between">
      <div className="w-full md:w-5/12 flex flex-col justify-center items-start">
        <h1 className="text-5xl font-display font-extrabold leading-tight">{title}</h1>
        <p className="text-light text-lg">{subtitle}</p>
      </div>
      <div
        className="hidden md:block md:w-1/2 flex items-center justify-end"
        style={{ animation: 'float 4s ease-in-out infinite' }}>
        {icon}
      </div>
    </div>
  );
};

export default Hero;
