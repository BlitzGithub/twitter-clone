import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://i.pinimg.com/736x/dd/58/53/dd58534abd28bd1a53115d3a61773be1.jpg" />
          <textarea placeholder="What's Happening?" type={"text"} rows="6" />
        </div>
          <input className="tweetBox_imginput" placeholder="Optional: Enter Image URL" type={"text"}/>
        <Button className="tweetBox_tweetbtn">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
