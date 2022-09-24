import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { accordionActions } from "../../store/accordion-slice";
import { brandSwitchActions } from "../../store/brand-switch-slice";

const Brands = () => {
  const initialBrandState = useSelector((state) => state.brandSwitchSlice);
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    dispatch(brandSwitchActions.selectBrand(id));
    dispatch(brandSwitchActions.changeOtherBrands(id));
  };

  const renderBrandsBar = initialBrandState.map((brand) => {
    const brandImage = brand.src;
    const imgAlt = brand.alt;
    const notifications = brand.notifications;
    const isClicked = brand.isClicked;
    if (brand.isClicked) {
      dispatch(accordionActions.updateNotifications(notifications));
    }
    return (
      <div
        className={isClicked ? "opacity-100" : "opacity-50"}
        key={brand.id}
        id={brand.id}
        onClick={() => clickHandler(brand.id)}
      >
        <img className="w-[5rem]" src={brandImage} alt={imgAlt} />
        <span>{notifications && !isClicked && notifications}</span>
      </div>
    );
  });

  return <>{renderBrandsBar}</>;
};

export default Brands;
