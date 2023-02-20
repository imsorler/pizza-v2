import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaSkeleton from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';
import Card from './Card';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://63ebc15cbe929df00ca1b230.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((pizzas) => {
        setItems(pizzas);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
          : items.map(({ id, title, price, imageUrl, sizes, types }) => (
              <PizzaBlock
                key={id}
                title={title}
                price={price}
                image={imageUrl}
                sizes={sizes}
                types={types}
              />
            ))}
      </div>
    </div>
  );
};

export default Home;
