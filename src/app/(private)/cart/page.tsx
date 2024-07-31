import React from "react";
import BreadcrumbCart from "./components/BreadcrumbCart";
import TableCart from "./components/TableCart";
import ReuturnUpdate from "./components/ReuturnUpdate";
import CheckoutCart from "./components/CheckoutCart";
import { CartProvider } from "@/context/cartContext";

const CartPage = () => {
  return (
    <div className="container">
      <BreadcrumbCart />
      <div className="pb-36">
        <div className="space-y-6">
          <CartProvider>
            <TableCart />
            <ReuturnUpdate />
          </CartProvider>
        </div>
        <CheckoutCart />
      </div>
    </div>
  );
};

export default CartPage;
