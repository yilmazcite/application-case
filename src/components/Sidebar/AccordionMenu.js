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

  const menuItemClickHandler = (mainId, subId) => {
    dispatch(accordionActions.updateSubMenuItems({ mainId, subId }));
  };

  const renderAccordionMenu = initialAccordionState.map((menuItem) => {
    const menuNotificaton = initialAccordionState[0].notifications;
    //use menuNotification for styling
    const isClicked = menuItem.isClicked;

    const renderMenuSubItems = menuItem.menuSubTitles.map((subItem) => {
      const subMenuIsClicked = subItem.menuItemIsClicked;
      //const style = subMenuIsClicked ? {...style} : undefined;
      return (
        <li
          //style={style}
          key={subItem.id}
          onClick={() => menuItemClickHandler(menuItem.id, subItem.id)}
        >
          {subItem.menuItem}
        </li>
      );
    });

    return (
      <div key={menuItem.id}>
        <h3 onClick={() => clickHandler(menuItem.id)} id={menuItem.id}>
          {menuItem.menuTitle}
        </h3>
        {isClicked && <ul>{renderMenuSubItems}</ul>}
      </div>
    );
  });

  return <div>{renderAccordionMenu}</div>;
};

export default AccordionMenu;
