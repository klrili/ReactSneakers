//import logo from './logo.svg';
//import './App.css';
import 'macro-css';
import './index.scss';
import Card from './components/Card.js';
import Header from './components/Header.js';
import Cart from './components/Cart.js';
import React from 'react';
import axios from 'axios';

function App() {
  const [items, itemsSet] = React.useState([]);
  const [cartItems, cartItemsSet] = React.useState([]);
  const [search, searchSet] = React.useState('');
  const [onClickCart, onClickCartSet] = React.useState(false);

  // search.split('');
  // console.log(search.split(''));
  // console.log(search.length);

  React.useEffect(() => {
    axios.get('https://615375453f4c430017159376.mockapi.io/items').then((res) => {
      itemsSet(res.data);
    });
    axios.get('https://615375453f4c430017159376.mockapi.io/cart').then((res) => {
      cartItemsSet(res.data);
    });
  }, []);

  React.useEffect(() => {}, []);
  const onRemoveCart = (id) => {
    axios.delete(`https://615375453f4c430017159376.mockapi.io/cart/${id}`);
    cartItemsSet((prev) => prev.filter((item) => item.id !== id));
  };
  const onAddToCart = (obj, cartObj) => {
    cartItems.map((checkCartBotton, index) => {
      if (
        (obj.title === checkCartBotton.title,
        obj.price === checkCartBotton.price,
        obj.imageUrl === checkCartBotton.imageUrl)
      ) {
        cartObj = cartItems;
        cartObj = {
          data: cartObj.filter((_, i) => i !== index), //!!!!!!!!!!!!!!!!!!!!
        };
        cartItemsSet(cartObj.data);

        obj = '';
      }
    });
    if (obj === '') {
    } else {
      axios.post('https://615375453f4c430017159376.mockapi.io/cart', obj);
      cartItemsSet((prev) => [...prev, obj]);
    }
  };
  const onSearchInput = (event) => {
    searchSet(event.target.value);
  };

  return (
    <div className="centralPage ">
      {onClickCart ? (
        <Cart items={cartItems} onCartOff={() => onClickCartSet(false)} onRemove={onRemoveCart} />
      ) : null}

      <Header onCartOn={() => onClickCartSet(true)} />
      <div className="d-flex justify-between align-center">
        <h1 className="d-flex flex-wrap">
          {search ? `Поиск по запросу:"${search}"` : 'Все кроссовки'}
        </h1>
        <div className="searchBlock d-flex align-center">
          <img width={15} height={15} src="/img/search.svg" alt="search" />
          {search && (
            <img
              onClick={() => searchSet('')}
              className="clear  cu-p"
              src="/img/remove.svg"
              alt="clear"
            />
          )}
          <input onChange={onSearchInput} value={search} placeholder="text..." />
        </div>
      </div>
      <div className="cards d-flex flex-wrap">
        {items.map((item, index) =>
          search === '' ? (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickLiked={() => console.log('click on like')}
              onClickAdd={(obj) => {
                onAddToCart(obj);
              }}
            />
          ) : item.title.toLowerCase().includes(search.toLowerCase()) === true ? (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickLiked={() => console.log('click on like')}
              onClickAdd={(obj) => {
                onAddToCart(obj);
              }}
            />
          ) : null,
        )}
      </div>
    </div>
  );
}

export default App;
