import React from 'react';

const TabBar = ({ categories, chosenCategory, setCategory }) => {
  return (
    <div className="overflow-hidden bg-white pt-2 px-16 shadow-brand rounded">
      <div className="sm:hidden">
        <select
          aria-label="Selected tab"
          className="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-brand-red-500 focus:border-brand-red-500 sm:text-sm sm:leading-5 transition ease-in-out duration-150"
          onSelect={(e) => setCategory(e)}>
          {categories?.map((category) => (
            <option key={category.key} value={category.key === chosenCategory || 'all'}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            {categories?.map((category) => (
              <button
                key={category.key}
                onClick={() => setCategory(category.key)}
                className={`whitespace-no-wrap mr-4 py-4 px-1 border-b-2 ${
                  category.key !== chosenCategory
                    ? 'border-transparent font-medium'
                    : 'border-brand-red-500 font-extrabold text-brand-red-500'
                } text-sm leading-5 hover:text-gray-700 hover:border-gray-700 focus:outline-none transition-colors duration-200 ease-in`}>
                {category?.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TabBar;
