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
    const notifications = brand.notifications;
    const isClicked = brand.isClicked;
    if (brand.isClicked) {
      dispatch(accordionActions.updateNotifications(notifications));
    }
    return (
      <h3
        className={isClicked ? "SET-CONDITIONAL-CLASS" : ""}
        key={brand.id}
        id={brand.id}
        onClick={() => clickHandler(brand.id)}
      >
        {brand.name}
        {notifications && !isClicked && notifications}
      </h3>
    );
  });

  return <>{renderBrandsBar}</>;
};

export default Brands;
