import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { accordionActions } from "../../store/accordion-slice";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { MdNotificationsActive, MdOutlineReportProblem } from "react-icons/md";
import { TbHeartRateMonitor } from "react-icons/tb";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";
import { GiSoundWaves } from "react-icons/gi";

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

    const toggleIcon = menuItem.menuTitle.includes(
      "NOTIFICATIONS"
    ) ? null : isClicked ? (
      <AiOutlineMinus />
    ) : (
      <AiOutlinePlus />
    );

    const menuItemIcon = menuItem.menuTitle.includes("NOTIFICATIONS") ? (
      <MdNotificationsActive />
    ) : menuItem.menuTitle === "SUMMARY" ? (
      <TbHeartRateMonitor />
    ) : menuItem.menuTitle === "PUBLISH" ? (
      <BsPencilSquare />
    ) : menuItem.menuTitle === "ENGAGE" ? (
      <FaRegComments />
    ) : menuItem.menuTitle === "LISTEN" ? (
      <GiSoundWaves />
    ) : (
      <MdOutlineReportProblem />
    );

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
        <h4 onClick={() => clickHandler(menuItem.id)} id={menuItem.id}>
          {menuItemIcon} {menuItem.menuTitle} {toggleIcon}
        </h4>
        {isClicked && <ul>{renderMenuSubItems}</ul>}
      </div>
    );
  });

  return <div>{renderAccordionMenu}</div>;
};

export default AccordionMenu;
