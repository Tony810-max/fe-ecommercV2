import React from "react";
import RoutePage from "./components/RoutePage";
import { Input } from "@/components/ui/input";
import { Heart, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <div className="container flex items-center justify-between pt-10 pb-4">
      <span className="font-sans text-3xl font-bold py-2 block">Exclusive</span>
      <RoutePage />
      <div className="flex items-center gap-6">
        <Input
          className="bg-[##f5f5f5]"
          placeholder="What are you looking for?"
        />
        <div className="flex gap-4">
          <Heart />
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Header;
