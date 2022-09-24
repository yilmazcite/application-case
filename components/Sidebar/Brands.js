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

    const selectedBrandBar = isClicked && (
      <div className="absolute left-[-17px] top-0 border w-[0.5rem] h-[2.8rem] border-accordionMenuItem bg-accordionMenuItem rounded-r-md" />
    );

    const unselectedBrand = !isClicked && (
      <div className="absolute left-0 top-0 w-[2.7rem] h-[2.6rem] bg-brandsBgDefault opacity-50 cursor-pointer" />
    );

    //styles
    const brandClickedStyle = isClicked
      ? "w-[8.2rem] h-[2.2rem] rounded-lg border-xl cursor-pointer"
      : "w-[8.2rem] h-[2.2rem] rounded-lg border-xl cursor-pointer";
    const notificationStyle =
      "absolute top-[-0.50rem] right-[-0.45rem] px-1 bg-brandsNotificationBg rounded-full text-sm text-brandsBg cursor-default";

    return (
      <div key={brand.id} id={brand.id} onClick={() => clickHandler(brand.id)}>
        <div className="relative my-[1rem] mx-[0.9rem] mb-[1.3rem] p-[0.2rem] rounded-md bg-brandsBg">
          {selectedBrandBar}
          {unselectedBrand}
          <img className={brandClickedStyle} src={brandImage} alt={imgAlt} />
          <p className={notificationStyle}>{!isClicked && notifications}</p>
        </div>
      </div>
    );
  });

  return <div className="mt-[1.3rem]">{renderBrandsBar}</div>;
};

export default Brands;