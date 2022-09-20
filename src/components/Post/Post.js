import React from "react";
import PostDataContainer from "./PostMain/PostDataContainer";
import { postsData, datesOfPostPublication } from "../../data/extraData";

const Post = () => {
  console.log(datesOfPostPublication);

  const renderPostContainer = datesOfPostPublication.map((date) => {
    return postsData
      .filter((postDate) => postDate.date === date)
      .map((post, i) => {
        return (
          <>
            <PostDataContainer key={i} postData={post} />
          </>
        );
      });
  });

  /*const renderPostContainer = datesOfPostPublication.every((date) => {
    console.log(date, "date of .every()");
    return postsData
      .filter((postDate) => postDate.date === date)
      .map((post, i) => {
        console.log(post, "post .map()");
        return (
          <>
            <h2>{date}</h2>
            <PostDataContainer key={i} postData={post} />
          </>
        );
      });
  });*/

  //return <PostDataContainer key={i} postData={post} />;

  return <>{renderPostContainer}</>;
};

export default Post;

/*for (let date in datesOfPostPublication) {
    postsData
      .filter((postDate) => postDate.date === date)
      .map((post, i) => {
        return (
          <>
            <h2>{date}</h2> <PostDataContainer key={i} postData={post} />
          </>
        );
      });
  }*/
/*
  const renderPostContainer = postsData.map((post, i) => {
    return <PostDataContainer key={i} postData={post} />;
  });
*/

//const allData = Object.values(jsonData.posts_by_date);
//const datesOfPostPublication = Object.keys(jsonData.posts_by_date);
//const postsData = [];

/*allData.map((item) => {
    return item.map((data) => {
      const dateSliced = data.published_at.split(" ")[0];
      return postsData.push({
        date: dateSliced,
        status: data.status,
        channel: data.account.channel,
        message: data.entry.message,
        image: String(Object.values(data.entry.image)),
      });
    });
  });*/

/*const filteredPostsData = [];
  datesOfPostPublication.forEach((item) => {
    filteredPostsData.push(
      postsData.filter((element) => item === element.date)
    );
  });*/

/*


  const render = filteredPostsData.map((item) => {
    //if(datesOfPostPublication.forEach(date=>{date === item.date})
    item.map((el, i) => {
      return (
        <h3 key={i}>
          {el.date} & {el.status}
        </h3>
      );
    });
  });
  const renderFinal = datesOfPostPublication.forEach((item) => {
    postsData
      .filter((post) => {
        console.log(post.date, "post.date");
        return post.date === item;
      })
      .map((item, i) => {
        console.log(item, "item");
        return (
          <p key={i}>
            {item.date},{item.status}
          </p>
        );
      });
  });


const render = filteredPostsData.map((item) => {
    //if(datesOfPostPublication.forEach(date=>{date === item.date})
    item.map((el, i) => {
      return (
        <h3 key={i}>
          {el.date} & {el.status}
        </h3>
      );
    });
  });

  /*const newRender = datesOfPostPublication.forEach((date) => {
    filteredPostsData.forEach((item) => {
      filteredPostsData
        .filter((item, i) => {
          //console.log(item[i].date);
          return date === item[i].date;
        })
        .map((item, i) => {
          console.log(item[i].channel, item[i].date);
          return (
            <p key={i}>
              {item[i].message}, {item[i].status}, {item[i].date}
            </p>
          );
        });
    });
  });
*/
/*const renderAccToDate = postsData
    .filter((item) => {
      return item.date === datesOfPostPublication[0];
    })
    .map((item, i) => {
      return (
        <h3 key={i}>
          {item.message}, {item.status}
        </h3>
      );
    });

  const x = datesOfPostPublication.map((item, i) => {
    return <h1 key={i}>{item}</h1>;
  });
*/
/*
  
      {x}
      {renderAccToDate}
      {newRender}
       */
