import React from 'react';
import Header from '../../components/Header/Header';
import './Main.scss';
import Nav from '../../components/Nav/Nav';
import SliderImages from '../../components/SliderImages/SliderImages';
import Footer from '../../components/Footer/Footer';
import Maincontent from '../../components/Maincontent/Maincontent';

function Main({ cart, setCart, data, converPrice, stock, setStock }) {
  // const filterList = ['카테고리', '가격', '이름순', '해택']; //대장카테고리

  return (
    <div className="mainPages">
      <Nav />
      <Header />
      <SliderImages />
      <Maincontent
        cart={cart}
        setCart={setCart}
        data={data}
        converPrice={converPrice}
        stock={stock}
        setStock={setStock}
      />
      <Footer />
    </div>
  );
}

export default Main;
