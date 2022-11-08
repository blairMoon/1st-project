import React, { useState } from 'react';
import './ProductList.scss';

function ProductList({ converPrice, onRemove, cart }) {
  //제품 수량 체크
  let [Quan, setQuan] = useState(1);
  // 버튼 클릭 시 수량 +1 or -1
  const onClickPlus = () => {
    setQuan(Quan + 1);
  };
  const onClickMinus = () => {
    setQuan(Quan !== 0 ? Quan - 1 : (Quan = 0));
  };

  const priceSum = Quan * cart.price;
  // console.log(cart.id);
  return (
    <div className="boxSizing">
      <li className="productLi">
        <input className="checkBoxBtn" type="checkbox" />
        <img className="produntImg" alt="" src={cart.img} />
        <div className="productTitle">{cart.title}</div>
        <div className="pmButtonBox">
          <button className="pmButton" onClick={onClickMinus}>
            -
          </button>
          <div>{Quan}</div>
          <button className="pmButton" onClick={onClickPlus}>
            +
          </button>
        </div>
        <div>
          <span className="productPrice">{converPrice(priceSum)}원</span>
        </div>
        <button
          className="listClearbButton"
          type="button"
          onClick={() => onRemove(cart.id)}
        />
      </li>
    </div>
  );
}

export default ProductList;
