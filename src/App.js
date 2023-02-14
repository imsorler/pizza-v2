import React from 'react';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import './scss/app.scss';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://63ebc15cbe929df00ca1b230.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((pizzas) => {
        setItems(pizzas);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map(({ id, title, price, imageUrl, sizes, types }) => (
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
      </div>
    </div>
  );
}

export default App;
