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

const TableCart = () => {
  const [quantity, setQuantity] = React.useState(0);
  const countStock = 20;
  return (
    <Table className="pb-36 ">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">#</TableHead>
          <TableHead className="font-sans text-sm text-center">
            Product
          </TableHead>
          <TableHead className="font-sans text-sm text-center">Price</TableHead>
          <TableHead className="font-sans text-sm text-center">
            Quantity
          </TableHead>
          <TableHead className="font-sans text-sm text-center">
            Subtotal
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-sans text-sm text-center">1</TableCell>
          <TableCell className=" flex items-center justify-center gap-2">
            <div className="relative w-10 h-10">
              <Image
                src={"/images/HomePage/flashSales1.webp"}
                alt="imgProduct"
                fill
              />
            </div>
            <span className="font-sans text-sm ">LCD Monitor</span>
          </TableCell>
          <TableCell className="font-sans text-sm text-center">
            $250.00
          </TableCell>
          <TableCell className="flex justify-center">
            <div className="relative ">
              <Input
                className="w-20 "
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <div className="absolute top-1 right-2">
                <ChevronUp
                  size={16}
                  className="hover:cursor-pointer hover:opacity-70"
                  onClick={() =>
                    setQuantity((prev) => Math.min(countStock, prev + 1))
                  }
                />
                <ChevronDown
                  size={16}
                  className="hover:cursor-pointer hover:opacity-70"
                  onClick={() => {
                    setQuantity((prev) => Math.max(0, prev - 1));
                  }}
                />
              </div>
            </div>
          </TableCell>
          <TableCell className="font-sans text-sm text-center">
            $250.00
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableCart;
