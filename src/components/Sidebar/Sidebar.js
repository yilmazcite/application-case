import React from "react";

import Brands from "./Brands";
import AccordionMenu from "./AccordionMenu";
import socialityBrand from "../../assets/brands/sociality-brand/sociality-brand.png";

const Sidebar = () => {
  return (
    <section>
      <div>
        <img src={socialityBrand} alt="sociality.io" />
      </div>
      <div className="flex">
        <span>
          <Brands />
        </span>
        <span>
          <AccordionMenu />
        </span>
      </div>
    </section>
  );
};

export default Sidebar;
