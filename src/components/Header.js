function Header(props) {
	return (
		<header className="header">
			<div className="header__left">
				<img width={40} height={40} src="/img/logo.png" />
				<div className="header__info">
					<h3>React Sneakers</h3>
					<p>Магазин лучших кроссовок</p>
				</div>
			</div>
			<ul className="header__right">
				<li className="header__cart-info" onClick={props.onClickCart}>
					<img width={18} height={18} src="/img/cart.svg" alt="cart" />
					<span>1205 руб.</span>
				</li>
				<li>
					<img width={18} height={18} src="/img/like.svg" alt="like" />
				</li>
				<li>
					<img width={18} height={18} src="/img/user.svg" alt="user" />
				</li>
			</ul>
		</header>
	)
}

export default Header;