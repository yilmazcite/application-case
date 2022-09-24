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
      return (
        <li
          className={
            subMenuIsClicked
              ? "text-accordionMenuItem list-disc list-inside"
              : "text-[#f8fafc] list-disc list-inside"
          }
          key={subItem.id}
          onClick={() => menuItemClickHandler(menuItem.id, subItem.id)}
        >
          {subItem.menuItem}
        </li>
      );
    });

    return (
      <div key={menuItem.id}>
        <h4
          onClick={() => clickHandler(menuItem.id)}
          id={menuItem.id}
          className={
            isClicked
              ? "bg-accordionMenuItem text-[#f8fafc] flex justify-between"
              : "bg-accordionBgDefault text-[#f8fafc] flex justify-between"
          }
        >
          <span className="flex items-center">
            {menuItemIcon} {menuItem.menuTitle}
          </span>
          <span
            className={
              isClicked ? "text-accordionBgDefault mr-2" : "text-[#f8fafc] mr-2"
            }
          >
            {toggleIcon}
          </span>
        </h4>
        {isClicked && (
          <ul className="bg-accordionSelectedBg ml-3">{renderMenuSubItems}</ul>
        )}
      </div>
    );
  });

  return (
    <div className="bg-accordionBgDefault w-[13rem]">{renderAccordionMenu}</div>
  );
};

export default AccordionMenu;
