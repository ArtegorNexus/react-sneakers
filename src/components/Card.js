import React from "react";

function Card({ imageUrl, title, price, onFavorite, onPlus  }) {
	const [isAdded, setIsAdded] = React.useState(false)
	const [isFavorite, setIsfavorite] = React.useState(false)

	const onClickPlus = () => {
		onPlus({title, imageUrl, price}) // 1. передаем данные Card в виде обьекта 
		setIsAdded(!isAdded)
	}

	const onClickFavorite = () => {
		setIsfavorite(!isFavorite)
		onFavorite()
	}

	return (
		<div className="card">
			<div className="card__top">
				<div className="card__favorite">
					<img onClick={onClickFavorite} src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} width={32} height={32} alt="heart unlike" />
				</div>
				<img src={imageUrl} alt="1" />
				<p>{title}</p>
			</div>
			<div className="card__bottom">
				<div className="card__price">
					<span>
						Цена:
					</span>
					<b>{price} руб.</b>
				</div>
				<img className="card__plus" onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
			</div>
		</div>
	)
}

export default Card;