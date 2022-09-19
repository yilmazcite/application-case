import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { brandSwitchActions } from "../../store/brand-switch-slice";

const Brands = () => {
  const dispatch = useDispatch();
  const initialBrandState = useSelector((state) => state.brandSwitchSlice);

  const clickHandler = (id) => {
    dispatch(brandSwitchActions.selectBrand(id));
    dispatch(brandSwitchActions.changeOtherBrands(id));
  };

  const renderBrandsBar = initialBrandState.map((brand) => {
    const isClicked = brand.isClicked;
    return (
      <h3
        className={isClicked ? "SET-CONDITIONAL-CLASS" : ""}
        key={brand.id}
        id={brand.id}
        onClick={() => clickHandler(brand.id)}
      >
        {brand.name}
      </h3>
    );
  });

  return <>{renderBrandsBar}</>;
};

export default Brands;
