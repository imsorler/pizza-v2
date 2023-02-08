import React from 'react';

function Categories() {
  const [activeCategory, setActiveCategory] = React.useState(0);

  const onClickCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="categories">
      <ul>
        <li onClick={() => onClickCategory(0)} className={activeCategory === 0 ? 'active' : ''}>
          Все
        </li>
        <li onClick={() => onClickCategory(1)} className={activeCategory === 1 ? 'active' : ''}>
          Мясные
        </li>
        <li onClick={() => onClickCategory(2)} className={activeCategory === 2 ? 'active' : ''}>
          Вегетарианская
        </li>
        <li onClick={() => onClickCategory(3)} className={activeCategory === 3 ? 'active' : ''}>
          Гриль
        </li>
        <li onClick={() => onClickCategory(4)} className={activeCategory === 4 ? 'active' : ''}>
          Острые
        </li>
        <li onClick={() => onClickCategory(5)} className={activeCategory === 5 ? 'active' : ''}>
          Закрытые
        </li>
      </ul>
    </div>
  );
}

export default Categories;
