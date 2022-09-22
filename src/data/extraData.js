//ALL THE EXTRA DATA TO BE USED:
import jsonData from "../data/data.json";
import { v4 as uuidv4 } from "uuid";

//BRAND SWITCHING TAB:
export const brandData = [
  {
    id: 0,
    name: "NAME 0 - Notifications: ",
    isClicked: false,
    src: "",
    alt: "",
    notifications: 13,
  },
  {
    id: 1,
    name: "NAME 1 - Notifications: ",
    isClicked: false,
    src: "",
    alt: "",
    notifications: 99,
  },
  {
    id: 2,
    name: "NAME 2 - Notifications: ",
    isClicked: false,
    src: "",
    alt: "",
    notifications: 41,
  },
  {
    id: 3,
    name: "NAME 3 - Notifications: ",
    isClicked: true,
    src: "",
    alt: "",
    notifications: 29,
  },
  {
    id: 4,
    name: "NAME 4 - Notifications: ",
    isClicked: false,
    src: "",
    alt: "",
    notifications: 82,
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
        menuItemIsClicked: true,
      },
      {
        id: uuidv4(),
        menuItem: "Feed",
        menuItemIsClicked: false,
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
        menuItemIsClicked: false,
      },
      {
        id: uuidv4(),
        menuItem: "Report 2",
        menuItemIsClicked: true,
      },
    ],
    isClicked: false,
  },
];

//STATUS COLORS:
export const statusColorsData = [
  { id: 1, color: "gray", statusMessage: "Published" },
  { id: 2, color: "green", statusMessage: "Scheduled" },
  { id: 3, color: "yellow", statusMessage: "Need Approval" },
  { id: 4, color: "red", statusMessage: "Error" },
  { id: 5, color: "blue", statusMessage: "Notes" },
];

//POSTS DATA:
export const allData = Object.values(jsonData.posts_by_date);
export const datesOfPostPublication = Object.keys(jsonData.posts_by_date);
export const postsData = [];

allData.map((item) => {
  return item.map((data) => {
    const dateSliced = data.published_at.split(" ")[0];
    return postsData.push({
      id: uuidv4(),
      date: dateSliced,
      status: data.status,
      channel: data.account.channel,
      message: data.entry.message,
      image: String(Object.values(data.entry.image)),
      link: data.link,
      isPublished: data.is_published,
    });
  });
});
/*
export const postsStatus = [];
export const postsSortedByStatus = datesOfPostPublication.map((date) => {
  postsData
    .filter((post) => post.date === date)
    .map((item) => postsStatus.push([item.status, item.link, item.channel]));
  return postsStatus;
});

export const postsHeaderContent = [];
export const postsSortedByHeaderContent = datesOfPostPublication.map((date) => {
  postsData
    .filter((post) => post.date === date)
    .map((item) => postsHeaderContent.push([item.date]));
  return postsHeaderContent;
});

export const postsContent = [];
export const postsSortedByContent = datesOfPostPublication.map((date) => {
  postsContent.push(date);
  postsData
    .filter((post) => post.date === date)
    .map((item) => postsContent.push([item.message, item.image]));
  return postsContent;
});*/
