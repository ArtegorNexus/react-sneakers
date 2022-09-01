function RightSide({ onCartClose, items = []}) {
	return (
		<div className="right-side__back-shadow">
			<div className="right-side">
				<h3 className="right-side__title">Корзина <img src="/img/sneakers/delete.svg" alt="delete" className="right-side__delete" onClick={onCartClose} /></h3>
				<div className="right-side__items">
					{
						items.map((obj) => (
							<div className="right-side__item">
								<div className="right-side__img"><img width={70} height={70} src={obj.imageUrl} alt="3" /></div>
								<div className="right-side__box">
								<div className="right-side__crossname">{obj.title}</div>
								<div className="right-side__price">{obj.price} руб.</div>
							</div>
							<img src="/img/sneakers/delete.svg" alt="delete" className="right-side__delete" />
							</div>
						))
					}
				</div>
				<div className="right-side-bottom">
					<ul>
						<li>
							<span>Итого: </span>
							<div></div>
							<b>21 480 руб.</b>
						</li>
						<li>
							<span>Налог 5%: </span>
							<div></div>
							<b>1111 руб. </b>
						</li>
					</ul>
					<button className="green-button">Оформить заказ <img src="/img/sneakers/arrow.svg" alt="arrow" /></button>
				</div>
			</div>
		</div>
	);
}

export default RightSide;