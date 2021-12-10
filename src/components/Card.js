import { auto } from 'async';
import React from 'react';
function Card({ onClickLiked, onClickAdd, title, imageUrl, price }) {
  const [addBottonSet, bottonSet] = React.useState(false);
  const [likedBottonSet, likedSet] = React.useState(false);
  const onLike = () => {
    onClickLiked();
    likedSet(!likedBottonSet);
  };
  const onAdd = () => {
    onClickAdd({ title, imageUrl, price });
    bottonSet(!addBottonSet);
  };
  return (
    <div className="card">
      <img
        className="like"
        width={32}
        height={32}
        src={likedBottonSet ? '/img/like-on.svg' : '/img/like-off.svg'}
        alt="like"
        onClick={onLike}
      />

      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <p>{title}</p>
      <div className="d-flex align-center justify-between">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price + ' руб.'}</b>
        </div>

        <img
          className="add "
          onClick={onAdd}
          width={32}
          height={32}
          src={addBottonSet ? '/img/added.svg' : '/img/add.svg'}
          alt="add"
        />
      </div>
    </div>
  );
}

export default Card;
