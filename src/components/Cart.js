function Cart({ onCartOff, items = [], onRemove }) {
  return (
    <div className=" cartPage">
      <div className="cartElements d-flex flex-column">
        <div className="d-flex justify-between">
          <img onClick={onCartOff} className="closeCart ml-30" src="/img/remove.svg" alt="remove" />
          <h1 className="m-30">Корзина</h1>
        </div>

        <div className="cartCards d-flex flex-column ml-30 mr-30">
          {items.map((obj) => (
            <div className="cartItems d-flex align-center ">
              <img className="cros m-20" width={70} height={70} src={obj.imageUrl} alt="cros" />
              <div className="d-flex flex-column">
                <span>{obj.title}</span>
                <b>{obj.price} руб.</b>
              </div>

              <img
                onClick={() => onRemove(obj.id)}
                className="remove ml-10"
                src="/img/remove.svg"
                alt="remove"
              />
            </div>
          ))}
        </div>
        <div className="lowerPos">
          <div className="ready d-flex flex-column m-30 ">
            <div className="also d-flex justify-between ">
              <span>Итого: </span>
              <div className="punkts"></div>
              <b>21 498 руб. </b>
            </div>
            <div className="d-flex justify-between ">
              <span>Налог 5%: </span>
              <div className="punkts"></div>
              <b>1074 руб. </b>
            </div>
          </div>
          <button className="greenBtn d-flex align-center justify-between">
            <span>Оформить заказ</span>

            <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Cart;
