import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CardProduct from "@/components/CardProduct";

const CarouselCardProduct = () => {
  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 1500,
        }),
      ]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem className="basis-1/3">
          <CardProduct
            image="images/HomePage/flashSales1.webp"
            name="HAVIT HV-G92 Gamepad"
            price={120}
            sale={40}
            discount={160}
            rating={4}
            countReview={88}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <CardProduct
            image="images/HomePage/flashSales1.webp"
            name="HAVIT HV-G92 Gamepad"
            price={120}
            sale={40}
            discount={160}
            rating={4}
            countReview={88}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <CardProduct
            image="images/HomePage/flashSales1.webp"
            name="HAVIT HV-G92 Gamepad"
            price={120}
            sale={40}
            discount={160}
            rating={4}
            countReview={88}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <CardProduct
            image="images/HomePage/flashSales1.webp"
            name="HAVIT HV-G92 Gamepad"
            price={120}
            sale={40}
            discount={160}
            rating={4}
            countReview={88}
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselCardProduct;
