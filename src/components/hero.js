import React from 'react';

const Hero = ({ title, subtitle, icon }) => {
  return (
    <div className="container mx-auto my-32 h-64 bg-transparent flex">
      <div className="w-1/2">
        <h1 className="text-4xl font-display font-extrabold">{title}</h1>
        <p className="text-light">{subtitle}</p>
      </div>
      <div className="w-1/2">{icon}</div>
    </div>
  );
};

export default Hero;
