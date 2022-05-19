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
        text={"Welcome to Twitter Clone!"}
        avatar={
          "https://i.pinimg.com/550x/5f/7d/7a/5f7d7a055e0f00a0f1dc9a036c74bfc8.jpg"
        }
        image={"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk"}
      />
      <Post
        displayName={"Ayush Kumar"}
        userName={"KAyush2702"}
        verified={true}
        text={"Hope You Enjoy!"}
        avatar={
          "https://i.pinimg.com/550x/5f/7d/7a/5f7d7a055e0f00a0f1dc9a036c74bfc8.jpg"
        }
        image={
          "https://thumbs.dreamstime.com/b/enjoy-comic-text-collection-sound-effects-pop-art-style-set-speech-bubble-word-short-phrase-cartoon-expression-134687161.jpg"
        }
      />
    </div>
  );
}

export default Feed;
