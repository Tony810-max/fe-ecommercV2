import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Title from "@/components/Title";
import { Separator } from "@/components/ui/separator";
import CardCategories from "./CardCategories";

import {
  Camera,
  Gamepad,
  Headphones,
  LaptopMinimal,
  Smartphone,
  Watch,
} from "lucide-react";

const DATA_CATEGORIES = [
  {
    Icon: Smartphone,
    title: "Phones",
  },
  {
    Icon: LaptopMinimal,
    title: "Computers",
  },
  {
    Icon: Watch,
    title: "SmartWatch",
  },
  {
    Icon: Camera,
    title: "Camera",
  },
  {
    Icon: Headphones,
    title: "HeadPhones",
  },
  {
    Icon: Gamepad,
    title: "Gaming",
  },
];

const BrowseByCategory = () => {
  return (
    <div>
      <Title title="Categories" />
      <Carousel>
        <CarouselContent>
          {DATA_CATEGORIES?.map((category) => (
            <CarouselItem
              className="basis-1/1 md:basis-1/4 lg:basis-1/6"
              key={category.title}
            >
              <CardCategories Icon={category.Icon} title={category.title} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Separator />
    </div>
  );
};

export default BrowseByCategory;
