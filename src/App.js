import React from 'react';
import './App.css';
import ReviewItems from './Reviews';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo category="SKATEBOARDING" name="ComfyCush Old Skool" isDiscount="yes" />
      <ReviewItems />
    </div>
  );
}

function FotoProduk() {
  return (
      <div className="Foto">
        <img alt="sneaker" src="vans.png" />
      </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount, discount } = props;
  if(isDiscount === "yes") {
    return(
      <p>Diskon {discount}% Off</p>
    );
  }
  else if(isDiscount === "coming") {
    return(
      <p>Akan ada diskon...</p>
    );
  }
  else{
    return(
      <p>Belum ada diskon</p>
    );
  }
}

function ProdukInfo(props) {
  const { category, name, isDiscount } = props;
  const benefits = ["Tidak kusut terkena air", "Bahan lebih halus", "Tidak gerah"];
  const listBenefits = benefits.map((itemBenefit) =>
  <li key={itemBenefit}>{itemBenefit}</li>
  );
  return (
    <div>
      <div className="Deskripsi">
        <p className="Oldskool">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 999.999</p>
        <CheckDiscount isDiscount={isDiscount} discount={50} />
        <p className="Info">Vans has reinvigorated the classic Old Skool by introducing ComfyCush: a new softer, cushiony outsole that gives the ComfyCush Old Skool a first-class fit that feels like walking on a cloud. Newly constructed canvas and suede uppers house simplified one-piece interiors with added arch support and new moisture-wicking lining throughout, resulting in a lightweight experience that assures you’ll Keep It Comfy at all times.</p>
        <ul>
          {listBenefits}
        </ul>
        <a onClick={(e) => TambahCart(name, e)} href="#">Add to cart </a>
      </div>
    </div>
  );

}

function TambahCart(e) {
  console.log("Membeli " + e);
}

CheckDiscount.propTypes = {
  discount: PropTypes.number
};

export default App;
