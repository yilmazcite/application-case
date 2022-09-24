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

    //styles
    const brandClickedStyle = isClicked
      ? "opacity-100 w-[6.6rem] h-[2.7rem] rounded-lg border-xl cursor-pointer"
      : "opacity-50 w-[6.6rem] h-[2.7rem] rounded-lg border-xl cursor-pointer";
    const notificationStyle =
      "absolute top-[-0.50rem] right-[-0.45rem] px-1 bg-brandsNotificationBg  rounded-full text-sm text-brandsBg cursor-default";

    return (
      <div key={brand.id} id={brand.id} onClick={() => clickHandler(brand.id)}>
        <div className="relative my-[1rem] mx-3 p-[0.2rem] rounded-lg bg-brandsBg">
          <img className={brandClickedStyle} src={brandImage} alt={imgAlt} />
          <p className={notificationStyle}>
            {notifications && !isClicked && notifications}
          </p>
        </div>
      </div>
    );
  });

  return <>{renderBrandsBar}</>;
};

export default Brands;
