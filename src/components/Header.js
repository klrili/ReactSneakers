function Header(props) {
  return (
    <header className="d-flex align-center justify-between">
      <div className="leftSide d-flex align-center">
        <img className="mr-15" width={40} height={40} src="/img/logo.png" alt="logo" />

        <div className="">
          <h2>REACT SNEAKERS</h2>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>

      <div className="rightSide d-flex align-center">
        <img onClick={props.onCartOn} className="mr-10" src="/img/cart.svg" alt="cart" />
        <span className="mr-30">1205 руб.</span>
        <img className="mr-30" src="/img/like.svg" alt="liked" />
        <img src="/img/user.svg" alt="profile" />
      </div>
    </header>
  );
}
export default Header;
