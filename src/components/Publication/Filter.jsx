import React from 'react';

export const Filter = ({ activeFilter, onFilterChange }) => {
  const filterOptions = [
    'Todas',
    'Taller', 
    'Tecnología',
    'Práctica Supervisada'
  ];

  return (
    <div className="ml-72 mb-6">
      <h3 className="text-sm ml-10 font-medium text-gray-500 mb-2">Filtros:</h3>
      <div className="flex flex-wrap gap-2 ml-10">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => onFilterChange(option)}
            className={`px-4 py-2 text-sm rounded-full transition-all ${
              activeFilter === option
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};