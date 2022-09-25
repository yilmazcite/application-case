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
    const brandClickedStyle =
      "w-[8.2rem] h-[2.2rem] rounded-lg border-xl cursor-pointer";
    const notificationStyle =
      "absolute top-[-0.50rem] right-[-0.45rem] px-1 rounded-full text-sm text-brandsBg bg-brandsNotificationBg cursor-default";
    const selectedBrandStyle = isClicked
      ? "absolute left-[-1.06rem] top-[-1px] border w-[0.5rem] h-[2.7rem] border-accordionMenuItem bg-accordionMenuItem rounded-r-md"
      : "absolute fixed left-0 top-0 w-[3.5rem] h-[2.6rem] bg-brandsBgDefault opacity-60 cursor-pointer";

    return (
      <div key={brand.id} id={brand.id} onClick={() => clickHandler(brand.id)}>
        <div className="relative my-[1rem] mx-[0.9rem] mb-[1.3rem] p-[0.2rem] rounded-md bg-brandsBg">
          <div className={selectedBrandStyle} />
          <img className={brandClickedStyle} src={brandImage} alt={imgAlt} />
          <p className={notificationStyle}>{!isClicked && notifications}</p>
        </div>
      </div>
    );
  });

  return <div className="mt-[1.3rem]">{renderBrandsBar}</div>;
};

export default Brands;
