import React from "react";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input placeholder="Search Chirper" type="text" />
      </div>
      <div className="widgets_widgetContainer">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId={"1520444273354809344"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="PlayVALORANT"
          options={{ height: "400" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
