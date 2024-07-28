"use client";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import React from "react";
import ReactStars from "react-rating-stars-component";
import { Button } from "./ui/button";

interface ICardProduct {
  price: number;
  discount: number;
  name: string;
  rating: number;
  countReview: number;
  sale?: number;
  image: string;
}

const CardProduct: React.FC<ICardProduct> = ({
  name,
  discount,
  price,
  rating,
  countReview,
  sale,
  image,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className="space-y-4 w-fit hover:cursor-grabbing"
      onMouseLeave={() => setOpen(false)}
      onMouseEnter={() => setOpen(true)}
    >
      <div className="relative bg-[#f5f5f5] w-fit px-10 py-9 rounded-md">
        <div className="relative w-48 h-44">
          <Image src={image} alt="imgFlashSales" fill priority unoptimized />
          {open && (
            <Button
              variant={"destructive"}
              className={`absolute font-sans text-base w-full bottom-[-30px]   ${
                open ? "animate__animated animate__slideInUp" : ""
              }`}
            >
              Add To Cart
            </Button>
          )}
        </div>
        {sale && (
          <span className="absolute top-3 left-3 bg-[#db4444] px-3 py-1 text-white rounded-lg">
            -{sale}%
          </span>
        )}
        <div className="absolute top-3 right-3 space-y-2">
          <Heart
            size={28}
            fill="white"
            className="px-1 py-1 bg-white rounded-full"
          />
          <Eye
            size={28}
            fill="white"
            className="px-1 py-1 bg-white rounded-full"
          />
        </div>
      </div>
      <div className="space-y-2 w-fit">
        <span className="font-sans text-lg font-bold">{name}</span>
        <div className="space-x-3">
          <span className="font-sans text-base text-red-600 ">${price}</span>
          <span className="font-sans text-base line-through text-[#494949]">
            ${discount}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <ReactStars
            count={5}
            edit={false}
            value={rating}
            size={24}
            activeColor="#ffd700"
          />
          <span className="font-sans text-base text-[#6e644f] font-bold">
            ({countReview})
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
