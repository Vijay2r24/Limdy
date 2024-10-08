import React from 'react';
import { FaList, FaTruck,FaClock, FaBan } from 'react-icons/fa';

const FilterBar = ({ selectedFilter, onFilterChange }) => {
  return (
    <div className="flex space-x-4 p-4 bg-gray-100 rounded-md">
      <button
        className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
          selectedFilter === 'All'
            ? 'bg-yellow-950 text-white'
            : 'bg-white text-gray-700'
        }`}
        onClick={() => onFilterChange('All')}
      >
        <FaList/>
        All
      </button>
      <button
        className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
          selectedFilter === 'Dispatched'
            ? 'bg-yellow-950 text-white'
            : 'bg-white text-gray-700'
        }`}
        onClick={() => onFilterChange('Dispatched')}
      >
        <FaTruck/>
        Dispatched
      </button>
      <button
        className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
          selectedFilter === 'Pending'
            ? 'bg-yellow-950 text-white'
            : 'bg-white text-gray-700'
        }`}
        onClick={() => onFilterChange('Pending')}
      >
        <FaClock/>
        Pending
      </button>
      <button
        className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
          selectedFilter === 'Canceled'
            ? 'bg-yellow-950 text-white'
            : 'bg-white text-gray-700'
        }`}
        onClick={() => onFilterChange('Canceled')}
      >
        <FaBan/>
        Cancelled
      </button>
    </div>
  );
};

export default FilterBar;
