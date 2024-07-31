import React from "react";

import FlashSalesSection from "./(public)/HomePage/FlashSales";
import BestSellingProducts from "./(public)/HomePage/BestSellingProducts";
import BrowseByCategory from "./(public)/HomePage/BrowseByCategory";
import ExploreOurProducts from "./(public)/HomePage/ExploreOurProducts";
import Featured from "./(public)/HomePage/Featured";
import ServiceSection from "./(public)/HomePage/ServiceSection";
import { ProductProivder } from "@/context/productContex";

const HomePage = () => {
  return (
    <div className="container">
      <ProductProivder>
        <FlashSalesSection />
      </ProductProivder>
      <BrowseByCategory />
      <BestSellingProducts />
      <ExploreOurProducts />
      <Featured />
      <ServiceSection />
    </div>
  );
};

export default HomePage;
