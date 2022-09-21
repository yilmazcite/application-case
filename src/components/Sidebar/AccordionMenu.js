import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { accordionActions } from "../../store/accordion-slice";

const AccordionMenu = () => {
  const initialAccordionState = useSelector((state) => state.accordionSlice);
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    dispatch(accordionActions.selectMenuItem(id));
    dispatch(accordionActions.updateMenuItems(id));
  };

  const renderAccordionMenu = initialAccordionState.map((menuItem) => {
    const isClicked = menuItem.isClicked;
    const menuItem_1 = menuItem.menuSubTitles.subTitle_1;
    const menuItem_2 = menuItem.menuSubTitles.subTitle_2;

    return (
      <div key={menuItem.id}>
        <h3 onClick={() => clickHandler(menuItem.id)} id={menuItem.id}>
          {menuItem.menuTitle}
        </h3>
        {isClicked && (
          <ul>
            <li>{menuItem_1.menuItem}</li>
            <li>{menuItem_2.menuItem}</li>
          </ul>
        )}
      </div>
    );
  });

  return <div>{renderAccordionMenu}</div>;
};

export default AccordionMenu;
