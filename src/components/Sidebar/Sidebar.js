import React from "react";

import Brands from "./Brands";
import AccordionMenu from "./AccordionMenu";
import socialityBrand from "../../assets/brands/sociality-brand/sociality-brand.png";

const Sidebar = () => {
  return (
    <section>
      <div className="flex justify-center bg-socialityBrandBg cursor-pointer">
        <img src={socialityBrand} alt="sociality.io" />
      </div>
      <div className="flex h-full">
        <span className="bg-brandsBgDefault">
          <Brands />
        </span>
        <span className="bg-accordionBgDefault">
          <AccordionMenu />
        </span>
      </div>
    </section>
  );
};

export default Sidebar;
