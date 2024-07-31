"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { CartContext } from "@/context/cartContext";

const TableCart = () => {
  const cartContext = React.useContext(CartContext);
  const dataCart = cartContext?.dataCart;
  const subTotal = cartContext?.subTotal;
  const onSetSubTotal = cartContext?.setSubTotal;

  const [quantities, setQuantities] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (dataCart) {
      const initialQuantities = dataCart.map(cart => cart?.quantity || 0);
      setQuantities(initialQuantities);
    }
  }, [dataCart]);

  const handleQuantityChange = (index: number, value: number) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);

    const newSubTotal = dataCart?.reduce((total, product, i) => {
      const price = product?.product?.discount ?? product?.product?.priceOrigin;
      return total + price * newQuantities[i];
    }, 0);

    if (newSubTotal !== undefined) {
      onSetSubTotal(newSubTotal);
    }
  };

  return (
    <Table className="pb-36">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">#</TableHead>
          <TableHead className="font-sans text-sm text-center">Product</TableHead>
          <TableHead className="font-sans text-sm text-center">Price</TableHead>
          <TableHead className="font-sans text-sm text-center">Quantity</TableHead>
          <TableHead className="font-sans text-sm text-center">Subtotal</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataCart?.map((product, index) => (
          <TableRow key={product?.id}>
            <TableCell className="font-sans text-sm text-center">{index + 1}</TableCell>
            <TableCell className="flex items-center justify-center gap-2">
              <div className="relative w-10 h-10">
                <Image src={product?.product?.image} alt="imgProduct" fill />
              </div>
              <span className="font-sans text-sm">{product?.product?.name}</span>
            </TableCell>
            <TableCell className="font-sans text-sm text-center">
              ${product?.product?.discount ?? product?.product?.priceOrigin}
            </TableCell>
            <TableCell className="flex justify-center">
              <div className="relative">
                <Input
                  className="w-20"
                  value={quantities[index]}
                  onChange={(e) => handleQuantityChange(index, Number(e.target.value))}
                />
                <div className="absolute top-1 right-2">
                  <ChevronUp
                    size={16}
                    className="hover:cursor-pointer hover:opacity-70"
                    onClick={() =>
                      handleQuantityChange(index, Math.min(20, quantities[index] + 1))
                    }
                  />
                  <ChevronDown
                    size={16}
                    className="hover:cursor-pointer hover:opacity-70"
                    onClick={() =>
                      handleQuantityChange(index, Math.max(0, quantities[index] - 1))
                    }
                  />
                </div>
              </div>
            </TableCell>
            <TableCell className="font-sans text-sm text-center">
              ${(
                (product?.product?.discount ?? product?.product?.priceOrigin) *
                quantities[index]
              ).toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell colSpan={4} className="font-sans text-sm text-right">Total:</TableCell>
          <TableCell className="font-sans text-sm text-center">${subTotal?.toFixed(2)}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableCart;
