import Card from "./components/Card";
import Header from "./components/Header";
import RightSide from "./components/RightSide";
import React from "react";

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')

  React.useEffect(() => {
    fetch('https://62fe0b08a85c52ee482e5644.mockapi.io/items').then((res) => {
      return res.json();
    }).then((json) => {
      setItems(json);
    })
  }, [])

  const onAddToCart = (obj) => { // 3. вызываем функцию, которая преобразует обьект
    setCartItems(prev => [...prev, obj]) // 4. setCartItems добавляет этот обьект в cartItems
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper"> {/* | 5. в этом месте передаются обьекты, которые есть в items */}
      {cartOpened ? <RightSide items={cartItems} onCartClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="content__title">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : `Все кроссовки`}</h1>
          <div className="content__search">
            <img src="/img/sneakers/find.svg" alt="search" />
            <input value={searchValue} type="text" placeholder="Поиск..." onChange={onChangeSearchInput}/>
          </div>
        </div>
        <div className="sneakers">
          {items.map((item) => (
            <Card
              key={item.imageUrl}
              title={item.title}
              imageUrl={item.imageUrl}
              price={item.price}
              onFavorite={() => alert('Вам понравилось')}
              onPlus={(obj) => onAddToCart(obj)} // 2. здесь мы получаем обьект из Card
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
