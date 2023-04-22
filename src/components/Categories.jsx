import React, { useState } from 'react';

const Categories = ({ value, onClickCategory }) => {


  const isActive = (index) => (value === index ? 'active' : '');

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            onClick={() => onClickCategory(index)}
            className={isActive(index)}
            key={index}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
