import React from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed_header">
        <h1>Home</h1>
      </div>

      {/* Tweet-Box */}
      <TweetBox />

      {/* Post */}
      <Post
        displayName={"Ayush Kumar"}
        userName={"KAyush2702"}
        verified={true}
        text={"'Sup Niggaz!"}
        avatar={
          "https://i.pinimg.com/550x/5f/7d/7a/5f7d7a055e0f00a0f1dc9a036c74bfc8.jpg"
        }
        image={"https://i.imgflip.com/3rxe7x.jpg"}
      />
      <Post
        displayName={"Ayush Kumar"}
        userName={"KAyush2702"}
        verified={true}
        text={"'Sup Niggaz!"}
        avatar={
          "https://i.pinimg.com/550x/5f/7d/7a/5f7d7a055e0f00a0f1dc9a036c74bfc8.jpg"
        }
        image={
          "https://lh6.googleusercontent.com/RWLHu3sQ1me6WtCQVPonWcOOJTNQnGUpwXIuv1ktrMmWdPZxo_4Ro0XuCtlvomUW5GT3zJZtJWYdijfQpaqCPTKrQ2kGH6rOTEDkUXtScOHpJ0XeueU5zXad28yif72ODJLrKzUO"
        }
      />
    </div>
  );
}

export default Feed;
