import React from "react";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import ROUTES from "@/types/routes";
import PriceCart from "../../../../../components/PriceCart";

const TotalCart = () => {
  return (
    <div className="border-2 border-black rounded-md py-8 px-6 min-w-[30rem] space-y-6">
      <span className="font-sans text-lg font-semibold">Cart Total</span>
      <div className="space-y-4">
        <PriceCart price={"1750"} title="Subtotal" />
        <Separator />

        <PriceCart price={"Free"} title="Shipping" />
        <Separator />

        <PriceCart price={"1750"} title="Total" />

        <div className="flex justify-center">
          <Link
            href={ROUTES.CHECKOUT}
            className="bg-[#db4444] text-white rounded-md font-sans text-sm py-4 px-12 hover:opacity-70"
          >
            Procees to checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TotalCart;
