import React from 'react';

const Hero = ({ title, subtitle, icon }) => {
  return (
    <div className="container mx-auto mt-32 h-64 bg-transparent flex justify-between">
      <div className="max-w-1/2 flex flex-col justify-center items-start">
        <h1 className="text-4xl font-display font-extrabold leading-tight">{title}</h1>
        <p className="text-light text-lg">{subtitle}</p>
      </div>
      <div className="w-1/2 flex items-center justify-end">{icon}</div>
    </div>
  );
};

export default Hero;
