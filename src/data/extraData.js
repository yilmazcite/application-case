//ALL THE EXTRA DATA TO BE USED:

import jsonData from "../data/data.json";

//BRAND SWITCHING TAB
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

//ACCORDION MENU
export const accordionData = [
  {
    id: 0,
    menuTitle: "NOTIFICATIONS",
    menuSubTitles: {
      subTitle_1: "",
      subTitle_2: "",
    },
    isClicked: false,
  },
  {
    id: 1,
    menuTitle: "SUMMARY",
    menuSubTitles: {
      subTitle_1: "Summary menu",
      subTitle_2: "Summary menu",
    },
    isClicked: false,
  },
  {
    id: 2,
    menuTitle: "PUBLISH",
    menuSubTitles: {
      subTitle_1: "Compose",
      subTitle_2: "Feed",
    },
    isClicked: true,
  },
  {
    id: 3,
    menuTitle: "ENGAGE",
    menuSubTitles: {
      subTitle_1: "Engage menu",
      subTitle_2: "Engage menu",
    },
    isClicked: false,
  },
  {
    id: 4,
    menuTitle: "LISTEN",
    menuSubTitles: {
      subTitle_1: "Listen menu",
      subTitle_2: "Listen menu",
    },
    isClicked: false,
  },
  {
    id: 5,
    menuTitle: "REPORT",
    menuSubTitles: {
      subTitle_1: "Report menu",
      subTitle_2: "Report menu",
    },
    isClicked: false,
  },
];

//STATUS COLORS
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
});
