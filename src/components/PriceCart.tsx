import React from "react";

interface IPriceCart {
  title: string;
  price: string;
}

const PriceCart: React.FC<IPriceCart> = ({ price, title }) => {
  return (
    <div className="flex justify-between">
      <span>{title}:</span>
      <span>${price}</span>
    </div>
  );
};

export default PriceCart;
