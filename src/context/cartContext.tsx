"use client";
import React, { createContext, useState, useMemo, useEffect } from "react";
import axios from "../util/axios.customize";
import { API_URL, ICart } from "@/types/common";

interface ICartContext {
  dataCart: ICart[] | undefined;
  setSubTotal: React.Dispatch<React.SetStateAction<number | null>>;
  subTotal: number | null;
}

export const CartContext = createContext<ICartContext>({
  dataCart: [],
  setSubTotal: () => {},
  subTotal: null,
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [dataCart, setDataCart] = useState<ICart[]>();
  const [subTotal, setSubTotal] = useState<number | null>(null);

  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "null")
      : null;

  const fetchCartUser = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/v1/carts/me/${user?._id}`
      );

      if (response) {
        setDataCart(response?.data?.items);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCartUser();
  }, []);

  const context = useMemo(() => {
    return {
      dataCart,
      setSubTotal,
      subTotal,
    };
  }, [dataCart, subTotal, setSubTotal]);

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};
