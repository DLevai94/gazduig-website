import React from 'react';
import { Link } from 'gatsby';
import Arrow from '../images/arrow.svg';

const ProjectCard = ({ edge }) => {
  return (
    <Link to={`${edge?.node?.frontmatter?.slug}`}>
      <div>
        <div className="relative overflow-hidden bg-white h-32 lg:h-80 bg-cover bg-no-repeat group">
          <img
            src={edge?.node?.frontmatter?.thumbnail}
            alt={edge?.node?.frontmatter?.title}
            className="transform duration-400 transition group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 py-3 max-w-xs">
            <p className="font-light truncate text-sm group-hover:text-brand-blue-500">
              {edge?.node?.frontmatter?.jobtime}
            </p>
            <p className="font-extrabold truncate text-lg group-hover:text-brand-blue-500">
              {edge?.node?.frontmatter?.title}
            </p>
            <img src={Arrow} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
