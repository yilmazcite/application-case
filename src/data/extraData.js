//ALL THE EXTRA DATA TO BE USED:
import jsonData from "../data/data.json";

import brandLogo_0 from "../assets/brands/brand-logo-0.jpg";
import brandLogo_1 from "../assets/brands/brand-logo-1.jpg";
import brandLogo_2 from "../assets/brands/brand-logo-2.jpg";
import brandLogo_3 from "../assets/brands/brand-logo-3.jpg";
import brandLogo_4 from "../assets/brands/brand-logo-4.jpg";
import brandLogo_5 from "../assets/brands/brand-logo-5.jpg";

import { v4 as uuidv4 } from "uuid";

//BRAND SWITCHING TAB:
export const brandData = [
  {
    id: 0,
    isClicked: false,
    src: brandLogo_0,
    alt: "brand 1 logo",
    notifications: 0,
  },
  {
    id: 1,
    isClicked: false,
    src: brandLogo_1,
    alt: "brand 2 logo",
    notifications: 99,
  },
  {
    id: 2,
    isClicked: false,
    src: brandLogo_2,
    alt: "brand 3 logo",
    notifications: 0,
  },
  {
    id: 3,
    isClicked: true,
    src: brandLogo_3,
    alt: "brand 4 logo",
    notifications: 29,
  },
  {
    id: 4,
    isClicked: false,
    src: brandLogo_4,
    alt: "brand 5 logo",
    notifications: 0,
  },
  {
    id: 5,
    isClicked: false,
    src: brandLogo_5,
    alt: "brand 6 logo",
    notifications: 0,
  },
];

//ACCORDION MENU:
export const accordionData = [
  {
    id: 0,
    menuTitle: "NOTIFICATIONS",
    menuSubTitles: [
      {
        id: uuidv4(),
        menuItem: "",
        menuItemIsClicked: true,
      },
      {
        id: uuidv4(),
        menuItem: "",
        menuItemIsClicked: false,
      },
    ],
    isClicked: false,
    notifications: 0,
  },
  {
    id: 1,
    menuTitle: "SUMMARY",
    menuSubTitles: [
      { id: uuidv4(), menuItem: "Summary 1", menuItemIsClicked: true },
      { id: uuidv4(), menuItem: "Summary 2", menuItemIsClicked: false },
    ],
    isClicked: false,
  },
  {
    id: 2,
    menuTitle: "PUBLISH",
    menuSubTitles: [
      {
        id: uuidv4(),
        menuItem: "Compose",
        menuItemIsClicked: false,
      },
      {
        id: uuidv4(),
        menuItem: "Feed",
        menuItemIsClicked: true,
      },
    ],
    isClicked: true,
  },
  {
    id: 3,
    menuTitle: "ENGAGE",
    menuSubTitles: [
      {
        id: uuidv4(),
        menuItem: "Engage 1",
        menuItemIsClicked: true,
      },
      {
        id: uuidv4(),
        menuItem: "Engage 2",
        menuItemIsClicked: false,
      },
    ],
    isClicked: false,
  },
  {
    id: 4,
    menuTitle: "LISTEN",
    menuSubTitles: [
      {
        id: uuidv4(),
        menuItem: "Listen 1",
        menuItemIsClicked: true,
      },
      {
        id: uuidv4(),
        menuItem: "Listen 2",
        menuItemIsClicked: false,
      },
    ],
    isClicked: false,
  },
  {
    id: 5,
    menuTitle: "REPORT",
    menuSubTitles: [
      {
        id: uuidv4(),
        menuItem: "Report 1",
        menuItemIsClicked: true,
      },
      {
        id: uuidv4(),
        menuItem: "Report 2",
        menuItemIsClicked: false,
      },
    ],
    isClicked: false,
  },
];

//STATUS COLORS:
export const statusColorsData = [
  { id: 0, color: "#f7bf38", statusMessage: "Need Approval" },
  { id: 1, color: "#3ac183", statusMessage: "Scheduled" },
  { id: 2, color: "#67b1f2", statusMessage: "Publishing" },
  { id: 3, color: "#acacac", statusMessage: "Published" },
  { id: 4, color: "#fb6450", statusMessage: "Error" },
];

//POSTS DATA:
export const allData = Object.values(jsonData.posts_by_date);
export const datesOfPostPublication = Object.keys(jsonData.posts_by_date);
export const postsData = [];

allData.map((item) => {
  return item.map((data) => {
    const dateSliced = data.published_at.split(" ")[0];
    const publishedHour = data.published_at.split(" ")[1].slice(0, -3);
    return postsData.push({
      id: uuidv4(),
      date: dateSliced,
      dateHour: publishedHour,
      status: data.status,
      channel: data.account.channel,
      message: data.entry.message,
      image: String(Object.values(data.entry.image)),
      link: data.link,
      isPublished: data.is_published,
    });
  });
});

//DATE FORMATTING:
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
