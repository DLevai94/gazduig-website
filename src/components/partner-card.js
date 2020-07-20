import React from 'react';
import Img from 'gatsby-image';

const PartnerCard = ({ title, description, imageURL }) => {
  return (
    <div className="rounded shadow-brand bg-white">
      <Img fluid={imageURL} className="max-w-full" alt={title} />
      <div className="p-4">
        <p className="font-extrabold">{title}</p>
        <p className="font-light">{description}</p>
      </div>
    </div>
  );
};

export default PartnerCard;
