import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonIcon from "@mui/icons-material/Person";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar_twittericon" />

      <SidebarOptions active text={"Home"} Icon={HomeIcon} />
      <SidebarOptions text={"Explore"} Icon={ExploreIcon} />
      <SidebarOptions text={"Notifications"} Icon={NotificationsIcon} />
      <SidebarOptions text={"Messages"} Icon={MessageIcon} />
      <SidebarOptions text={"Bookmarks"} Icon={BookmarksIcon} />
      <SidebarOptions text={"List"} Icon={ListAltIcon} />
      <SidebarOptions text={"Profile"} Icon={PersonIcon} />
      <SidebarOptions text={"More"} Icon={MoreVertIcon} />

      {/* Button->Tweet */}
      <Button variant="outlined" className="sidebar_tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
