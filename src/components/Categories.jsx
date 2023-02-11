import React from 'react';

function Categories() {
  const [activeCategory, setActiveCategory] = React.useState(0);
  const categoriesNames = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="categories">
      <ul>
        {categoriesNames.map((name, index) => {
          return (
            <li
              key={index}
              onClick={() => onClickCategory(index)}
              className={activeCategory === index ? 'active' : ''}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
