//ALL THE EXTRA DATA TO BE USED:
import jsonData from "../data/data.json";
import { v4 as uuidv4 } from "uuid";

//BRAND SWITCHING TAB:
export const brandData = [
  {
    id: 0,
    name: "NAME 0",
    isClicked: false,
    src: "",
    alt: "",
  },
  {
    id: 1,
    name: "NAME 1",
    isClicked: false,
    src: "",
    alt: "",
  },
  {
    id: 2,
    name: "NAME 2",
    isClicked: false,
    src: "",
    alt: "",
  },
  {
    id: 3,
    name: "NAME 3",
    isClicked: true,
    src: "",
    alt: "",
  },
  {
    id: 4,
    name: "NAME 4",
    isClicked: false,
    src: "",
    alt: "",
  },
];

//ACCORDION MENU:
export const accordionData = [
  {
    id: 0,
    menuTitle: "NOTIFICATIONS",
    menuSubTitles: {
      subTitle_1: {
        id: uuidv4(),
        menuItem: "",
        menuItemIsClicked: true,
      },
      subTitle_2: {
        id: uuidv4(),
        menuItem: "",
        menuItemIsClicked: false,
      },
    },
    isClicked: false,
  },
  {
    id: 1,
    menuTitle: "SUMMARY",
    menuSubTitles: {
      subTitle_1: {
        id: uuidv4(),
        menuItem: "Summary 1",
        menuItemIsClicked: true,
      },
      subTitle_2: {
        id: uuidv4(),
        menuItem: "Summary 2",
        menuItemIsClicked: false,
      },
    },
    isClicked: false,
  },
  {
    id: 2,
    menuTitle: "PUBLISH",
    menuSubTitles: {
      subTitle_1: {
        id: uuidv4(),
        menuItem: "Compose",
        menuItemIsClicked: true,
      },
      subTitle_2: {
        id: uuidv4(),
        menuItem: "Feed",
        menuItemIsClicked: false,
      },
    },
    isClicked: true,
  },
  {
    id: 3,
    menuTitle: "ENGAGE",
    menuSubTitles: {
      subTitle_1: {
        id: uuidv4(),
        menuItem: "Engage 1",
        menuItemIsClicked: true,
      },
      subTitle_2: {
        id: uuidv4(),
        menuItem: "Engage 2",
        menuItemIsClicked: false,
      },
    },
    isClicked: false,
  },
  {
    id: 4,
    menuTitle: "LISTEN",
    menuSubTitles: {
      subTitle_1: {
        id: uuidv4(),
        menuItem: "Listen 1",
        menuItemIsClicked: true,
      },
      subTitle_2: {
        id: uuidv4(),
        menuItem: "Listen 2",
        menuItemIsClicked: false,
      },
    },
    isClicked: false,
  },
  {
    id: 5,
    menuTitle: "REPORT",
    menuSubTitles: {
      subTitle_1: {
        id: uuidv4(),
        menuItem: "Report 1",
        menuItemIsClicked: false,
      },
      subTitle_2: {
        id: uuidv4(),
        menuItem: "Report 2",
        menuItemIsClicked: true,
      },
    },
    isClicked: false,
  },
];
/*
UNUSED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export const extractedFromAccordionData = [];

for (const [key, value] of Object.entries(
  accordionData.map((item) => item.menuSubTitles)
)) {
  extractedFromAccordionData.push({ mainId: key, subMenuData: value });
}
console.log(extractedFromAccordionData);
*/

//STATUS COLORS:
export const statusColorsData = [
  { id: 0, color: "gray", statusMessage: "Published" },
  { id: 1, color: "green", statusMessage: "Scheduled" },
  { id: 2, color: "yellow", statusMessage: "Need Approval" },
  { id: 3, color: "red", statusMessage: "Error" },
  { id: 4, color: "blue", statusMessage: "Notes" },
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
